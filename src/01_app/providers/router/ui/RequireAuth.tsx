import { getUserAuthData } from '05_entities/User'
import { RoutePath } from '06_shared/config/routeConfig/routeConfig'
import { useAppSelector } from '06_shared/lib/hooks'
import { Navigate, useLocation } from 'react-router-dom'

export function RequireAuth({ children }: { children: JSX.Element }) {
    const auth = useAppSelector(getUserAuthData)
    const location = useLocation()

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />
    }

    return children
}
