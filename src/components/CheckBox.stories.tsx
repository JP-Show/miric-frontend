import { Meta } from '@storybook/react'
import { CheckBox, CheckBoxRootProps } from './CheckBox'

export default {
  title: 'Components/CheckBox',
  component: CheckBox.root,
  args: {
    children: [<CheckBox.input />, <CheckBox.icon />]
  }
} as Meta<CheckBoxRootProps>

export const Default = {}
