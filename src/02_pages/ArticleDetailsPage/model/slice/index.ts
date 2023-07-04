import { combineReducers } from '@reduxjs/toolkit'
import { ArticleDetailsPageSchema } from '../types'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'
import { articleDetailsRecomendationsReducer } from './articleDetailsRecomendationsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recomendations: articleDetailsRecomendationsReducer,
    comments: articleDetailsCommentsReducer,
})
