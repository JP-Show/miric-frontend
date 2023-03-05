import { Meta, StoryObj } from '@storybook/react' //importantando uma tipagem chamada meta e a outra Storyobj
import { ButtonIcon, ButtonIconRootProps } from './ButtonIcon'
import { MagnifyingGlass, Gear } from 'phosphor-react'

export default {
  title: 'Components/ButtonIcon',
  component: ButtonIcon.root,
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
  args: {
    children: [
      <ButtonIcon.icon>
        <MagnifyingGlass weight="bold" />
      </ButtonIcon.icon>,
      <ButtonIcon.input placeholder="Type your e-mail" />
    ] // estamos botando em array pra não mostrar o fragment
  }
} as Meta<ButtonIconRootProps> // para trazer a intellisense

export const Default: StoryObj<ButtonIconRootProps> = {}

export const Desktop: StoryObj<ButtonIconRootProps> = {
  args: {
    children: [
      <ButtonIcon.input
        className="w-40 left-0 mr-3 ml-3 animate-none opacity-100 text-center"
        placeholder="ButtonIcon here"
      />
    ]
  }
}
export const config: StoryObj<ButtonIconRootProps> = {
  args: {
    children: [
      <ButtonIcon.icon>
        <Gear weight="fill" />
      </ButtonIcon.icon>
    ]
  }
}
