import cls from './SidebarItem.module.scss'
import { FC } from 'react'
import { AppLink, AppLinkTheme } from '06_shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { SidebarItemType } from '../../model/item'
import { classNames } from '06_shared/lib/classNames/classNames'
import { useAppSelector } from '06_shared/lib/hooks'
import { getUserAuthData } from '05_entities/User'

interface SidebarItemProps {
    className?: string
    item: SidebarItemType
    isOpen: boolean
}

export const SidebarItem: FC<SidebarItemProps> = ({ item, isOpen }) => {
    const { path, text } = item
    const { t } = useTranslation()

    const mods = {
        [cls.isOpen]: isOpen,
    }

    const isAuth = useAppSelector(getUserAuthData)

    if (item.authOnly && !isAuth) return null

    return (
        <AppLink className={cls.item} theme={AppLinkTheme.PRIMARY} to={path}>
            <item.icon className={cls.icon} />
            <span className={classNames(cls.link, mods)}>{t(text)}</span>
        </AppLink>
    )
}
