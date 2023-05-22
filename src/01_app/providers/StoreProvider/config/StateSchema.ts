import { ArticleDetailsCommentSchema } from '02_pages/ArticleDetailsPage/model/types/ArticleDetailsCommentSchema'
import { AddNewCommentSchema } from '04_features/AddNewComment'
import { LoginSchema } from '04_features/AuthByUserName'
import { ArticleDetailsSchema } from '05_entities/Article'
import { ProfileSchema } from '05_entities/Profile'
import { UserSchema } from '05_entities/User'
import {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'
import { NavigateOptions, To } from 'react-router-dom'

export interface StateSchema {
    user: UserSchema

    //асинхронные редьюсеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentSchema
    addnewComment?: AddNewCommentSchema
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

export interface ThunkExtraArg {
    api: AxiosInstance
    navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
