import { FC, MutableRefObject, ReactNode, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { useInfinityScroll } from '06_shared/lib/hooks/useInfinityScroll/useInfinityScroll'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page: FC<PageProps> = (props) => {
    const { className, children, onScrollEnd } = props
    const { t } = useTranslation()
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfinityScroll({ triggerRef, wrapperRef, callback: onScrollEnd })

    return (
        <section ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    )
}
