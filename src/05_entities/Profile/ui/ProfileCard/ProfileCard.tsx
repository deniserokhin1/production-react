import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { FC } from 'react'
import { useAppSelector } from '06_shared/lib/hooks'
import { getProfileData } from '05_entities/Profile/model/selectors/gteProfileData/gteProfileData'
import { getProfileError } from '05_entities/Profile/model/selectors/gteProfileError/gteProfileError'
import { gteProfileIsLoading } from '05_entities/Profile/model/selectors/gteProfileisLoading/gteProfileIsLoading'
import { useTranslation } from 'react-i18next'
import { Text } from '06_shared/ui/Text/Text'
import { Button } from '06_shared/ui/Button'
import { ThemeButton } from '06_shared/ui/Button/Button'
import { Input } from '06_shared/ui/Input/Input'

interface ProfileCardProps {
    className?: string
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const { t } = useTranslation('profile')
    const data = useAppSelector(getProfileData)
    const error = useAppSelector(getProfileError)
    const isLoading = useAppSelector(gteProfileIsLoading)

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль') as string} />
                <Button className={cls.editBtn} theme={ThemeButton.OUTLINE}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input className={cls.input} value={data?.first} placeholder={t('Ваше имя') as string} />
                <Input
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('Ваша фамилия') as string}
                />
            </div>
        </div>
    )
}
