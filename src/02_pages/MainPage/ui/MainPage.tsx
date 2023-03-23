import { BugButton } from '01_app/providers/ErrorBoundary'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './MainPage.module.scss'

interface MainPageProps {
    className?: string
}

const MainPage: FC<MainPageProps> = () => {
    const { t } = useTranslation()

    return (
        <div className={cls.container}>
            {t('MAINPAGE')}
            <BugButton />
        </div>
    )
}

export default MainPage
