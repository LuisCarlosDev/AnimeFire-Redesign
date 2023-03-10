import Image from 'next/image'

const animePhoto = '/background.webp'

export function Anime() {
  return (
    <div className="w-72 bg-white overflow-hidden border-2 border-text_hover rounded-md bg-no-repeat bg-contain">
      <Image src={animePhoto} alt="Anime" width={300} height={200} priority />

      <div className="w-full bg-white p-4">
        <span className="text-title text-lg font-bold">Haikyuu</span>
      </div>
    </div>
  )
}
