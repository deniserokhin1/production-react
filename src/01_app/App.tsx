import { useTheme } from '01_app/providers/ThemeProvider'
import { classNames } from '06_shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from '03_widgets/Navbar'
import { Sidebar } from '03_widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { getUserInited, userActions } from '05_entities/User'
import { useAppDispatch, useAppSelector } from '06_shared/lib/hooks'

export const App = () => {
    const { theme } = useTheme()
    const mods = {}

    const dispatch = useAppDispatch()


    const inited = useAppSelector(getUserInited)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

    return (
        <div className={classNames('app', mods, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    )
}
