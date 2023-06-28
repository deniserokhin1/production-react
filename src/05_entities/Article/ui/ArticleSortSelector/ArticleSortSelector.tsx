import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './ArticleSortSelector.module.scss'
import { Select, SelectOption } from '06_shared/ui/Select/Select'
import { SortOrder } from '06_shared/types'
import { ArticleSortField } from '../../model/types/article'

interface ArticleSortSelectorProps {
    className?: string
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (newOrder: SortOrder) => void
    onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = (props) => {
    const { className, onChangeOrder, onChangeSort, order, sort } = props
    const { t } = useTranslation()

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию') as string,
            },
            {
                value: 'desc',
                content: t('убыванию') as string,
            },
        ],
        [t]
    )

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дате создания') as string,
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию') as string,
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам') as string,
            },
        ],
        [t]
    )

    return (
        <div className={classNames(cls.articleSortSelector, {}, [className])}>
            <Select
                label={t('Сортировать по') as string}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                className={cls.margin}
                label={t('по') as string}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    )
}
