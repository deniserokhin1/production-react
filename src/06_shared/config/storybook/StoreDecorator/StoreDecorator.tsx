import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from '01_app/providers/StoreProvider'
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { loginReducer } from '04_features/AuthByUserName/model/slice/loginSlice'
import { profileReducer } from '05_entities/Profile'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
}

export const StoreDecorator =
    (
        state: DeepPartial<StateSchema>,
        asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
    ) =>
    (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        )
