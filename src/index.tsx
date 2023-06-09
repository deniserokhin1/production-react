import '01_app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { App } from './01_app/App'
import { ThemeProvider } from '01_app/providers/ThemeProvider'
import { ErrorBoundary } from '01_app/providers/ErrorBoundary'
import './06_shared/config/i18n/i18n'
import { StoreProvider } from '01_app/providers/StoreProvider'

const domNode = document.getElementById('root')
const root = createRoot(domNode as HTMLElement)

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
)
