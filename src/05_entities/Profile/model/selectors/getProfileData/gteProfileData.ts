import { StateSchema } from '01_app/providers/StoreProvider'

export const getProfileData = (state: StateSchema) => state.profile?.data
