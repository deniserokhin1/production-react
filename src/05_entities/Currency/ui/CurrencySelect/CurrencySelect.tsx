import { classNames } from '06_shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { Select } from '06_shared/ui/Select/Select'
import { Currency } from '../../models/types/currency'
import { useTranslation } from 'react-i18next'

const options = [
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
]

interface CurrencySelectProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

export const CurrencySelect = memo(
    ({ onChange, value, readonly }: CurrencySelectProps) => {
        const { t } = useTranslation('profile')

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency)
            },
            [onChange]
        )

        return (
            <Select
                className={classNames('')}
                value={value}
                onChange={onChangeHandler}
                label={t('Укажите вариант') as string}
                options={options}
                readonly={readonly}
            />
        )
    }
)
