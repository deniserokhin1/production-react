import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { FC, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '06_shared/ui/Button'
import { Input } from '06_shared/ui/Input/Input'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { loginActions } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginBy/loginByUsername'
import { useAppDispatch, useAppSelector } from '01_app/providers/StoreProvider'
import { Text, TextTheme } from '06_shared/ui/Text/Text'

interface LoginFrormProps {
    className?: string
}

export const LoginForm: FC<LoginFrormProps> = memo(() => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const { username, password, isLoading, error } = useAppSelector(getLoginState)

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value))
        },
        [dispatch]
    )

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value))
        },
        [dispatch]
    )

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ password, username }))
    }, [dispatch, password, username])

    return (
        <div className={classNames(cls.LoginFrorm)}>
            <Text text={t('Форма авторизации')} />
            {error && (
                <Text
                    text={t('Вы ввели неверный логин или пароль')}
                    theme={TextTheme.ERROR}
                />
            )}
            <Input
                type="text"
                placeholder={t('Введите логин')}
                autoFocus={true}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="text"
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
            <Button onClick={onLoginClick} disabled={isLoading}>
                {t('Войти')}
            </Button>
        </div>
    )
})
