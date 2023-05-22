import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import {
    DynamicModuleLoader,
    ReducersList,
} from '06_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch, useAppSelector } from '06_shared/lib/hooks'
import {
    getArticleDetailData,
    getArticleDetailError,
    getArticleDetailIsLoading,
} from '../../model/selectors/articleDetails'
import { Text, TextAlign, TextSize } from '06_shared/ui/Text/Text'
import { Skeleton } from '06_shared/ui/Skeleton'
import { Avatar } from '06_shared/ui/Avatar/Avatar'
import KolokolIcon from '06_shared/assets/icons/kolokol.svg'
import StarIcon from '06_shared/assets/icons/star.svg'
import { Icon } from '06_shared/ui/Icon/Icon/Icon'
import { ArticleBlock, ArticleBlockType } from '../../model/types/article'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent/ArticleTextBlockComponent'
import { fetchArticleById } from '05_entities/Article/model/services/fetchArticleById/fetchArticleById'
import { useInitialEffect } from '06_shared/lib/hooks/useInitialEffect/useInitialEffect'

interface ArticleDetailsProps {
    className?: string
    id: string
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

const renderBlock = (block: ArticleBlock, index: number) => {
    switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCodeBlockComponent className={cls.block} block={block} key={index} />

        case ArticleBlockType.IMAGE:
            return <ArticleImageBlockComponent className={cls.block} block={block} key={index} />

        case ArticleBlockType.TEXT:
            return <ArticleTextBlockComponent className={cls.block} block={block} key={index} />

        default:
            return null
    }
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const article = useAppSelector(getArticleDetailData)
    const isLoading = useAppSelector(getArticleDetailIsLoading)
    // const isLoading = true
    const error = useAppSelector(getArticleDetailError)

    useInitialEffect(() => {
        dispatch(fetchArticleById(id))
    })

    let content

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        )
    } else if (error) {
        content = (
            <Text
                title={t('Произошла ошибка при загрузке страницы') as string}
                align={TextAlign.CENTER}
            />
        )
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar} />
                </div>

                <Text
                    title={article?.title}
                    text={article?.subtitle}
                    className={cls.title}
                    size={TextSize.L}
                />

                <div className={cls.articleInfo}>
                    <Icon Svg={KolokolIcon} className={cls.icon} />
                    <Text text={String(article?.views)} />
                </div>

                <div className={cls.articleInfo}>
                    <Icon Svg={StarIcon} className={cls.icon} />
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map((item, index) => renderBlock(item, index))}
            </>
        )
    }

    return (
        <DynamicModuleLoader removeAfterUnmount={true} reducers={reducers}>
            <div className={classNames(cls.articleDetails, {}, [className])}>{content}</div>
        </DynamicModuleLoader>
    )
})
