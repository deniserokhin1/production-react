import { RoutePath } from '06_shared/config/routeConfig/routeConfig'
import MainIcon from '06_shared/assets/icons/home.svg'
import AboutIcon from '06_shared/assets/icons/list.svg'
import ProfileIcon from '06_shared/assets/icons/profile.svg'

export interface SidebarItemType {
    path: string
    text: string
    icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        icon: MainIcon,
        text: 'Главнвя',
    },
    {
        path: RoutePath.about,
        icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutePath.profile,
        icon: ProfileIcon,
        text: 'Профиль',
    },
]
