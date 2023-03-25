import { Theme } from '01_app/providers/ThemeProvider'
import { ThemeDecorator } from '06_shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const PRIMARY = Template.bind({})
PRIMARY.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
}

export const PRIMARY_Dark = Template.bind({})
PRIMARY_Dark.args = {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY,
}
PRIMARY_Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const SECONDARY = Template.bind({})
SECONDARY.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
}

export const SECONDARY_Dark = Template.bind({})
SECONDARY_Dark.args = {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY,
}
SECONDARY_Dark.decorators = [ThemeDecorator(Theme.DARK)]
