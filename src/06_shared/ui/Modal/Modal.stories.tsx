import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from '06_shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '01_app/providers/ThemeProvider'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
    isOpen: true,
    children: 'Text',
}

export const Dark = Template.bind({})
Dark.args = {
    isOpen: true,
    children: 'Text',
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
