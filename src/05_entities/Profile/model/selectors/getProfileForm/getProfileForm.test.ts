import { StateSchema } from '01_app/providers/StoreProvider'
import { Currency } from '05_entities/Currency'
import { Country } from '05_entities/CountrySelect'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm.test', () => {
    test('should work with filled state', () => {
        const form = {
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
                form,
            },
        }
        expect(getProfileForm(state as StateSchema)).toEqual(form)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
