import { Theme } from '01_app/providers/ThemeProvider'
import { ThemeDecorator } from '06_shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { StoreDecorator } from '06_shared/config/storybook/StoreDecorator/StoreDecorator'
import { Currency } from '05_entities/Currency'
import { Country } from '05_entities/CountrySelect'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [
    StoreDecorator({
        profile: {
            form: {
                first: 'Денис',
                lastname: 'Ерохин',
                age: 31,
                currency: Currency.USD,
                country: Country.Ukraine,
                city: 'Орел',
                username: 'admin',
                avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
            },
        },
    }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                first: 'Денис',
                lastname: 'Ерохин',
                age: 31,
                currency: Currency.USD,
                country: Country.Ukraine,
                city: 'Орел',
                username: 'admin',
                avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
            },
        },
    }),
]
