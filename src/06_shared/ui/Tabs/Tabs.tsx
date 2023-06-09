import { ReactNode, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Tabs.module.scss'
import { Card, CardTheme } from '../Card/Card'

export interface TabItem<T extends string> {
    value: T
    content: ReactNode
}

interface TabsProps<T extends string> {
    className?: string
    tabs: TabItem<T>[]
    value: string
    onTabClick: (tab: TabItem<T>) => void
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const { className, onTabClick, tabs, value } = props
    const { t } = useTranslation()

    const clickHandler = useCallback((tab: TabItem<T>) => {
        return () => onTabClick(tab)
    }, [onTabClick])

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {tabs.map((tab, index) => (
                <Card
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    className={cls.tab}
                    key={index}
                    onClick={clickHandler(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    )
}
