import { FC, HTMLAttributes, ReactNode } from 'react'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    children: ReactNode
}

export const Card: FC<CardProps> = (props) => {
    const { className, children, ...oterProps } = props

    return (
        <div className={classNames(cls.card, {}, [className])} {...oterProps}>
            {children}
        </div>
    )
}
