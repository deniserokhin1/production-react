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
        const element = <div className="page-wrapper">{route.element}</div>
        return (
            <Route
                element={
                    <div className="page-wrapper">
                        {route.authOnly ? <RequireAuth>{element}</RequireAuth> : route.element}
                    </div>
                }
                path={route.path}
                key={route.path}
            />
        )
    }, [])

    return (
        <Suspense fallback={<Pageloader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    )
}
