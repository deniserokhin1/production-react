import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Currency } from '05_entities/Currency/models/types/currency'
import { Country } from '05_entities/CountrySelect/model/types/country'
import avatar from '06_shared/assets/tests/avatar.png'

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
        avatar,
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
