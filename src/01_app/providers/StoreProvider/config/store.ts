import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { userReducer } from '05_entities/User'
import { loginReducer } from '04_features/AuthByUserName/model/slice/loginSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const createRedxuStore = (initialState?: StateSchema) => {
    const rootReducer: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}

const store = createRedxuStore()

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
