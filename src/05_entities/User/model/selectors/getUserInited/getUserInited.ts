import { StateSchema } from '01_app/providers/StoreProvider'

export const getUserInited = (state: StateSchema) => state.user._inited
