import { classNames } from '06_shared/lib/classNames/classNames'
import { FC, Suspense } from 'react'
import { Modal } from '06_shared/ui/Modal/Modal'
import { LoginFormLazy } from '../LoginForm/LoginForm.lazy'
import { Loader } from '06_shared/ui/Loader'

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
            <Suspense fallback={<Loader />}>
                <LoginFormLazy />
            </Suspense>
        </Modal>
    )
}
