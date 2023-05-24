import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '06_shared/ui/Page/Page/Page'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage: FC<NotFoundPageProps> = () => {
    const { t } = useTranslation()
    return <Page className={classNames(cls.NotFoundPage)}>{t('Страница не найдена')}</Page>
}
