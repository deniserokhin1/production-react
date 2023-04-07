import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { FC, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '06_shared/ui/Button'
import { ThemeButton } from '06_shared/ui/Button/Button'
import { LoginModal } from '04_features/AuthByUserName'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = () => {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const { t } = useTranslation()
    return (
        <div className={classNames(cls.Navbar)}>
            <Button onClick={onShowModal} theme={ThemeButton.CLEAR}>
                {t('Войти')}
            </Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    )
}
