import { StateSchema } from '01_app/providers/StoreProvider'
import { getProfileErrors } from './getProfileError'

describe('getProfileError.test', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: 'error',
            },
        }
        expect(getProfileErrors(state as StateSchema)).toEqual('error')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileErrors(state as StateSchema)).toEqual(undefined)
    })
})
