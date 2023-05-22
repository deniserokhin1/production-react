/* eslint-disable i18next/no-literal-string */
import { memo } from 'react'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './CommentItem.module.scss'
import { IComment } from '05_entities/Comment'
import { Avatar } from '06_shared/ui/Avatar/Avatar'
import { Text } from '06_shared/ui/Text/Text'
import { Skeleton } from '06_shared/ui/Skeleton'
import { AppLink } from '06_shared/ui/AppLink/AppLink'
import { RoutePath } from '06_shared/config/routeConfig/routeConfig'

interface CommentItemProps {
    className?: string
    comment?: IComment
    isLoading?: boolean
}

export const CommentItem = memo((props: CommentItemProps) => {
    const { className, comment, isLoading } = props
    // const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.commentItem, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton width="100%" height={50} className={cls.text} />
            </div>
        )
    }

    if (!comment) {
        return null
    }

    return (
        <div className={classNames(cls.commentItem, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                <Text title={comment.user.username} className={cls.username} />
            </AppLink>
            <Text text={comment.text} className={cls.text} />
        </div>
    )
})
