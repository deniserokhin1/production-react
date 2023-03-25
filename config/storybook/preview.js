import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/06_shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/06_shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from '../../src/06_shared/config/storybook/RouterDecorator/RouterDecorator'
import { Theme } from '../../src/01_app/providers/ThemeProvider'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
