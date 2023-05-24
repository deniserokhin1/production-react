import { MutableRefObject, useEffect } from 'react'

export interface IUseInfinityScroll {
    callback?: () => void
    triggerRef: MutableRefObject<HTMLElement>
    wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfinityScroll = ({
    callback,
    triggerRef,
    wrapperRef,
}: IUseInfinityScroll) => {
    useEffect(() => {
        const trigger = triggerRef.current
        const wrapper = wrapperRef.current
        let observer: IntersectionObserver | null = null

        if (callback) {
            const options = {
                root: wrapper,
                rootMargin: '0px',
                threshold: 1.0,
            }

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback()
                }
            }, options)

            observer.observe(trigger)
        }

        return () => {
            // eslint-disable-next-line
            if (observer) observer.unobserve(trigger)
        }
    }, [triggerRef, wrapperRef, callback])
}
