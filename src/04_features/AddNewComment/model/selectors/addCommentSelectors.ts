import { StateSchema } from '01_app/providers/StoreProvider'

export const getAddNewCommentText = (state: StateSchema) => state.addnewComment?.text || ''
export const getAddNewCommentError = (state: StateSchema) => state.addnewComment?.error
