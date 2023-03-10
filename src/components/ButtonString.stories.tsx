import { Meta, StoryObj } from '@storybook/react' //importantando uma tipagem chamada meta e a outra Storyobj
import { ButtonString, ButtonStringRootProps } from './ButtonString'
import { MagnifyingGlass } from 'phosphor-react'

export default {
  title: 'Components/ButtonString',
  component: ButtonString.root,
  args: { children: 'TagButton' },
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as Meta<ButtonStringRootProps> // para trazer a intellisense

export const Default = {} as StoryObj
