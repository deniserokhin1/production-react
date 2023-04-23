import { FC, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '06_shared/config/routeConfig'
import { Pageloader } from '03_widgets/PageLoader/Pageloader'
import { useAppSelector } from '06_shared/lib/hooks'
import { getUserAuthData } from '05_entities/User'

interface AppRouterProps {
    className?: string
}

export const AppRouter: FC<AppRouterProps> = () => {
    const isAuth = useAppSelector(getUserAuthData)

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter((route) => {
            if (route.authOnly && !isAuth) {
                return false
            }
            return true
        })
    }, [isAuth])

    return (
        <Suspense fallback={<Pageloader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        element={<div className="page-wrapper">{element}</div>}
                        path={path}
                        key={path}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}
