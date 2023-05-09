import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props
    const { t } = useTranslation('article')

    return (
        <div className={classNames('', {}, [className])}>
            {t(' ARTICLE PAGE')}
        </div>
    )
}

export default memo(ArticlesPage)
