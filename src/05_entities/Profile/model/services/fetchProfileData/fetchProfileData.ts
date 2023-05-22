/* eslint-disable no-console */
import { ThunkConfig } from '01_app/providers/StoreProvider'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Profile } from '../../type/profile'

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (profileId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi
        try {
            const response = await extra.api.get<Profile>(`/profile/${profileId}`)

            if(!response.data) throw new Error()

            return response.data
        } catch (error) {
            console.log(error)
            return rejectWithValue('error')
        }
    }
)
