import { StateSchema } from '01_app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'
import { DeepPartial } from '@reduxjs/toolkit'

describe('getCounterValue.test', () => {
    const state: DeepPartial<StateSchema> = {
        counter: { value: 10 },
    }
    test('', () => {
        expect(getCounterValue(state as StateSchema)).toBe(10)
    })
})
