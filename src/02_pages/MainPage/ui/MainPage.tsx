import { useTranslation } from 'react-i18next'
import cls from './MainPage.module.scss'
import { Page } from '03_widgets/Page/Page'

const MainPage = () => {
    const { t } = useTranslation()

    return <Page className={cls.container}>{t('Главная')}</Page>
}

export default MainPage
