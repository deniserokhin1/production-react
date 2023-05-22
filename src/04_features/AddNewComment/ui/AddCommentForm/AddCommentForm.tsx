import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './AddCommentForm.module.scss'
import { Input } from '06_shared/ui/Input/Input'
import { Button } from '06_shared/ui/Button'
import { ThemeButton } from '06_shared/ui/Button/Button'
import { useAppDispatch, useAppSelector } from '06_shared/lib/hooks'
import { getAddNewCommentText } from '../../model/selectors/addCommentSelectors'
import { addNewCommentActions, addNewCommentReducer } from '../../model/slices/addNewCommnetSlice'
import {
    DynamicModuleLoader,
    ReducersList,
} from '06_shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

export interface AddCommentFormProps {
    className?: string
    onSendComment: (value: string) => void
}

const reducers: ReducersList = {
    addnewComment: addNewCommentReducer,
}

const AddCommentForm: FC<AddCommentFormProps> = (props) => {
    const { className, onSendComment } = props
    const { t } = useTranslation()
    const text = useAppSelector(getAddNewCommentText)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addNewCommentActions.setText(value))
        },
        [dispatch]
    )

    const onSendHandler = useCallback(() => {
        onSendComment(text)
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.addCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    value={text}
                    onChange={onCommentTextChange}
                    placeholder={t('Введите текст комментария') as string}
                />
                <Button onClick={onSendHandler} theme={ThemeButton.OUTLINE}>
                    {t('Отправить') as string}
                </Button>
            </div>
        </DynamicModuleLoader>
    )
}

export default AddCommentForm
