/* eslint-disable no-console */
import { ThunkConfig } from '01_app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    getArticleHasMore,
    getArticlePageIsLoading,
    getArticlePageNum,
} from '../../selectors/articlePageSelectors'
import { articlePageActions } from '../../slices/ArticlePageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlePage/fetchNextArticlePage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi
        const hasMore = getArticleHasMore(getState())
        const page = getArticlePageNum(getState())
        const isLoading = getArticlePageIsLoading(getState())

        if (!hasMore || isLoading) return
        dispatch(articlePageActions.setPage(page + 1))
        dispatch(fetchArticleList({ page: page + 1 }))
    }
)
