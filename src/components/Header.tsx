import Image from 'next/image'
import { Input } from './Input'

const logoImg = '/logo.webp'

const headerData = ['Animes', 'Filmes', 'Gênero', 'Temporadas']

export function Header() {
  return (
    <header className="bg-background px-8 py-6 flex items-center justify-between gap-16">
      <Image src={logoImg} alt="AnimeFire" width={200} height={40} priority />

      <nav className="">
        <ul className="flex items-center justify-center gap-4 text-text text-base ">
          {headerData.map((item) => (
            <li key={item} className="cursor-pointer hover:text-text_hover">
              {item}
            </li>
          ))}
        </ul>
      </nav>

      <Input type="text" placeholder="O que você procura?" />
    </header>
  )
}
