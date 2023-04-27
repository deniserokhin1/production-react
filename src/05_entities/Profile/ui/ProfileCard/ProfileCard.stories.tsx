import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Currency } from '05_entities/Currency/models/types/currency'
import { Country } from '05_entities/CountrySelect/model/types/country'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
    data: {
        first: 'Денис',
        lastname: 'Ерохин',
        age: 31,
        currency: Currency.USD,
        country: Country.Ukraine,
        city: 'Орел',
        username: 'admin',
        avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
    },
}

export const withError = Template.bind({})
withError.args = {
    error: 'error',
}

export const isLoading = Template.bind({})
isLoading.args = {
    isLoading: true,
}
