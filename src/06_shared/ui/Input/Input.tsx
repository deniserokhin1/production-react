import { Mods, classNames } from '06_shared/lib/classNames/classNames'
import cls from './Input.module.scss'
import { InputHTMLAttributes, memo, useEffect, useRef } from 'react'

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value' | 'readOnly'
>

interface InputProps extends HTMLInputProps {
    className?: string
    inputClass?: string
    value?: string | number
    onChange?: (value: string) => void
    autoFocus?: boolean
    readonly?: boolean
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        inputClass,
        value,
        onChange,
        type = 'text',
        placeholder,
        readonly,
        autoFocus,
        ...otherProps
    } = props

    const mods: Mods = {
        [cls.readonly]: readonly,
    }

    const ref = useRef<HTMLInputElement>(null)

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputText = e.target.value
        if (!e.target.value) inputText = ''
        onChange?.(inputText)
    }

    useEffect(() => {
        if (autoFocus) ref.current?.focus()
    }, [autoFocus])

    return (
        <div className={classNames(cls.Input, mods, [className])}>
            <input
                className={classNames('', {}, [inputClass])}
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                readOnly={readonly}
                {...otherProps}
            ></input>
        </div>
    )
})
