import { StateSchema } from '01_app/providers/StoreProvider'

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false
