import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { Button } from '06_shared/ui/Button'
import IconCopy from '06_shared/assets/icons/copy.svg'
import { ThemeButton } from '06_shared/ui/Button/Button'

interface CodeProps {
    className?: string
    text: string
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props
    const { t } = useTranslation()

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    }, [text])

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button className={cls.copyBtn} theme={ThemeButton.CLEAR} onClick={onCopy}>
                <IconCopy className={cls.iconCopy} />
            </Button>
            <code>{text}</code>
        </pre>
    )
})
