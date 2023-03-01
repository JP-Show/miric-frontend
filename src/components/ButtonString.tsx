import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'
import { useState } from 'react'

export interface ButtonStringRootProps {
  children: ReactNode
  asChild?: boolean
  radius: 'normal' | 'icon'
}

interface ButtonStringIconProps {
  children: ReactNode
}

function ButtonStringRoot({
  children,
  asChild,
  radius = 'normal'
}: ButtonStringRootProps) {
  const [bgColor, setBgColor] = useState('bg-gray-900')
  const [textColor, setTextColor] = useState('text-gray-200')

  function handleColor() {
    setBgColor(bgColor === 'bg-gray-900' ? 'bg-gold-500' : 'bg-gray-900')
    setTextColor(bgColor === 'bg-gray-900' ? 'text-gray-900' : 'text-gray-200')
  }

  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      onClick={handleColor}
      className={clsx(
        `${textColor} flex items-center h-9 outline-none leading-5 font-sans font-normal text-center tracking-widest ${bgColor} py-2 px-3 focus:ring-2 ring-white `,
        {
          'rounded-full': radius === 'icon',
          'rounded-lg': radius === 'normal'
        }
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
