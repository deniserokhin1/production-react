import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from '06_shared/ui/Modal/Modal'
import { Button } from '06_shared/ui/Button'
import { ThemeButton } from '06_shared/ui/Button/Button'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = () => {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    const { t } = useTranslation()
    return (
        <div className={classNames(cls.Navbar)}>
            <Button onClick={onToggleModal} theme={ThemeButton.CLEAR}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal} />
        </div>
    )
}
