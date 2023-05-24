import { FC } from 'react'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { ArticleView, IArticle } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'

interface ArticleListProps {
    className?: string
    articles: IArticle[]
    isLoading?: boolean
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.TILE ? 9 : 4)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
        ))

export const ArticleList: FC<ArticleListProps> = (props) => {
    const { className, articles, isLoading, view = ArticleView.TILE } = props

    const renderArticle = (article: IArticle) => {
        return <ArticleListItem article={article} view={view} key={article.id} />
    }

    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {!!articles.length && articles.map(renderArticle)}
            {isLoading && (
                <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                    {getSkeletons(view)}
                </div>
            )}
        </div>
    )
}
