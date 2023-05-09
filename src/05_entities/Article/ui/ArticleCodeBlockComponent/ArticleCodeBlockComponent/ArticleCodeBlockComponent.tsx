import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import { ArticleCodeBlock } from '../../../model/types/article'
import { Code } from '06_shared/ui/Code/Code/Code'

interface ArticleCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props
    const { t } = useTranslation()

    return (
        <div className={classNames('', {}, [className])}>
            <Code text={block.code} />
        </div>
    )
})
