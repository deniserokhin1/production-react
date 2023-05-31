import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { StateSchema } from '../config/StateSchema'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { createRedxuStore } from '../config/store'

interface StoreProviderProps {
    children: ReactNode
    initialState?: DeepPartial<StateSchema>
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = ({
    children,
    initialState,
    asyncReducers,
}) => {
    const store = createRedxuStore(
        initialState as StateSchema,
        asyncReducers as ReducersMapObject<StateSchema>
    )

    return <Provider store={store}>{children}</Provider>
}
