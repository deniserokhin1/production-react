import { StateSchema } from '01_app/providers/StoreProvider'
import { ArticleSortField, ArticleView } from '05_entities/Article'
import { ArticleType } from '05_entities/Article/model/types/article'

export const getArticlePageIsLoading = (state: StateSchema) =>
    state.articlePage?.isLoading || false
export const getArticlePageError = (state: StateSchema) => state.articlePage?.error || ''
export const getArticlePageView = (state: StateSchema) => {
    return state.articlePage?.view || ArticleView.TILE
}
export const getArticlePageNum = (state: StateSchema) => {
    return state.articlePage?.page || 1
}
export const getArticlePageLimit = (state: StateSchema) => {
    return state.articlePage?.limit || 9
}
export const getArticleHasMore = (state: StateSchema) => {
    return state.articlePage?.hasMore
}
export const getArticleInited = (state: StateSchema) => {
    return state.articlePage?._inited
}

export const getArticleOrder = (state: StateSchema) => {
    return state.articlePage?.order || 'asc'
}

export const getArticleSort = (state: StateSchema) => {
    return state.articlePage?.sort || ArticleSortField.CREATED
}

export const getArticleSearch = (state: StateSchema) => {
    return state.articlePage?.search || ''
}

export const getArticleType = (state: StateSchema) => {
    return state.articlePage?.type || ArticleType.ALL
}
