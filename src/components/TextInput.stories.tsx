import { Meta, StoryObj } from '@storybook/react' //importantando uma tipagem chamada meta e a outra Storyobj
import { TextInput, TextInputRootProps } from './TextInput'
import { Envelope, Plus } from 'phosphor-react'

export default {
  title: 'Components/TextInput',
  component: TextInput.root,
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
  args: {
    children: [
      <TextInput.icon>
        <Envelope />
      </TextInput.icon>,
      <TextInput.input placeholder="Type your e-mail" />
    ] // estamos botando em array pra não mostrar o fragment
  }
} as Meta<TextInputRootProps> // para trazer a intellisense

export const Default: StoryObj<TextInputRootProps> = {}

export const WhitoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.input placeholder="Type your e-mail" />
  }
}
export const AddTag: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.input placeholder="Type your e-mail" />,
      <TextInput.icon type="plus">
        <Plus />
      </TextInput.icon>
    ]
  }
}
