import { getUserAuthData } from '05_entities/User'
import { createSelector } from '@reduxjs/toolkit'
import { SidebarItemType } from '../types/sidebar'
import { RoutePath } from '06_shared/config/routeConfig/routeConfig'
import MainIcon from '06_shared/assets/icons/home.svg'
import AboutIcon from '06_shared/assets/icons/list.svg'
import ProfileIcon from '06_shared/assets/icons/profile.svg'
import ArticleIcon from '06_shared/assets/icons/article.svg'

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sideBarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            icon: MainIcon,
            text: 'Главная',
        },
        {
            path: RoutePath.about,
            icon: AboutIcon,
            text: 'О нас',
        },
    ]

    if (userData) {
        sideBarItemsList.push(
            {
                path: RoutePath.profile + userData.id,
                icon: ProfileIcon,
                text: 'Профиль',
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                icon: ArticleIcon,
                text: 'Статьи',
                authOnly: true,
            }
        )
    }

    return sideBarItemsList
})
