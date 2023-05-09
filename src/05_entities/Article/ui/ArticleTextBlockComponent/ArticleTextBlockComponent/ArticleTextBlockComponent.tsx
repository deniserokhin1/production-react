import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './ArticleTextBlockComponent.module.scss'
import { ArticleTextBlock } from '../../../model/types/article'
import { Text } from '06_shared/ui/Text/Text'

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
    const { className, block } = props
    const { title, paragraphs } = block
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.articleTextBlockComponent, {}, [className])}>
            {title && <Text title={title} className={cls.title} />}
            {paragraphs.map((item, index) => (
                <Text key={index} text={item} className={cls.paragraph} />
            ))}
        </div>
    )
})
