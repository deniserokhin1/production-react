/* eslint-disable i18next/no-literal-string */
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { FC, useState } from 'react'
import { ThemeSwitcher } from '03_widgets/ThemeSwitcher'
import { LangSwitcher } from '03_widgets/LangSwitcher/ui/LangSwitcher'
import { Button } from '06_shared/ui/Button'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = () => {
    const [isOpen, setIsOpne] = useState<boolean>(true)

    const toggle = () => setIsOpne((prev) => !prev)

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.isOpen]: isOpen })}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={toggle}
            >
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.margin} />
            </div>
        </div>
    )
}
