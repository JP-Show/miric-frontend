export interface CardProps {
  idCard: number
  alt: string
  title: string
}

export function Card({ idCard, alt }: CardProps) {
  return (
    <div className="h-auto w-44 text-center">
      <button className="rounded ring-gold-500 outline-none focus:ring-2">
        <img
          className="rounded h-64 w-44 hover:brightness-95"
          src="https://cdn.discordapp.com/attachments/1020756939296227362/1080522438313513091/Screenshot_49.png"
          alt={alt}
        />
      </button>
      <label className="font-sans text-gray-400" htmlFor={`${idCard}`}>
        Clownpiece
      </label>
    </div>
  )
}
