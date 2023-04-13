import { FC, ReactNode, useEffect } from 'react'
import { useStore } from 'react-redux'
import {
    ReduxStoreWidthManager,
    StateSchemaKey,
} from '01_app/providers/StoreProvider/config/StateSchema'
import { Reducer } from '@reduxjs/toolkit'
import { useAppDispatch } from '06_shared/lib/hooks'

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
    children: ReactNode
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount = true } = props

    const store = useStore() as ReduxStoreWidthManager
    const dispatch = useAppDispatch()

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
                    store.reducerManager.remove(name)
                    dispatch({ type: `@DESTROY ${name} reducer` })
                })
            }
        }
        // eslint-disable-next-line
    }, [])

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{children}</>
    )
}
