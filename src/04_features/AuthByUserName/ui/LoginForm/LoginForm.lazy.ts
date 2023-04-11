import { lazy } from 'react'
import { LoginFormProps } from './LoginForm'
import { FC } from 'react'

export const LoginFormLazy = lazy<FC<LoginFormProps>>(
    () =>
        new Promise((resolve) => {
            //@ts-ignore
            setTimeout(() => resolve(import('./LoginForm')), 1000)
        })
)
