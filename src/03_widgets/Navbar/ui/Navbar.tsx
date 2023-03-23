import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { FC } from 'react'
import { AppLink, AppLinkTheme } from '06_shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = () => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.Navbar)}>
            <div>
                <AppLink className={cls.margin} theme={AppLinkTheme.PRIMARY} to="/">
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
                    {t('О нас')}
                </AppLink>
            </div>
        </div>
    )
}
