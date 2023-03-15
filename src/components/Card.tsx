import { Slot } from '@radix-ui/react-slot'

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
  img = 'https://cdn.discordapp.com/attachments/1020756939296227362/1080522438313513091/Screenshot_49.png'
}: CardProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <div className="h-auto w-44 text-center">
      <Comp className={`rounded ring-gold-500 outline-none focus:ring-2`}>
        <img
          className="rounded h-64 w-44 hover:brightness-95"
          src={img}
          alt={alt}
        />
      </Comp>
      <label className="font-sans text-gray-400" htmlFor={`${idCard}`}>
        {title}
      </label>
    </div>
  )
}
