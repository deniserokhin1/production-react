import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme = ThemeButton.CLEAR, ...otherProps } = props
    return (
        <button className={classNames(cls.Button, {}, [cls[theme], className])} {...otherProps}>
            {children}
        </button>
    )
}
