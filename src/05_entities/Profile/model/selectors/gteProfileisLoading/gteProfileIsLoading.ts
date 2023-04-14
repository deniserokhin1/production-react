import { StateSchema } from '01_app/providers/StoreProvider'

export const gteProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading
