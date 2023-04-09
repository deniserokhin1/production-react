/* eslint-disable no-console */
import { User, userActions } from '05_entities/User'
import { USER_LOCALSTORAGE_KEY } from '06_shared/const/localstorage'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', async (authData, thunkApi) => {
    try {
        const response = await axios.post<User>('http://localhost:8000/login', authData)
        if (!response.data) throw new Error()

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
        thunkApi.dispatch(userActions.setAuthData(response.data))
        return response.data
    } catch (error) {
        console.log(error)
        return thunkApi.rejectWithValue('error')
    }
})
