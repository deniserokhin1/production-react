/* eslint-disable i18next/no-literal-string */
import { Button } from '06_shared/ui/Button'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { ThemeButton } from '06_shared/ui/Button/Button'

interface CounterProps {
    className?: string
}

export const Counter: FC<CounterProps> = () => {
    const counterValue = useSelector(getCounterValue)
    const dispatch = useDispatch()

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                data-testid="increment-btn"
                theme={ThemeButton.BACKGROUND}
                onClick={increment}
            >
                increment
            </Button>
            <Button
                data-testid="decrement-btn"
                theme={ThemeButton.BACKGROUND}
                onClick={decrement}
            >
                decrement
            </Button>
        </div>
    )
}
