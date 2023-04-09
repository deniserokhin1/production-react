import { Theme } from '01_app/providers/ThemeProvider'
import { ThemeDecorator } from '06_shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Navbar } from './Navbar'
import { StoreDecorator } from '06_shared/config/storybook/StoreDecorator/StoreDecorator'

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const PRIMARY = Template.bind({})
PRIMARY.args = {}
PRIMARY.decorators = [StoreDecorator({})]

export const AuthNavBar = Template.bind({})
AuthNavBar.args = {}
AuthNavBar.decorators = [StoreDecorator({ user: { authData: {} } })]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
