/* eslint-disable i18next/no-literal-string */
import { FC, useEffect, useState } from 'react'
import { Button } from '06_shared/ui/Button'

interface bugButtonProps {
    className?: string
}

export const BugButton: FC<bugButtonProps> = () => {
    const [error, setError] = useState<boolean>(false)

    const throwError = () => setError(true)

    useEffect(() => {
        if (error) throw new Error()
    }, [error])

    return <Button onClick={throwError}>Выбросить ошибку</Button>
}
