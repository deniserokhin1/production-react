import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import { TabItem, Tabs } from '06_shared/ui/Tabs/Tabs'
import { ArticleType } from '05_entities/Article/model/types/article'

interface ArticleTypeTabsProps {
    className?: string
    value: ArticleType
    onChangeType: (tab: TabItem<ArticleType>) => void
}

export const ArticleTypeTabs: FC<ArticleTypeTabsProps> = (props) => {
    const { className, onChangeType, value } = props
    const { t } = useTranslation()

    const typeTabs = useMemo<TabItem<ArticleType>[]>(
        () => [
            {
                value: ArticleType.IT,
                content: t('IT'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука'),
            },
            {
                value: ArticleType.ALL,
                content: t('Все'),
            },
        ],
        [t]
    )

    return (
        <Tabs
            tabs={typeTabs}
            value={value}
            onTabClick={onChangeType}
            className={classNames('', {}, [className])}
        ></Tabs>
    )
}
