import { ArticleView, IArticle } from '05_entities/Article'
import { ArticleSortField, ArticleType } from '05_entities/Article/model/types/article'
import { SortOrder } from '06_shared/types'
import { EntityState } from '@reduxjs/toolkit'

export interface ArticlePageSchema extends EntityState<IArticle> {
    isLoading?: boolean
    error?: string

    page: number
    limit: number
    hasMore: boolean

    view: ArticleView
    order: SortOrder
    sort: ArticleSortField
    search: string
    type: ArticleType

    _inited?: boolean
}
