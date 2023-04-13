import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { userReducer } from '05_entities/User'
import { createReducerManager } from './redcuerManager'

export const createRedxuStore = (
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>
) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })

    //@ts-ignore
    store.reducerManager = reducerManager

    return store
}

const store = createRedxuStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
