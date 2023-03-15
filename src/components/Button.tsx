import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode, ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  types: 'normal' | 'delete'
  className?: string
  asChild?: boolean
}

export function Button({
  children,
  types = 'normal',
  className,
  asChild = false,
  ...rest
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      {...rest}
      className={clsx(
        `text-gray-900 outline-none leading-5 font-sans font-normal text-center tracking-widest py-3 px-3 transition-colors rounded focus:ring-2 ring-white w-4/5 lg:text-md`,
        {
          'bg-gold-500 hover:bg-gold-200': types == 'normal',
          'bg-red-600 hover:bg-red-200': types == 'delete'
        },
        className
      )}
    >
      {children}
    </Comp>
  )
}
