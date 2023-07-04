import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './ArticlePageFilters.module.scss'
import {
    ArticleSortField,
    ArticleTypeTabs,
    ArticleView,
    ArticleViewSelector,
} from '05_entities/Article'
import { useAppDispatch, useAppSelector } from '06_shared/lib/hooks'
import {
    getArticleOrder,
    getArticlePageView,
    getArticleSearch,
    getArticleSort,
    getArticleType,
} from '../../model/selectors/articlePageSelectors'
import { articlePageActions } from '../../model/slices/ArticlePageSlice'
import { Card } from '06_shared/ui/Card/Card'
import { Input } from '06_shared/ui/Input/Input'
import { ArticleSortSelector } from '05_entities/Article/ui/ArticleSortSelector/ArticleSortSelector'
import { SortOrder } from '06_shared/types'
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList'
import { useDebounce } from '06_shared/lib/hooks/useDebounce/useDebouce'
import { TabItem } from '06_shared/ui/Tabs/Tabs'
import { ArticleType } from '05_entities/Article/model/types/article'

interface ArticlePageFilterProps {
    className?: string
}

export const ArticlePageFilters: FC<ArticlePageFilterProps> = (props) => {
    const { className } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const view = useAppSelector(getArticlePageView)
    const sort = useAppSelector(getArticleSort)
    const order = useAppSelector(getArticleOrder)
    const search = useAppSelector(getArticleSearch)
    const type = useAppSelector(getArticleType)

    const fetchData = useCallback(() => {
        dispatch(fetchArticleList({ replace: true }))
    }, [dispatch])

    const deboucedFetchData = useDebounce(fetchData, 500)

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view))
        },
        [dispatch]
    )

    const onChangeSort = useCallback(
        (newSort: ArticleSortField) => {
            dispatch(articlePageActions.setSort(newSort))
            dispatch(articlePageActions.setPage(1))
            fetchData()
        },
        [fetchData, dispatch]
    )

    const onChangeOrder = useCallback(
        (newOrder: SortOrder) => {
            dispatch(articlePageActions.setOrder(newOrder))
            dispatch(articlePageActions.setPage(1))
            fetchData()
        },
        [fetchData, dispatch]
    )

    const onChangeSearch = useCallback(
        (search: string) => {
            dispatch(articlePageActions.setSearch(search))
            dispatch(articlePageActions.setPage(1))
            deboucedFetchData()
        },
        [deboucedFetchData, dispatch]
    )

    const onChangeType = useCallback(
        (tab: TabItem<ArticleType>) => {
            dispatch(articlePageActions.setType(tab.value))
            dispatch(articlePageActions.setPage(1))
            fetchData()
        },
        [fetchData, dispatch]
    )

    return (
        <div className={classNames(cls.articlePageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>

            <Card className={cls.search}>
                <Input
                    inputClass={cls.inputClass}
                    placeholder={t('Поиск') as string}
                    onChange={onChangeSearch}
                    value={search}
                />
            </Card>

            <ArticleTypeTabs onChangeType={onChangeType} value={type} />
        </div>
    )
}
