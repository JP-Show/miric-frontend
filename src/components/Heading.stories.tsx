import { Meta, StoryObj } from '@storybook/react' //importantando uma tipagem chamada meta e a outra Storyobj
import { Heading, HeadingProps } from './Heading'

export default {
  title: 'Components/Heading',
  component: Heading,
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
} as Meta<HeadingProps> // para trazer a intellisense

export const CustomComponents: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: <h1>Heading with H1</h1>
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
