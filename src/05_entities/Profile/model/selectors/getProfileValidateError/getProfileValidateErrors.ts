import { StateSchema } from '01_app/providers/StoreProvider'

export const getProfileValidateError = (state: StateSchema) => state?.profile?.validateErrors
