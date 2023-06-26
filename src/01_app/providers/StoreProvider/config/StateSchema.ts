import { ArticleDetailsCommentSchema } from '02_pages/ArticleDetailsPage/model/types/ArticleDetailsCommentSchema'
import { ArticlePageSchema } from '02_pages/ArticlesPage'
import { AddNewCommentSchema } from '04_features/AddNewComment'
import { LoginSchema } from '04_features/AuthByUserName'
import { UISchema } from '04_features/ScrollSavePosition'
import { ArticleDetailsSchema } from '05_entities/Article'
import { ProfileSchema } from '05_entities/Profile'
import { UserSchema } from '05_entities/User'
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { AxiosInstance } from 'axios'

export interface StateSchema {
    user: UserSchema
    ui: UISchema

    //асинхронные редьюсеры
    loginForm?: LoginSchema
    profile?: ProfileSchema
    articleDetails?: ArticleDetailsSchema
    articleDetailsComments?: ArticleDetailsCommentSchema
    addnewComment?: AddNewCommentSchema
    articlePage?: ArticlePageSchema
}

export type StateSchemaKey = keyof StateSchema
export type MountedRedcuer = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManger {
    getReducerMap: () => ReducersMapObject<StateSchema>
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove: (key: StateSchemaKey) => void
    getMountedRedcuer: () => MountedRedcuer
}

export interface ReduxStoreWidthManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManger
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}
