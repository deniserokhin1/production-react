import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '06_shared/ui/Button'
import { ThemeButton } from '06_shared/ui/Button/Button'
import { LoginModal } from '04_features/AuthByUserName'
import { getUserAuthData, userActions } from '05_entities/User'
import { useAppDispatch, useAppSelector } from '06_shared/lib/hooks'

interface NavbarProps {
    className?: string
}

export const Navbar = memo(({className}: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false)
    const authData = useAppSelector(getUserAuthData)
    const dispatch = useAppDispatch()

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsAuthModal(true)
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const { t } = useTranslation()
    return (
        <div className={classNames(cls.Navbar)}>
            <Button onClick={authData ? onLogout : onShowModal} theme={ThemeButton.CLEAR}>
                {authData ? t('Выйти') : t('Войти')}
            </Button>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </div>
    )
})
