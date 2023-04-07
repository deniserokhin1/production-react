import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import { Portal } from '../Portal'
import { useTheme } from '01_app/providers/ThemeProvider'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = ({ children, onClose, isOpen, lazy }) => {
    const [isClosing, setIsClosing] = useState(false)
    const [isOpening, setIsOpening] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    const { theme } = useTheme()

    const closeHanler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeHanler()
        },
        [closeHanler]
    )

    useEffect(() => {
        if (isOpen) {
            timerRef.current = setTimeout(() => {
                setIsOpening(true)
            }, 0)
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            setIsOpening(false)
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [isOpen, onKeyDown])

    useEffect(() => {
        setIsMounted(isOpen)
    }, [isOpen])

    const mods: Record<string, string | boolean> = {
        [cls.opened]: isOpening,
        [cls.isClosing]: isClosing,
    }

    if (lazy && !isMounted) return null

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [theme])}>
                <div className={cls.overlay} onClick={closeHanler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
