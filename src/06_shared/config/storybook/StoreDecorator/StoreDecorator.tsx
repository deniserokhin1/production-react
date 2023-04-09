import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from '01_app/providers/StoreProvider'
import { DeepPartial } from '@reduxjs/toolkit'

export const StoreDecorator =
    (state: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
        (
            <StoreProvider initialState={state}>
                <StoryComponent />
            </StoreProvider>
        )
