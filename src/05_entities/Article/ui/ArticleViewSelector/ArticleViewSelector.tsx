import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '06_shared/lib/classNames/classNames'
import cls from './ArticleViewSelector.module.scss'
import { ArticleView } from '../../model/types/article'
import ListIcon from '06_shared/assets/icons/list.svg'
import TileIcon from '06_shared/assets/icons/article.svg'
import { Button } from '06_shared/ui/Button'
import { Icon } from '06_shared/ui/Icon/Icon/Icon'
import { ThemeButton } from '06_shared/ui/Button/Button'

interface ArticleViewSelectorProps {
    className?: string
    view: ArticleView
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.TILE,
        icon: TileIcon,
    },
    {
        view: ArticleView.ROW,
        icon: ListIcon,
    },
]

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
    const { className, view, onViewClick } = props
    const { t } = useTranslation()

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView)
    }

    return (
        <div className={classNames(cls.articleViewSelector, {}, [className])}>
            {viewTypes.map((viewType, index) => (
                <Button
                    theme={ThemeButton.CLEAR}
                    onClick={onClick(viewType.view)}
                    key={index}
                    className={classNames(cls.notSelected, {
                        [cls.selected]: viewType.view === view,
                    })}
                >
                    <Icon Svg={viewType.icon} />
                </Button>
            ))}
        </div>
    )
}
