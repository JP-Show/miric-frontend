import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

export interface CheckBoxRootProps {
  children: ReactNode
}

export interface CheckBoxIconProps {
  children: ReactNode
}

function CheckBoxRoot({ children }: CheckBoxRootProps) {
  return (
    <div className="flex ring-gold-500 justify-center items-center item-center rounded bg-gray-600 h-6 w-6 focus-within:ring-2">
      {children}
    </div>
  )
}

function CheckBoxIcon({ children }: CheckBoxIconProps) {
  return (
    <Slot className=" text-transparent h-6 w-6 peer-checked/input:text-gold-500 ">
      {children}
    </Slot>
  )
}

function CheckBoxInput() {
  return (
    <input type="checkbox" className="h-5 w-5 opacity-0 peer/input absolute" />
  )
}

export const CheckBox = {
  root: CheckBoxRoot,
  icon: CheckBoxIcon,
  input: CheckBoxInput
}
