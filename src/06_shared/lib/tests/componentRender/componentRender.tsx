import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from '06_shared/config/i18n/i18nForTests'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import { StateSchema, StoreProvider } from '01_app/providers/StoreProvider'
import { DeepPartial } from '@reduxjs/toolkit'

export interface renderWithRouterOPtions {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export const componentRender = (
    component: ReactNode,
    options: renderWithRouterOPtions = {}
) => {
    const { route = '/', initialState } = options

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}
