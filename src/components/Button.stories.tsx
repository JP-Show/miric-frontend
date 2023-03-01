import { Meta, StoryObj } from '@storybook/react' //importantando uma tipagem chamada meta e a outra Storyobj
import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  args: { children: 'BUTTON' },
  argTypes: {
    type: {
      options: ['normal', 'delete'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<ButtonProps> // para trazer a intellisense

export const Default = {} as StoryObj
