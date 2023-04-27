import { Country } from '05_entities/CountrySelect'
import { ProfileSchema, ValidateProfileErrors } from '../type/profile'
import { profileActions, profileReducer } from './profileSlice'
import { Currency } from '05_entities/Currency'
import { updateProfileData } from '../services/udpateProfileData/udpateProfileData'

const data = {
    username: 'admin',
    age: 22,
    country: Country.Ukraine,
    lastname: 'ulbi tv',
    first: 'asd',
    city: 'asf',
    currency: Currency.USD,
}

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false }
        expect(
            profileReducer(state as ProfileSchema, profileActions.setReadOnly(true))
        ).toEqual({ readonly: true })
    })

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } }

        expect(
            profileReducer(state as ProfileSchema, profileActions.canselEdit())
        ).toEqual({
            readonly: true,
            validateErrors: [],
            data,
            form: data,
        })
    })

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } }

        expect(
            profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                    username: '123456',
                })
            )
        ).toEqual({
            form: { username: '123456' },
        })
    })

    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR],
        }

        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual(
            {
                isLoading: true,
                validateErrors: [],
            }
        )
    })

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        }

        expect(
            profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))
        ).toEqual({
            isLoading: false,
            validateErrors: [],
            readonly: true,
            form: data,
            data,
        })
    })
})
