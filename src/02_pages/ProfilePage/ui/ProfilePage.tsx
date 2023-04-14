import { ProfileCard, fetchProfileData, profileReducer } from '05_entities/Profile'
import {
    DynamicModuleLoader,
    ReducersList,
} from '06_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '06_shared/lib/hooks'
import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const reducers: ReducersList = {
    profile: profileReducer,
}

const ProfilePage = memo(() => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ProfileCard />
        </DynamicModuleLoader>
    )
})

export default ProfilePage
