import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  type: 'normal' | 'delete'
  className?: string
}

export function Button({ children, type = 'normal', className }: ButtonProps) {
  return (
    <button
      className={clsx(
        `text-gray-900 outline-none leading-5 font-sans font-normal text-center tracking-widest py-2 px-3 transition-colors rounded focus:ring-2 ring-white w-4/5`,
        {
          'bg-gold-500 hover:bg-gold-200': type == 'normal',
          'bg-red-600 hover:bg-red-200': type == 'delete'
        },
        className
      )}
    >
      {children}
    </button>
  )
}
