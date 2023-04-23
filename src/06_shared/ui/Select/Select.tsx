import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { ChangeEvent, FC, useMemo } from 'react'

export interface SelectOption {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string
    options?: SelectOption[]
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select: FC<SelectProps> = ({
    label,
    options,
    onChange,
    value,
    readonly,
}) => {
    const optionList = useMemo(() => {
        return options?.map((item: SelectOption) => (
            <option className={cls.option} value={item.value} key={item.value}>
                {item.content}
            </option>
        ))
    }, [options])

    const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames(cls.Wrapper)}>
            {label && <span className={cls.label}>{label}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={changeHandler}
                disabled={readonly}
            >
                {optionList}
            </select>
        </div>
    )
}
