import { StateSchema } from '01_app/providers/StoreProvider'
import { getProfileValidateError } from './getProfileValidateErrors'
import { ValidateProfileErrors } from '../../type/profile'

describe('gteProfileValidateErrors.test', () => {
    test('should work with filled state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [ValidateProfileErrors.SERVER_ERROR],
            },
        }
        expect(getProfileValidateError(state as StateSchema)).toEqual([
            ValidateProfileErrors.SERVER_ERROR,
        ])
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateError(state as StateSchema)).toEqual(undefined)
    })
})
