import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { FC, useState } from 'react'
import { ThemeSwitcher } from '03_widgets/ThemeSwitcher'
import { LangSwitcher } from '03_widgets/LangSwitcher/ui/LangSwitcher'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = () => {
    const [isOpen, setIsOpne] = useState<boolean>(true)

    const toggle = () => setIsOpne((prev) => !prev)

    return (
        <div className={classNames(cls.Sidebar, { [cls.isOpen]: isOpen })}>
            <button onClick={toggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.margin} />
            </div>
        </div>
    )
}
