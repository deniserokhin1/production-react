import { ArticleView, IArticle } from '05_entities/Article'
import { EntityState } from '@reduxjs/toolkit'

export interface ArticlePageSchema extends EntityState<IArticle> {
    isLoading?: boolean
    error?: string
    view: ArticleView
    page: number
    limit?: number
    hasMore: boolean
}
