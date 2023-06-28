/* eslint-disable no-console */
import { ThunkConfig } from '01_app/providers/StoreProvider'
import { IArticle } from '05_entities/Article'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    getArticleOrder,
    getArticlePageLimit,
    getArticlePageNum,
    getArticleSearch,
    getArticleSort,
    getArticleType,
} from '../../selectors/articlePageSelectors'
import { addQueryParams } from '06_shared/lib/url/addQueryParams/addQueryParams'
import { ArticleType } from '05_entities/Article/model/types/article'

interface FetchArticleProps {
    replace?: boolean
}

export const fetchArticleList = createAsyncThunk<
    IArticle[],
    FetchArticleProps,
    ThunkConfig<string>
>('articlePage/fetchArticleList', async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi
    const limit = getArticlePageLimit(getState())
    const page = getArticlePageNum(getState())
    const sort = getArticleSort(getState())
    const order = getArticleOrder(getState())
    const search = getArticleSearch(getState())
    const type = getArticleType(getState())

    try {
        addQueryParams({
            sort,
            order,
            search,
            type,
        })
        const response = await extra.api.get<IArticle[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === ArticleType.ALL ? undefined : type,
            },
        })

        if (!response.data) throw new Error()

        return response.data
    } catch (error) {
        return rejectWithValue('error')
    }
})
