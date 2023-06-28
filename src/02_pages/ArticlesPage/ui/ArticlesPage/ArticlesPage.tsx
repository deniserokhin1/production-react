import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import { ArticleList } from '05_entities/Article'
import {
    DynamicModuleLoader,
    ReducersList,
} from '06_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlePageReducer, getArticles } from '../../model/slices/ArticlePageSlice'
import { useInitialEffect } from '06_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch, useAppSelector } from '06_shared/lib/hooks'
import {
    getArticlePageIsLoading,
    getArticlePageView,
} from '../../model/selectors/articlePageSelectors'
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage'
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage'
import { Page } from '03_widgets/Page/Page'
import { ArticlePageFilters } from '../ArticlePageFilter/ArticlePageFilters'
import cls from './ArticlesPage.module.scss'
import { useSearchParams } from 'react-router-dom'

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
    const [searchParams] = useSearchParams()

    useInitialEffect(() => {
        dispatch(initArticlePage(searchParams))
    })

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
                <ArticlePageFilters />
                <ArticleList className={cls.list} isLoading={isLoading} view={view} articles={articles} />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticlesPage)
