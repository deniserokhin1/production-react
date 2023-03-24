import { classNames } from '06_shared/lib/classNames/classNames'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '06_shared/ui/Button'
import { ThemeButton } from '06_shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation()

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Язык')}
        </Button>
    )
}
