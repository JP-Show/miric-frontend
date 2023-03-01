import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  type: 'normal' | 'delete'
}

export function Button({ children, type = 'delete' }: ButtonProps) {
  return (
    <button
      className={clsx(
        `text-gray-900 outline-none leading-5 font-sans font-normal text-center tracking-widest py-2 px-3 transition-colors rounded focus:ring-2 ring-white`,
        {
          'bg-gold-500 hover:bg-gold-200': type == 'normal',
          'bg-red-600 hover:bg-red-200': type == 'delete'
        }
      )}
    >
      {children}
    </button>
  )
}
