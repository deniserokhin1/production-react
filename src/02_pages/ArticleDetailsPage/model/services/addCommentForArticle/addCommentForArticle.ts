/* eslint-disable no-console */
import { ThunkConfig } from '01_app/providers/StoreProvider/config/StateSchema'
import { getUserAuthData } from '05_entities/User'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getArticleDetailData } from '05_entities/Article/model/selectors/articleDetails'
import { IComment } from '05_entities/Comment'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<IComment, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkApi) => {
        const { dispatch, extra, rejectWithValue, getState } = thunkApi

        const userData = getUserAuthData(getState())
        const article = getArticleDetailData(getState())

        if (!userData || !text || !article) return rejectWithValue('no data')

        try {
            const response = await extra.api.post<IComment>('/comments', {
                articleId: article?.id,
                userId: userData.id,
                text,
            })

            if (!response.data) throw new Error()

            dispatch(fetchCommentsByArticleId(article.id))
            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('error')
        }
    }
)
