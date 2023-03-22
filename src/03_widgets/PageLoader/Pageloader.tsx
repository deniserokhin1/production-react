import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Pageloader.module.scss'
import { FC } from 'react'
import { Loader } from '06_shared/ui/Loader'

interface PageloaderProps {
    className?: string
}

export const Pageloader: FC<PageloaderProps> = () => {
    return (
        <div className={classNames(cls.Pageloader)}>
            <Loader className={cls.loader} />
        </div>
    )
}
