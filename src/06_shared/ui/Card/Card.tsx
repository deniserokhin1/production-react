import { FC, HTMLAttributes, ReactNode } from 'react'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Card.module.scss'

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
    theme?: CardTheme
}

export const Card: FC<CardProps> = (props) => {
    const { className, children, theme = CardTheme.NORMAL, ...oterProps } = props

    return (
        <div className={classNames(cls.card, {}, [className, cls[theme]])} {...oterProps}>
            {children}
        </div>
    )
}
