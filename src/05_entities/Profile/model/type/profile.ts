import { Country } from '05_entities/CountrySelect'
import { Currency } from '05_entities/Currency'

export enum ValidateProfileErrors {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    first?: string
    lastname?: string
    age?: number | string
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading?: boolean
    error?: string
    readonly?: boolean
    validateErrors?: ValidateProfileErrors[]
}
