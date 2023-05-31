/* eslint-disable no-console */
import { ThunkConfig } from '01_app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getArticleInited } from '../../selectors/articlePageSelectors'
import { articlePageActions } from '../../slices/ArticlePageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'

export const initArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePage/initArticlePage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi
        const inited = getArticleInited(getState())

        if (inited) return
        dispatch(articlePageActions.initState())
        dispatch(fetchArticleList({ page: 1 }))
    }
)
