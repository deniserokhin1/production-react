import { IComment } from '05_entities/Comment'
import { EntityState } from '@reduxjs/toolkit'

export interface ArticleDetailsCommentSchema extends EntityState<IComment> {
    isLoading?: boolean
    error?: string
}
