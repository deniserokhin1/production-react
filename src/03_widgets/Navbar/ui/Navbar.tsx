import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { FC } from 'react'
import { AppLink, AppLinkTheme } from '06_shared/ui/AppLink/AppLink'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = () => {
    return (
        <div className={classNames(cls.Navbar)}>
            <div>
                <AppLink className={cls.margin} theme={AppLinkTheme.PRIMARY} to="/">
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
                    О нас
                </AppLink>
            </div>
        </div>
    )
}
