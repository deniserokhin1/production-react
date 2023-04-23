import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CurrencySelect } from './CurrencySelect'
import { Currency } from '05_entities/Currency/models/types/currency'

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
    <CurrencySelect {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
    value: Currency.EUR,
}
