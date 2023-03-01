import { Meta, StoryObj } from '@storybook/react' //importantando uma tipagem chamada meta e a outra Storyobj
import { Card, CardProps } from './Card'

export default {
  title: 'Components/Card',
  component: Card,

  args: {
    title: 'Card Title'
  },
  argTypes: {
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as Meta<CardProps> // para trazer a intellisense

export const Default = {} as StoryObj
