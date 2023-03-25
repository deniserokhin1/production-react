import { Theme } from '01_app/providers/ThemeProvider'
import { ThemeDecorator } from '06_shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Loader } from './Loader'

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
