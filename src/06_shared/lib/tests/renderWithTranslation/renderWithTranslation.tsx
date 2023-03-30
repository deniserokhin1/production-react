import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from '06_shared/config/i18n/i18nForTests'

export function renderWithTranslation(conmponent: ReactNode) {
    return render(<I18nextProvider i18n={i18nForTests}>{conmponent}</I18nextProvider>)
}
