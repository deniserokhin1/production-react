import { StateSchema } from '01_app/providers/StoreProvider'

export const getArticleRecomendationsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.recomendations.isLoading
}

export const getArticleRecomendationsError = (state: StateSchema) => {
    return state.articleDetailsPage?.recomendations.error
}
