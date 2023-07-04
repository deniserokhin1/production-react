import { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema'
import { ArticleDetailsRecomendationsSchema } from './ArticleDetailsRecomendationsSchema'

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentSchema
    recomendations: ArticleDetailsRecomendationsSchema
}
