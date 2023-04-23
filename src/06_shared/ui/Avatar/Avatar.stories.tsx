import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Avatar } from './Avatar'
import avatar from './avatar.png'

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const PRIMARY = Template.bind({})
PRIMARY.args = {
    size: 150,
    src: avatar,
}

export const SMALL = Template.bind({})
SMALL.args = {
    size: 50,
    src: avatar,
}
