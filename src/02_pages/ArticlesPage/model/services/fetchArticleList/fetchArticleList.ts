/* eslint-disable no-console */
import { ThunkConfig } from '01_app/providers/StoreProvider'
import { IArticle } from '05_entities/Article'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getArticlePageLimit } from '../../selectors/articlePageSelectors'

interface FetchArticleProps {
    page?: number
}

export const fetchArticleList = createAsyncThunk<IArticle[], FetchArticleProps, ThunkConfig<string>>(
    'articlePage/fetchArticleList',
    async (props, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi
        const { page = 1 } = props
        const limit = getArticlePageLimit(getState())

        try {
            const response = await extra.api.get<IArticle[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            })

            if (!response.data) throw new Error()

            return response.data
        } catch (error) {
            return rejectWithValue('error')
        }
    }
)
