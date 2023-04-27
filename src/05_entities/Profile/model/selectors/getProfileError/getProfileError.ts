import { StateSchema } from '01_app/providers/StoreProvider'

export const getProfileErrors = (state: StateSchema) => state.profile?.error
