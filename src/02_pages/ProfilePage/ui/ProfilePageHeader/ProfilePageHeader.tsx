import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './ProfilePageHeader.module.scss'
import { FC, useCallback } from 'react'
import { Text } from '06_shared/ui/Text/Text'
import { Button } from '06_shared/ui/Button'
import { ThemeButton } from '06_shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '06_shared/lib/hooks'
import {
    getProfileReadOnly,
    profileActions,
    updateProfileData,
} from '05_entities/Profile'

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = () => {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()

    const readOnly = useAppSelector(getProfileReadOnly)

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false))
    }, [dispatch])

    const onCanselEdit = useCallback(() => {
        dispatch(profileActions.canselEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
        dispatch(updateProfileData())
    }, [dispatch])

    return (
        <div className={classNames(cls.ProfilePageHeader)}>
            <div className={cls.header}>
                <Text title={t('Профиль') as string} />

                <div className={cls.btnWrapper}>
                    {!readOnly && (
                        <Button
                            className={cls.saveBtn}
                            theme={ThemeButton.OUTLINE}
                            onClick={onSave}
                        >
                            {t('Сохранить')}
                        </Button>
                    )}

                    <Button
                        className={cls.editBtn}
                        theme={readOnly ? ThemeButton.OUTLINE : ThemeButton.OUTLINE_RED}
                        onClick={readOnly ? onEdit : onCanselEdit}
                    >
                        {readOnly ? t('Редактировать') : t('Отменить')}
                    </Button>
                </div>
            </div>
        </div>
    )
}
