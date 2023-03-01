import { Meta, StoryObj } from '@storybook/react' //importantando uma tipagem chamada meta e a outra Storyobj
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: { children: 'Lorem ipsum' },
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps> // para trazer a intellisense

export const CustomComponents: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Hello World</p>
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}

export const Default = {} as StoryObj
