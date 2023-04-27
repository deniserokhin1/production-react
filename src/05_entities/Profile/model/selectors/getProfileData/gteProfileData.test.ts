import { StateSchema } from '01_app/providers/StoreProvider'
import { getProfileData } from './gteProfileData'
import { Currency } from '05_entities/Currency'
import { Country } from '05_entities/CountrySelect'

describe('getProfileData.test', () => {
    test('should return data', () => {
        const data = {
            first: 'Денис',
            lastname: 'Ерохин',
            age: 31,
            currency: Currency.USD,
            country: Country.Ukraine,
            city: 'Орел',
            username: 'admin',
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    })
})
