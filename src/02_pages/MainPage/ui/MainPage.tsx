import { useTranslation } from 'react-i18next'
import cls from './MainPage.module.scss'

const MainPage = () => {
    const { t } = useTranslation()

    return <div className={cls.container}>{t('Главная')}</div>
}

export default MainPage
