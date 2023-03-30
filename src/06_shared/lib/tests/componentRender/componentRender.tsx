import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from '06_shared/config/i18n/i18nForTests'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

export interface renderWithRouterOPtions {
    route?: string
}

export const componentRender = (
    component: ReactNode,
    options: renderWithRouterOPtions = {}
) => {
    const { route = '/' } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
        </MemoryRouter>
    )
}
