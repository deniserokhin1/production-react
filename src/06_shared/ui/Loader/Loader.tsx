import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Loader.module.scss'
import { FC } from 'react'
import Spinner from '06_shared/assets/icons/blocks-wave.svg'

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = () => {
    return (
        <div className={classNames(cls.Loader)}>
            <Spinner className={cls.loader} />
        </div>
    )
}
