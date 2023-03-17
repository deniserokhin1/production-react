import { FC } from 'react'
import { useTranslation } from 'react-i18next'

interface AboutPageProps {
    className?: string
}

const AboutPage: FC<AboutPageProps> = () => {
    const { t } = useTranslation('about')

    return <div>{t('ABOUTPAGE')}</div>
}

export default AboutPage
