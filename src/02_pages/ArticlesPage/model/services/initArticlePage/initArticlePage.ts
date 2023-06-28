/* eslint-disable no-console */
import { ThunkConfig } from '01_app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getArticleInited } from '../../selectors/articlePageSelectors'
import { articlePageActions } from '../../slices/ArticlePageSlice'
import { fetchArticleList } from '../fetchArticleList/fetchArticleList'
import { SortOrder } from '06_shared/types'
import { ArticleSortField } from '05_entities/Article'
import { ArticleType } from '05_entities/Article/model/types/article'

export const initArticlePage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlePage/initArticlePage', async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi
    const inited = getArticleInited(getState())

    if (inited) return

    dispatch(articlePageActions.setOrder((searchParams.get('order') as SortOrder) ?? ''))
    dispatch(
        articlePageActions.setSort((searchParams.get('sort') as ArticleSortField) ?? '')
    )
    dispatch(articlePageActions.setSearch(searchParams.get('search') ?? ''))

    dispatch(
        articlePageActions.setType(
            (searchParams.get('type') as ArticleType) ?? ArticleType.ALL
        )
    )

    dispatch(articlePageActions.initState())
    dispatch(fetchArticleList({}))
})
