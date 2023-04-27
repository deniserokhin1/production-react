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
    src: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
}

export const SMALL = Template.bind({})
SMALL.args = {
    size: 50,
    src: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
}
