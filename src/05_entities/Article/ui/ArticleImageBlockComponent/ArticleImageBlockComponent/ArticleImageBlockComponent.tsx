import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import { ArticleImageBlock } from '../../../model/types/article'
import { Text } from '06_shared/ui/Text/Text'
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
    const { className, block } = props
    const { src, title } = block
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.articleImageBlockComponent, {}, [className])}>
            <img className={cls.img} src={src} alt="" />
            {title && <Text text={title} />}
        </div>
    )
})
