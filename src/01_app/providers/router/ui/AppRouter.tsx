import { FC, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '06_shared/config/routeConfig'
import { Pageloader } from '03_widgets/PageLoader/Pageloader'
import { AppRoutesProps } from '06_shared/config/routeConfig/routeConfig'
import { RequireAuth } from './RequireAuth'

interface AppRouterProps {
    className?: string
}

export const AppRouter: FC<AppRouterProps> = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = <Suspense fallback={<Pageloader />}>{route.element}</Suspense>

        return (
            <Route
                element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
                path={route.path}
                key={route.path}
            />
        )
    }, [])

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}
