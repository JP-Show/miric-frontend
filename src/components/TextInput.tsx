import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

interface TextInputIconProps {
  children: ReactNode
  type?: 'normal' | 'plus'
}
export interface TextInputRootProps {
  children: ReactNode
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className={`flex items-center py-2 px-3 gap-3 bg-gray-600 rounded ring-gold-500 focus-within:ring-2 h-12 `} // focus-within é pra ver ser existe algum elemento que está com focus dentro dele
    >
      {children}
    </div>
  )
}
TextInputRoot.displayName = 'TextInput.Root'

function TextInputIcon({ children, type = 'normal' }: TextInputIconProps) {
  return (
    <Slot
      className={clsx({
        'w-5 h-5 text-gold-500': type === 'plus',
        'w-8 h-8 text-gray-400': type === 'normal'
      })}
    >
      {children}
    </Slot>
  )
}
TextInputIcon.displayName = 'TextInput.Icon'

function TextInputInput({ ...rest }: TextInputInputProps) {
  return (
    <input
      className={
        'bg-transparent flex-1 text-gray-200  placeholder:text-gray-400 outline-none'
      }
      {...rest}
    />
  ) // flex 1 para ocupar o maximo de espaço dentro do objeto
}
TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  root: TextInputRoot,
  input: TextInputInput,
  icon: TextInputIcon
}
