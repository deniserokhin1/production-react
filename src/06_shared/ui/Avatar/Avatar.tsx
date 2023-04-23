import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { CSSProperties, memo, useMemo } from 'react'

interface AvatarProps {
    className?: string
    src?: string
    size?: number
}

export const Avatar = memo(({ className, src, size }: AvatarProps) => {
    const mods = {}

    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size,
        }
    }, [size])

    return (
        <img
            src={src}
            className={classNames(cls.Avatar, mods, [className])}
            style={styles}
        />
    )
})
