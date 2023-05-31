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

interface DynamicModuleLoaderProps {
    reducers: ReducersList
    removeAfterUnmount?: boolean
    children: ReactNode
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props

    const store = useStore() as ReduxStoreWidthManager
    const dispatch = useAppDispatch()

    useEffect(() => {
        const mountedRedcuer = store.reducerManager.getMountedRedcuer()
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer)
            dispatch({ type: `@INIT ${name} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    const mounted = mountedRedcuer[name as StateSchemaKey]
                    if(mounted) return
                    store.reducerManager.remove(name as StateSchemaKey)
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
