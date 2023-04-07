import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LoginFrorm } from './LoginFrorm'
import { ThemeDecorator } from '06_shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '01_app/providers/ThemeProvider'

export default {
    title: 'features/LoginForm',
    component: LoginFrorm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginFrorm>

const Template: ComponentStory<typeof LoginFrorm> = (args) => <LoginFrorm {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
    