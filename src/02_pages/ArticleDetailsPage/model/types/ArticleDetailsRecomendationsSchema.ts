import { IArticle } from '05_entities/Article'
import { EntityState } from '@reduxjs/toolkit'

export interface ArticleDetailsRecomendationsSchema extends EntityState<IArticle> {
    isLoading?: boolean
    error?: string
}
