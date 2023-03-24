import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { App } from './01_app/App'
import { ThemeProvider } from '01_app/providers/ThemeProvider'
import { ErrorBoundary } from '01_app/providers/ErrorBoundary'
import './06_shared/config/i18n/i18n'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)
