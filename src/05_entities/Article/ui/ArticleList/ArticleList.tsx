import { FC, HTMLAttributeAnchorTarget } from 'react'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { ArticleView, IArticle } from '../../model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from '06_shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'

interface ArticleListProps {
    className?: string
    articles: IArticle[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.TILE ? 9 : 4)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
        ))

export const ArticleList: FC<ArticleListProps> = (props) => {
    const { className, articles, isLoading, view = ArticleView.TILE, target } = props

    const { t } = useTranslation('article')

    const renderArticle = (article: IArticle) => {
        return (
            <ArticleListItem
                article={article}
                view={view}
                key={article.id}
                target={target}
            />
        )
    }

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены') as string} />
            </div>
        )
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
