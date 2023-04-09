import { StateSchema } from '01_app/providers/StoreProvider'

export const getLoginState = (state: StateSchema) => state?.loginForm
