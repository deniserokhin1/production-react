import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { IComment } from '05_entities/Comment'
import { CommentItem } from '../CommentItem/CommentItem'
import { Text } from '06_shared/ui/Text/Text'

interface CommentListProps {
    className?: string
    comments?: IComment[]
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentItem isLoading />
                <CommentItem isLoading />
                <CommentItem isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {comments?.length ? (
                comments.map((item, index) => (
                    <CommentItem comment={item} key={index} isLoading={isLoading} />
                ))
            ) : (
                <Text text={t('Комментарии отсутствуют') as string} />
            )}
        </div>
    )
})
