import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { ChangeEvent, useMemo } from 'react'

export interface SelectOption<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string
    options?: SelectOption<T>[]
    value?: T
    onChange?: (value: T) => void
    readonly?: boolean
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { label, options, onChange, value, readonly, className } = props
    
    const optionList = useMemo(() => {
        return options?.map((item: SelectOption<T>) => (
            <option className={cls.option} value={item.value} key={item.value}>
                {item.content}
            </option>
        ))
    }, [options])

    const changeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
    }

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
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
