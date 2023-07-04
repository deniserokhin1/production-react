/* eslint-disable no-console */
import { ThunkConfig } from '01_app/providers/StoreProvider'
import { IArticle } from '05_entities/Article'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchArticleRecomendations = createAsyncThunk<
    IArticle[],
    void,
    ThunkConfig<string>
>('articleDetailsPage/fetchArticleRecomendations', async (props, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    try {
        const response = await extra.api.get<IArticle[]>('/articles', {
            params: {
                _limit: 4,
            },
        })

        if (!response.data) throw new Error()

        return response.data
    } catch (error) {
        return rejectWithValue('error')
    }
})
