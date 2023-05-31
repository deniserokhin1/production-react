import { StateSchema } from '01_app/providers/StoreProvider'
import { ArticleView, IArticle } from '05_entities/Article'
import { PayloadAction, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { ArticlePageSchema } from '../types/articlePageSchema'
import { fetchArticleList } from '../services/fetchArticleList/fetchArticleList'
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '06_shared/const/localstorage'

const articlesAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articlesAdapter.getInitialState()
)

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
        view: ArticleView.TILE,
        hasMore: true,
        page: 1,
        isLoading: false,
        entities: {},
        ids: [],
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload)
        },
        initState: (state) => {
            const view = localStorage.getItem(
                ARTICLES_VIEW_LOCALSTORAGE_KEY
            ) as ArticleView
            state.view = view
            state.limit = view === ArticleView.ROW ? 4 : 9
            state._inited = true
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state) => {
                state.error = undefined
                state.isLoading = true
            })
            .addCase(
                fetchArticleList.fulfilled,
                (state, action: PayloadAction<IArticle[]>) => {
                    state.isLoading = false
                    articlesAdapter.addMany(state, action.payload)
                    state.hasMore = !!action.payload.length
                }
            )
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export const { actions: articlePageActions, reducer: articlePageReducer } =
    articlePageSlice
