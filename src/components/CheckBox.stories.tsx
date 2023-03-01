import { Meta } from '@storybook/react'
import { CheckBox, CheckBoxRootProps } from './CheckBox'
import { Check } from 'phosphor-react'

export default {
  title: 'Components/CheckBox',
  component: CheckBox.root,
  args: {
    children: [
      <CheckBox.input />,
      <CheckBox.icon>
        <Check weight="bold" />
      </CheckBox.icon>
    ]
  }
} as Meta<CheckBoxRootProps>

export const Default = {}
