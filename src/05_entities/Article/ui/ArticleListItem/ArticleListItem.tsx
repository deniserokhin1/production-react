import { FC, useCallback } from 'react'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'
import {
    ArticleBlockType,
    ArticleTextBlock,
    ArticleView,
    IArticle,
} from '05_entities/Article/model/types/article'
import { Text } from '06_shared/ui/Text/Text'
import StarIcon from '06_shared/assets/icons/star.svg'
import { Icon } from '06_shared/ui/Icon/Icon/Icon'
import { useHover } from '06_shared/lib/hooks/useHover/useHover'
import { Card } from '06_shared/ui/Card/Card'
import { Avatar } from '06_shared/ui/Avatar/Avatar'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent/ArticleTextBlockComponent'
import { Button } from '06_shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { RoutePath } from '06_shared/config/routeConfig/routeConfig'
import { ThemeButton } from '06_shared/ui/Button/Button'

interface ArticleListItemProps {
    className?: string
    article: IArticle
    view: ArticleView
}

export const ArticleListItem: FC<ArticleListItemProps> = (props) => {
    const { className, article, view = ArticleView.TILE } = props
    const [isHover, bindHover] = useHover()
    const { t } = useTranslation()
    const navigate = useNavigate()

    const types = <Text text={article.type.join(', ')} className={cls.types} />

    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={StarIcon} />
        </>
    )

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.articles_details + article.id)
    }, [article.id, navigate])

    if (view === ArticleView.ROW) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT
        ) as ArticleTextBlock

        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])}>
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme={ThemeButton.OUTLINE}>
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        )
    }

    return (
        <div className={classNames('', {}, [className, cls[view]])} {...bindHover}>
            <Card onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} alt={article.title} className={cls.img} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    )
}
