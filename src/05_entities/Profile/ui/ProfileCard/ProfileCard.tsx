import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from '06_shared/ui/Text/Text'
import { Input } from '06_shared/ui/Input/Input'
import { Profile } from '../../model/type/profile'
import { Loader } from '06_shared/ui/Loader'
import { Avatar } from '06_shared/ui/Avatar/Avatar'
import { Currency, CurrencySelect } from '05_entities/Currency'
import { Country, CountrySelect } from '05_entities/CountrySelect'

interface ProfileCardProps {
    className?: string
    data?: Profile
    error?: string
    isLoading?: boolean
    readonly?: boolean
    onChangeFirstName?: (value: string) => void
    onChangeLastName?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCity?: (value: string) => void
    onChangeUsername?: (value: string) => void
    onChangeAvatar?: (value: string) => void
    onChangeCurrency?: (value: Currency) => void
    onChangeCountry?: (value: Country) => void
}

export const ProfileCard = memo((props: ProfileCardProps) => {
    const { t } = useTranslation('profile')

    const {
        className,
        data,
        error,
        isLoading,
        readonly,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props

    const mods = { [cls.editing]: !readonly }

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className])}>
                <Loader />
            </div>
        )
    }

    if (error) {
        return (
            <Text
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке профиля') as string}
                text={t('Попробуйте перезагрузить страницу') as string}
            />
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <div className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} />
                </div>
            )}

            <Input
                className={cls.input}
                value={data?.first}
                placeholder={t('Ваше имя') as string}
                onChange={onChangeFirstName}
                readonly={readonly}
            />
            <Input
                className={cls.input}
                value={data?.lastname}
                placeholder={t('Ваша фамилия') as string}
                onChange={onChangeLastName}
                readonly={readonly}
            />
            <Input
                className={cls.input}
                value={data?.age}
                placeholder={t('Ваш возраст') as string}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                className={cls.input}
                value={data?.city}
                placeholder={t('Ваш город') as string}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                className={cls.input}
                value={data?.username}
                placeholder={t('Введите имя пользователя') as string}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                className={cls.input}
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватарку') as string}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </div>
    )
})
