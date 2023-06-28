import { FC, MutableRefObject, ReactNode, UIEvent, useRef } from 'react'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { useInfinityScroll } from '06_shared/lib/hooks/useInfinityScroll/useInfinityScroll'
import { useAppDispatch, useAppSelector } from '06_shared/lib/hooks'
import { getUIScrollByPath, uiActions } from '04_features/ScrollSavePosition'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from '06_shared/lib/hooks/useInitialEffect/useInitialEffect'
import { StateSchema } from '01_app/providers/StoreProvider'
import { useThrottle } from '06_shared/lib/hooks/useThrottle/useThrottle'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd } = props
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const dispatch = useAppDispatch()
    const { pathname } = useLocation()
    const scrollPosition = useAppSelector((state: StateSchema) =>
        getUIScrollByPath(state, pathname)
    )

    useInfinityScroll({ triggerRef, wrapperRef, callback: onScrollEnd })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition
    })

    const onScroll = useThrottle((e: UIEvent<HTMLElement>) => {
        dispatch(
            uiActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            })
        )
    }, 200)

    return (
        <section
            onScroll={onScroll}
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
        >
            {children}
            {onScrollEnd && <div className={cls.trigger} ref={triggerRef} />}
        </section>
    )
}
