import { useTheme } from '01_app/providers/ThemeProvider'
import { classNames } from '06_shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from '03_widgets/Navbar'
import { Sidebar } from '03_widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useAppDispatch } from './providers/StoreProvider'
import { userActions } from '05_entities/User'

export const App = () => {
    const { theme } = useTheme()
    const mods = {}

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', mods, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
