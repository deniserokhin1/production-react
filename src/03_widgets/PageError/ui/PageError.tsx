import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './PageError.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '06_shared/ui/Button'

interface PageErrorProps {
    className?: string
}

export const PageError: FC<PageErrorProps> = () => {
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }
    
    return (
        <div className={classNames(cls.PageError)}>
            <h1 className={cls.title}>
                {t('Произошла непредвиденная ошибка')}
            </h1>
            <Button onClick={reloadPage}>{t('Перезагрузить страницу')}</Button>
        </div>
    )
}
