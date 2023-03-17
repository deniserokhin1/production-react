import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'
import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    children: React.ReactNode
    theme?: AppLinkTheme
    className?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { children, to, className, theme = AppLinkTheme.PRIMARY, ...otherProps } = props

    return (
        <Link
            className={classNames(cls.AppLink, {}, [cls[theme], className])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
