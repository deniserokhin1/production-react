import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Theme } from '01_app/providers/ThemeProvider'
import { ThemeDecorator } from '06_shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextSize, TextTheme } from './Text'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'Text',
    text: 'Text',
}

export const Error = Template.bind({})
Error.args = {
    title: 'Text',
    text: 'Text',
    theme: TextTheme.ERROR,
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
    title: 'Text',
    text: 'Text',
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitle = Template.bind({})
onlyTitle.args = {
    title: 'Text',
}

export const onlyTitleDark = Template.bind({})
onlyTitleDark.args = {
    title: 'Text',
}
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyText = Template.bind({})
onlyText.args = {
    text: 'Text',
}

export const onlyTextDark = Template.bind({})
onlyTextDark.args = {
    text: 'Text',
}
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SizeM = Template.bind({})
SizeM.args = {
    title: 'Text',
    text: 'Text',
    size: TextSize.M,
}

export const SizeL = Template.bind({})
SizeL.args = {
    title: 'Text',
    text: 'Text',
    size: TextSize.L,
}
