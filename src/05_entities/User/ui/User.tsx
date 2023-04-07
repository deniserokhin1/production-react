import { classNames } from '06_shared/lib/classNames/classNames'
import { FC } from 'react'

interface UserProps {
    className?: string
}

export const User: FC<UserProps> = () => {
    return <div className={classNames('')}></div>
}
