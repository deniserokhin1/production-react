import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from '01_app/providers/StoreProvider'
import { loginReducer } from '04_features/AuthByUserName/model/slice/loginSlice'
import { profileReducer } from '05_entities/Profile'
import { ReducersList } from '06_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '05_entities/Article/model/slice/articleDetailsSlice'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
}

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        )
