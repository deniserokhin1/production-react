/* eslint-disable i18next/no-literal-string */
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { memo, useMemo, useState } from 'react'
import { ThemeSwitcher } from '03_widgets/ThemeSwitcher'
import { LangSwitcher } from '03_widgets/LangSwitcher/ui/LangSwitcher'
import { Button } from '06_shared/ui/Button'
import { ButtonSize, ThemeButton } from '06_shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { useAppSelector } from '06_shared/lib/hooks'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'

interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [isOpen, setIsOpne] = useState<boolean>(true)
    const sideBarItemsList = useAppSelector(getSidebarItems)

    const toggle = () => setIsOpne((prev) => !prev)

    const itemsList = useMemo(
        () =>
            sideBarItemsList.map((item) => (
                <SidebarItem item={item} isOpen={isOpen} key={item.path} />
            )),
        [isOpen, sideBarItemsList]
    )

    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.isOpen]: isOpen })}>
            <div className={cls.links}>{itemsList}</div>
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
})
