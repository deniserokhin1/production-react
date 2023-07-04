import { StateSchema } from '01_app/providers/StoreProvider'
import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { IArticle } from '05_entities/Article'
import { fetchArticleRecomendations } from '../services/fetchArticleRecomendations/fetchArticleRecomendations'
import { ArticleDetailsRecomendationsSchema } from '../types/ArticleDetailsRecomendationsSchema'

const recomendationAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
})

export const getArticleRecomendations = recomendationAdapter.getSelectors<StateSchema>(
    (state) =>
        state.articleDetailsPage?.recomendations || recomendationAdapter.getInitialState()
)

const articleDetailsRecomendationsSlice = createSlice({
    name: 'articleDetailsCommentsSlice',
    initialState: recomendationAdapter.getInitialState<ArticleDetailsRecomendationsSchema>({
        isLoading: false,
        entities: {},
        ids: [],
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecomendations.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchArticleRecomendations.fulfilled,
                (state, action: PayloadAction<IArticle[]>) => {
                    state.isLoading = false
                    recomendationAdapter.setAll(state, action.payload)
                }
            )
            .addCase(fetchArticleRecomendations.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions, reducer: articleDetailsRecomendationsReducer } =
    articleDetailsRecomendationsSlice
