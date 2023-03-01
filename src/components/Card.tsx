import clownpiece from '../assets/img.png'
import { Slot } from '@radix-ui/react-slot'

export interface CardProps {
  idCard: number
  alt: string
  title: string
}

export function Card({ idCard, alt, title }: CardProps) {
  return (
    <div className="h-auto w-44 text-center">
      <button className="rounded ring-gold-500 outline-none focus:ring-2">
        <img
          className="rounded h-64 w-44 hover:brightness-95"
          src={clownpiece}
          alt={alt}
        />
      </button>
      <label className="font-sans text-gray-400" htmlFor={`${idCard}`}>
        Clownpiece
      </label>
    </div>
  )
}

/* <img
  src="https://cdn.pixabay.com/photo/2013/07/13/13/57/anime-161824_960_720.png"
  alt={alt}
/> */
{
  /* <label htmlFor={`${idCard}`}>{title}</label> */
}
