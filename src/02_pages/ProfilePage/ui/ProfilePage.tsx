import { profileReducer } from '05_entities/Profile'
import { classNames } from '06_shared/lib/classNames/classNames'
import {
    DynamicModuleLoader,
    ReducersList,
} from '06_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const reducers: ReducersList = {
    profile: profileReducer,
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
    const { t } = useTranslation()
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames('')}>{t('ProfilePage')}</div>
        </DynamicModuleLoader>
    )
})

export default ProfilePage
