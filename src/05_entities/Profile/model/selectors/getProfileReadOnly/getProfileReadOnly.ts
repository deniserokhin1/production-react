import { StateSchema } from '01_app/providers/StoreProvider'

export const getProfileReadOnly = (state: StateSchema) => state.profile?.readonly
