import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import { ArticleList, ArticleView, ArticleViewSelector } from '05_entities/Article'
import {
    DynamicModuleLoader,
    ReducersList,
} from '06_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
    articlePageActions,
    articlePageReducer,
    getArticles,
} from '../../model/slices/ArticlePageSlice'
import { useInitialEffect } from '06_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch, useAppSelector } from '06_shared/lib/hooks'
import {
    getArticlePageIsLoading,
    getArticlePageView,
} from '../../model/selectors/articlePageSelectors'
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage'
import { Page } from '03_widgets/Page/Page'

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlePage: articlePageReducer,
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props
    const { t } = useTranslation('article')
    const dispatch = useAppDispatch()
    const articles = useAppSelector(getArticles.selectAll)
    const isLoading = useAppSelector(getArticlePageIsLoading)
    const view = useAppSelector(getArticlePageView)

    useInitialEffect(() => {
        dispatch(initArticlePage())
    })

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view))
        },
        [dispatch]
    )

    const onLoadNextPart = useCallback(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlePage())
        }
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                onScrollEnd={onLoadNextPart}
                className={classNames('', {}, [className])}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList isLoading={isLoading} view={view} articles={articles} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
