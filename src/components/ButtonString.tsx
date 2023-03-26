import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'
import { useState } from 'react'

export interface ButtonStringRootProps {
  children: ReactNode
  asChild?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
  isActive?: boolean
}

interface ButtonStringIconProps {
  children: ReactNode
}

function ButtonStringRoot({
  children,
  asChild,
  size = 'md',
  className,
  isActive = false
}: ButtonStringRootProps) {
  const [bgColor, setBgColor] = useState('bg-gray-600')
  const [textColor, setTextColor] = useState('text-gray-200')

  function handleColor() {
    setBgColor(bgColor === 'bg-gray-600' ? 'bg-gold-500' : 'bg-gray-600')
    setTextColor(bgColor === 'bg-gray-600' ? 'text-gray-900' : 'text-gray-200')
  }

  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      onClick={handleColor}
      className={clsx(
        `${
          isActive ? 'text-gray-900' : 'text-gray-200'
        } flex items-center h-auto outline-none leading-5 font-sans font-bold text-center tracking-widest ${
          isActive ? 'bg-gold-500' : 'bg-gray-600'
        } py-2 px-3 focus:ring-2 ring-white rounded-lg cursor-pointer`,
        {
          'text-xm': size == 'sm',
          'text-sm': size == 'md',
          'text-md': size == 'lg'
        },
        className
      )}
    >
      {children}
    </Comp>
  )
}

ButtonStringRoot.displayName = 'ButtonString.Root'

function ButtonStringIcon({ children }: ButtonStringIconProps) {
  return <Slot className="w-6 h-6">{children}</Slot>
}
ButtonStringIcon.displayName = 'ButtonString.Icon'

export const ButtonString = {
  root: ButtonStringRoot,
  icon: ButtonStringIcon
}
