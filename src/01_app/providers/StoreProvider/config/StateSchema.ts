import { LoginSchema } from '04_features/AuthByUserName'
import { ProfileSchema } from '05_entities/Profile'
import { UserSchema } from '05_entities/User'
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit'

export interface StateSchema {
    user: UserSchema
    loginForm?: LoginSchema
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManger {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWidthManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManger
}
