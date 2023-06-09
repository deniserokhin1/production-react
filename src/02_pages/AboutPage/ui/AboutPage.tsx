import { useTranslation } from 'react-i18next'
import cls from './AboutPage.module.scss'
import { Page } from '03_widgets/Page/Page'

const AboutPage = () => {
    const { t } = useTranslation('about')

    return <div className={cls.container}>{t('ABOUTPAGE')}</div>
}

export default AboutPage
