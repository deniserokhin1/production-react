import {
    ProfileCard,
    ValidateProfileErrors,
    fetchProfileData,
    getProfileForm,
    getProfileReadOnly,
    getProfileValidateError,
    getProfileIsLoading,
    profileActions,
    profileReducer,
} from '05_entities/Profile'
import {
    DynamicModuleLoader,
    ReducersList,
} from '06_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useAppSelector } from '06_shared/lib/hooks'
import { memo, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader'
import { Currency } from '05_entities/Currency'
import { Country } from '05_entities/CountrySelect'
import { getProfileErrors } from '05_entities/Profile/model/selectors/getProfileError/getProfileError'
import { Text, TextTheme } from '06_shared/ui/Text/Text'

const reducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage = memo(() => {
    const { t } = useTranslation('profile')
    const dispatch = useAppDispatch()

    const formData = useAppSelector(getProfileForm)
    const error = useAppSelector(getProfileErrors)
    const isLoading = useAppSelector(getProfileIsLoading)
    const readOnly = useAppSelector(getProfileReadOnly)
    const validateErrors = useAppSelector(getProfileValidateError)

    const validateErrorTranslate = {
        [ValidateProfileErrors.SERVER_ERROR]: t('Ошибка сервера'),
        [ValidateProfileErrors.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileErrors.INCORRECT_COUNTRY]: t('Некорректная страна'),
        [ValidateProfileErrors.INCORRECT_USER_DATA]: t('Некорректные данные'),
        [ValidateProfileErrors.NO_DATA]: t('Нет данных'),
    }

    useEffect(() => {
        if (__PROJECT__ === 'storybook') return
        dispatch(fetchProfileData())
    }, [dispatch])

    const onChangeFirstName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }))
        },
        [dispatch]
    )

    const onChangeLastName = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }))
        },
        [dispatch]
    )

    const onChangeAge = useCallback(
        (value?: string) => {
            const validateValue = value?.replace(/\D+/gm, '')
            dispatch(profileActions.updateProfile({ age: Number(validateValue) || 0 }))
        },
        [dispatch]
    )

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }))
        },
        [dispatch]
    )

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }))
        },
        [dispatch]
    )

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }))
        },
        [dispatch]
    )

    const onChangeCurrency = useCallback(
        (currency?: Currency) => {
            dispatch(profileActions.updateProfile({ currency }))
        },
        [dispatch]
    )

    const onChangeCountry = useCallback(
        (country?: Country) => {
            dispatch(profileActions.updateProfile({ country }))
        },
        [dispatch]
    )

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ProfilePageHeader />
            
            {!!validateErrors?.length &&
                validateErrors.map((error) => (
                    <Text
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslate[error]}
                        key={error}
                    />
                ))}

            <ProfileCard
                data={formData}
                error={error}
                isLoading={isLoading}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                readonly={readOnly}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeAvatar={onChangeAvatar}
                onChangeUsername={onChangeUsername}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </DynamicModuleLoader>
    )
})

export default ProfilePage
