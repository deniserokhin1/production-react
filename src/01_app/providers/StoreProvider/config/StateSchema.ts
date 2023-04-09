import { LoginSchema } from '04_features/AuthByUserName'
import { UserSchema } from '05_entities/User'

export interface StateSchema {
    user: UserSchema
    loginForm?: LoginSchema
}
