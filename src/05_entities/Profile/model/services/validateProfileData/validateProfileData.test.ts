import { Currency } from '05_entities/Currency'
import { Country } from '05_entities/CountrySelect'
import { validateProfileData } from './validateProfileData'
import { ValidateProfileErrors } from '../../type/profile'

jest.mock('axios')

const data = {
    first: 'Денис',
    lastname: 'Ерохин',
    age: 31,
    currency: Currency.USD,
    country: Country.Ukraine,
    city: 'Орел',
    username: 'admin',
}

describe('validateProfileData.test', () => {
    test('success', () => {
        const result = validateProfileData(data)
        expect(result).toEqual([])
    })
    test('without first and last name', () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' })
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA])
    })
    test('without age', () => {
        const result = validateProfileData({ ...data, age: '' })
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE])
    })
    test('empty data', () => {
        const result = validateProfileData({})
        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_COUNTRY,
        ])
    })
})
