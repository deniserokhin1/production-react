import axios from 'axios'
import { TestAsyncThunk } from '06_shared/lib/tests/testAsyncThunk/testAsyncThunk'
import { fetchProfileData } from './fetchProfileData'
import { Currency } from '05_entities/Currency'
import { Country } from '05_entities/CountrySelect'

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
}

describe('fetchProfileData.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ data }))
        const result = await thunk.callThunk()

        expect(mockedAxios.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
        expect(result.payload).toEqual(data)
    })
    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
        const result = await thunk.callThunk()

       
        expect(mockedAxios.get).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
        expect(result.payload).toBe('error')
    })
})
