import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import { ArticleDetails, ArticleList } from '05_entities/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { Text, TextSize } from '06_shared/ui/Text/Text'
import { CommentList } from '05_entities/Comment'
import cls from './ArticleDetailsPage.module.scss'
import {
    DynamicModuleLoader,
    ReducersList,
} from '06_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice'
import { useAppDispatch, useAppSelector } from '06_shared/lib/hooks'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from '06_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from '04_features/AddNewComment'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button } from '06_shared/ui/Button'
import { ThemeButton } from '06_shared/ui/Button/Button'
import { RoutePath } from '06_shared/config/routeConfig/routeConfig'
import { Page } from '03_widgets/Page/Page'
import { getArticleRecomendations } from '../../model/slice/articleDetailsRecomendationsSlice'
import { getArticleRecomendationsIsLoading } from '../../model/selectors/recomendation'
import { fetchArticleRecomendations } from '../../model/services/fetchArticleRecomendations/fetchArticleRecomendations'
import { articleDetailsPageReducer } from '../../model/slice'

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props
    const { t } = useTranslation('article-details')
    const { id } = useParams<{ id: string }>()
    const comments = useAppSelector(getArticleComments.selectAll)
    const recomendations = useAppSelector(getArticleRecomendations.selectAll)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const commentIsLoading = useAppSelector(getArticleCommentsIsLoading)
    const recomendationsIsLoading = useAppSelector(getArticleRecomendationsIsLoading)

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text))
        },
        [dispatch]
    )

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate])

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id))
        dispatch(fetchArticleRecomendations())
    })

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <Page className={classNames('', {}, [className])}>
                <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id} />
                <Text
                    title={t('Рекомендуем') as string}
                    className={cls.commentTitle}
                    size={TextSize.L}
                />
                <ArticleList
                    articles={recomendations}
                    isLoading={recomendationsIsLoading}
                    target="_blankf"
                />
                <Text
                    title={t('Комментарии') as string}
                    className={cls.commentTitle}
                    size={TextSize.L}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentIsLoading}
                    className={cls.comment}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    )
}

export default memo(ArticleDetailsPage)
