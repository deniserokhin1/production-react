import { StateSchema } from '01_app/providers/StoreProvider'
import { ArticleView } from '05_entities/Article'

export const getArticlePageIsLoading = (state: StateSchema) => state.articlePage?.isLoading || false
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


