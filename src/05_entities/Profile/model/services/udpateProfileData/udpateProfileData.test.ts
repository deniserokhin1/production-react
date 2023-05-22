import axios from 'axios'
import { TestAsyncThunk } from '06_shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { Currency } from '05_entities/Currency'
import { Country } from '05_entities/CountrySelect'
import { updateProfileData } from './udpateProfileData'
import { ValidateProfileErrors } from '../../type/profile'

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

const data = {
    first: 'Денис',
    lastname: 'Ерохин',
    age: 31,
    currency: Currency.USD,
    country: Country.Ukraine,
    city: 'Орел',
    username: 'admin',
    id: '1'
}

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk()

        expect(mockedAxios.put).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR])
    })

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, first: '' },
            },
        })
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA])
    })
})
