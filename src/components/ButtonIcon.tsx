import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'

interface ButtonIconInputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizeText?: 'sm' | 'md' | 'lg'
  className?: string
}

interface ButtonIconIconProps {
  children: ReactNode
  type?: 'normal' | 'plus'
}
export interface ButtonIconRootProps {
  children: ReactNode
}

function ButtonIconRoot({ children }: ButtonIconRootProps) {
  return (
    <button
      className={`h-12 relative group outline-none flex justify-center items-center py-2 px-3 bg-gray-600 rounded-full ring-gold-500 focus-within:ring-2 `} // focus-within é pra ver ser existe algum elemento que está com focus dentro dele
    >
      {children}
    </button>
  )
}
ButtonIconRoot.displayName = 'ButtonIcon.Root'

function ButtonIconIcon({ children, type = 'normal' }: ButtonIconIconProps) {
  return <Slot className="w-6 h-6 text-gray-200">{children}</Slot>
}
ButtonIconIcon.displayName = 'ButtonIcon.Icon'

function ButtonIconInput({ className, sizeText, ...rest }: ButtonIconInputProps) {
  return (
    <input
      className={clsx(
        'transition-all left-3 relative w-0 bg-transparent flex-1 text-gray-200 placeholder:text-gray-400 outline-none opacity-0 group-focus-within:w-40 group-focus-within:opacity-100',
        {
          'text-xs': sizeText == 'sm',
          'text-sm': sizeText == 'md',
          'text-md': sizeText == 'lg'
        },
        className
      )}
      {...rest}
    />
  ) // flex 1 para ocupar o maximo de espaço dentro do objeto
}
ButtonIconInput.displayName = 'ButtonIcon.Input'

export const ButtonIcon = {
  root: ButtonIconRoot,
  input: ButtonIconInput,
  icon: ButtonIconIcon
}
