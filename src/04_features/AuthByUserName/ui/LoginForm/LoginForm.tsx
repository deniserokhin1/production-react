import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '06_shared/ui/Button'
import { Input } from '06_shared/ui/Input/Input'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginBy/loginByUsername'
import { Text, TextTheme } from '06_shared/ui/Text/Text'
import { getLoginUsername } from '04_features/AuthByUserName'
import { getLoginPassword } from '04_features/AuthByUserName'
import { getLoginIsLoading } from '04_features/AuthByUserName'
import { getLoginError } from '04_features/AuthByUserName'
import {
    DynamicModuleLoader,
    ReducersList,
} from '06_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useAppSelector } from '06_shared/lib/hooks'

const initialReducers: ReducersList = {
    loginForm: loginReducer,
}

export interface LoginFormProps {
    className?: string
    onSuccess: () => void
}

const LoginForm = memo(({ onSuccess }: LoginFormProps) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const username = useAppSelector(getLoginUsername)
    const password = useAppSelector(getLoginPassword)
    const isLoading = useAppSelector(getLoginIsLoading)
    const error = useAppSelector(getLoginError)

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

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ password, username }))
        if (result.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }, [dispatch, password, username, onSuccess])

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.LoginFrorm)}>
                <Text text={t('Форма авторизации')} />
                {error && (
                    <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />
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
        </DynamicModuleLoader>
    )
})

export default LoginForm
