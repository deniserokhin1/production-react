import { AnyAction, Reducer, ReducersMapObject, combineReducers } from '@reduxjs/toolkit'
import { MountedRedcuer, ReducerManger, StateSchema, StateSchemaKey } from './StateSchema'

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManger {
    const reducers = { ...initialReducers }

    let combinedReducer = combineReducers(reducers)

    let keysToRemove: StateSchemaKey[] = []
    const mountedReducer: MountedRedcuer = {}

    return {
        getReducerMap: () => reducers,
        getMountedRedcuer: () => mountedReducer,
        reduce: (state: StateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = { ...state }
                for (const key of keysToRemove) {
                    delete state[key]
                }
                keysToRemove = []
            }
            return combinedReducer(state, action)
        },

        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }
            reducers[key] = reducer
            mountedReducer[key] = true

            combinedReducer = combineReducers(reducers)
        },

        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return
            }

            delete reducers[key]
            mountedReducer[key] = false

            keysToRemove.push(key)

            combinedReducer = combineReducers(reducers)
        },
    }
}
