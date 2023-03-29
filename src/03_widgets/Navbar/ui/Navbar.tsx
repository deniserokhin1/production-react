import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { FC } from 'react'
import { AppLink, AppLinkTheme } from '06_shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = () => {
    
    return (
        <div className={classNames(cls.Navbar)}>
            <div>
                
            </div>
        </div>
    )
}
