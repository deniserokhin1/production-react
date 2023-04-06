import { StateSchema } from '01_app/providers/StoreProvider'
import { getCounter } from './getCounter'
import { DeepPartial } from '@reduxjs/toolkit'

describe('getCounter', () => {
    test('shuold return counter value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        }
        expect(getCounter(state as StateSchema)).toEqual({value: 10})
    })
})
