import { classNames } from '06_shared/lib/classNames/classNames'
import { Country } from '../model/types/country'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Select } from '06_shared/ui/Select/Select'

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Ukraine, content: Country.Ukraine },
]

interface CountrySelectProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

export const CountrySelect = memo(
    ({ onChange, value, readonly }: CountrySelectProps) => {
        const { t } = useTranslation('profile')

        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Country)
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
