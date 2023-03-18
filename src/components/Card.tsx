import { Slot } from '@radix-ui/react-slot'
import noneCover from '../img/noneCover.png'

export interface CardProps {
  idCard?: number
  alt?: string
  title?: string
  img?: string
  className?: string
  asChild?: boolean
}

export function Card({
  idCard,
  alt,
  className,
  asChild = false,
  title,
  img
}: CardProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <div className="h-auto w-44 text-center">
      <Comp className={`rounded ring-gold-500 outline-none focus:ring-2`}>
        <img
          className="rounded h-64 w-44 object-cover hover:brightness-95"
          src={img ? img : noneCover}
          alt={alt}
        />
      </Comp>
      <label className="font-sans text-gray-400" htmlFor={`${idCard}`}>
        {title}
      </label>
    </div>
  )
}
