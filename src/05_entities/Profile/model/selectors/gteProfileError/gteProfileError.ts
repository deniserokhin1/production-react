import { StateSchema } from '01_app/providers/StoreProvider'

export const getProfileError = (state: StateSchema) => state?.profile?.error
