import { CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { userReducer } from '05_entities/User'
import { createReducerManager } from './redcuerManager'
import { $api } from '06_shared/api/api'
import { uiReducer } from '04_features/ScrollSavePosition'

export const createRedxuStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        ui: uiReducer,
    }

    const reducerManager = createReducerManager(rootReducer)

    const extraArg: ThunkExtraArg = {
        api: $api,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    })

    //@ts-ignore
    store.reducerManager = reducerManager

    return store
}

const store = createRedxuStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
