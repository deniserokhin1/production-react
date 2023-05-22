/* eslint-disable no-console */
import { ThunkConfig } from '01_app/providers/StoreProvider'
import { IComment } from '05_entities/Comment'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCommentsByArticleId = createAsyncThunk<
    IComment[],
    string | undefined,
    ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi

    if (!articleId) rejectWithValue('error')

    try {
        const response = await extra.api.get<IComment[]>('/comments', {
            params: {
                articleId,
                _expand: 'user',
            },
        })

        if (!response.data) throw new Error()

        return response.data
    } catch (error) {
        return rejectWithValue('error')
    }
})
