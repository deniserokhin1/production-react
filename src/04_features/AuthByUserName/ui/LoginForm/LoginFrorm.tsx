import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './LoginFrorm.module.scss'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '06_shared/ui/Button'
import { Input } from '06_shared/ui/Input/Input'

interface LoginFrormProps {
    className?: string
}

export const LoginFrorm: FC<LoginFrormProps> = () => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.LoginFrorm)}>
            <Input type="text" placeholder={t('Введите логин')} autoFocus={true} />
            <Input type="text" placeholder={t('Введите пароль')} />
            <Button>{t('Войти')}</Button>
        </div>
    )
}
