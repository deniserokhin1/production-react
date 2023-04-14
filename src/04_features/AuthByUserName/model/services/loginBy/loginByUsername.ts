/* eslint-disable no-console */
import { ThunkConfig } from '01_app/providers/StoreProvider/config/StateSchema'
import { User, userActions } from '05_entities/User'
import { USER_LOCALSTORAGE_KEY } from '06_shared/const/localstorage'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi
        try {
            const response = await extra.api.post<User>('/login', authData)
            if (!response.data) throw new Error()

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            dispatch(userActions.setAuthData(response.data))
            extra.navigate?.('/about')
            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('error')
        }
    }
)
