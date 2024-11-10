import { Image, MapPin, Plane, Search } from 'lucide-react'
import { Avatar } from './Image'

export function Header() {
  return (
    <div className="px-20 bg-gray-100 space-y-10 pb-10">
      <header className="pt-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-red-600">Travelgram</h1>

        <div className="flex justify-between items-center">
          <Search className="h-6 w-6 hover:text-red-600 text-gray-500 cursor-pointer" />

          <div className="px-4 space-x-4">
            <a
              href="#"
              className="h-6 w-6 text-gray-500 text-lg font-medium hover:text-red-600 cursor-pointer"
            >
              Explorar
            </a>
            <a
              href="#"
              className="h-6 w-6 text-gray-500 text-lg font-medium hover:text-red-600 cursor-pointer"
            >
              Minhas Viagens
            </a>
          </div>

          <Avatar
            url="https://avatars.githubusercontent.com/u/97414034?v=4"
            alt="..."
            className="h-12 w-12 rounded-full cursor-pointer border-2 border-violet-500 hover:border-violet-700"
          />
        </div>
      </header>

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-7">
          <Avatar
            url="https://avatars.githubusercontent.com/u/97414034?v=4"
            alt="..."
            className="h-[170px] rounded-full cursor-pointer border-2 border-violet-500 hover:border-violet-700"
          />

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Yaba Ernesto</h2>

            <p className="w-80 text-gray-500">
              Entusiasta das melhores tecnologias de desenvolvimento Web e
              Mobile. Apaixonado por cultura Games & cultura Pop. Plano de
              viagem, viajando pelo mundo em eventos de tecnologia 🌍✈️.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-5 mr-20">
          <p className="flex items-center">
            <MapPin className="text-red-400" />
            <span className="text-sm text-gray-500 ml-2">Angola, Luanda</span>
          </p>
          <p className="flex items-center">
            <Plane className="text-red-400" />
            <span className="text-sm text-gray-500 ml-2">0 Paises</span>
          </p>
          <p className="flex items-center">
            <Image className="text-red-400" />
            <span className="text-sm text-gray-500 ml-2">15 fotos</span>
          </p>
        </div>
      </div>
    </div>
  )
}
