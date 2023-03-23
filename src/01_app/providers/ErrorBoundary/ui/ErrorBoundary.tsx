/* eslint-disable i18next/no-literal-string */
import { PageError } from '03_widgets/PageError'
import React, { ErrorInfo, ReactNode, Suspense } from 'react'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        // eslint-disable-next-line no-console
        console.log(error, errorInfo)
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense>
                    <PageError />
                </Suspense>
            )
        }

        return children
    }
}
