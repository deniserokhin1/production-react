import { StateSchema } from '01_app/providers/StoreProvider'

export const getArticleDetailData = (state: StateSchema) => {
    return state?.articleDetails?.data
}

export const getArticleDetailIsLoading = (state: StateSchema) => {
    return state?.articleDetails?.isLoading || false
}

export const getArticleDetailError = (state: StateSchema) => {
    return state?.articleDetails?.error
}
