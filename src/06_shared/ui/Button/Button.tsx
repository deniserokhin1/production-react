import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
    theme?: ThemeButton
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        square,
        disabled,
        size = ButtonSize.M,
        ...otherProps
    } = props

    const mods: Record<string, boolean | string> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    }

    return (
        <button
            className={classNames(cls.Button, mods, [cls[size], cls[theme], className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
}
