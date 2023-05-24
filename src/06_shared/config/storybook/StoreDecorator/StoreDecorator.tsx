import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from '01_app/providers/StoreProvider'
import { loginReducer } from '04_features/AuthByUserName/model/slice/loginSlice'
import { profileReducer } from '05_entities/Profile'
import { ReducersList } from '06_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '05_entities/Article/model/slice/articleDetailsSlice'
import { addNewCommentReducer } from '04_features/AddNewComment/model/slices/addNewCommnetSlice'
import { articleDetailsCommentsReducer } from '02_pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice'
import { articlePageReducer } from '02_pages/ArticlesPage/model/slices/ArticlePageSlice'

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addnewComment: addNewCommentReducer,
    articleDetailsComments: articleDetailsCommentsReducer,
    articlePage: articlePageReducer,
}

export const StoreDecorator =
    (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (StoryComponent: Story) =>
        (
            <StoreProvider
                initialState={state}
                asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        )
