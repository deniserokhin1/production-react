import { classNames } from '06_shared/lib/classNames/classNames'
import { FC } from 'react'
import { Modal } from '06_shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose, className }) => {
    const mods = {}
    return (
        <Modal
            className={classNames('', mods, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy={true}
        >
            <LoginForm />
        </Modal>
    )
}
