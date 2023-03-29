/* eslint-disable i18next/no-literal-string */
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { FC, useState } from 'react'
import { ThemeSwitcher } from '03_widgets/ThemeSwitcher'
import { LangSwitcher } from '03_widgets/LangSwitcher/ui/LangSwitcher'
import { Button } from '06_shared/ui/Button'
import { ButtonSize, ThemeButton } from '06_shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from '06_shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { RoutePath } from '06_shared/config/routeConfig/routeConfig'
import MainIcon from '06_shared/assets/icons/home.svg'
import AboutIcon from '06_shared/assets/icons/list.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = () => {
    const [isOpen, setIsOpne] = useState<boolean>(true)

    const { t } = useTranslation()

    const toggle = () => setIsOpne((prev) => !prev)

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.isOpen]: isOpen })}
        >
            <div className={cls.links}>
                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.PRIMARY}
                    to={RoutePath.main}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Главная')}</span>
                </AppLink>

                <AppLink
                    className={cls.item}
                    theme={AppLinkTheme.PRIMARY}
                    to={RoutePath.about}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}> {t('О нас')}</span>
                </AppLink>
            </div>
            <Button
                data-testid="sidebar-toggle"
                onClick={toggle}
                className={cls.collapseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square={true}
                size={ButtonSize.L}
            >
                {isOpen ? '<' : '>'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={!isOpen} className={cls.margin} />
            </div>
        </div>
    )
}
