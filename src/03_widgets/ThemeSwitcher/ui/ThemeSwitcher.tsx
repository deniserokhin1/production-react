import cls from './ThemeSwitcher.module.scss'
import { FC } from 'react'
import { Theme, useTheme } from '01_app/providers/ThemeProvider'
import DarkIcon from '06_shared/assets/icons/theme-dark.svg'
import LightIcon from '06_shared/assets/icons/theme-light.svg'
import { Button } from '06_shared/ui/Button'
import { ThemeButton } from '06_shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button className={className} theme={ThemeButton.CLEAR} onClick={toggleTheme}>
            <div className={cls.wrapper}>{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}</div>
        </Button>
    )
}
