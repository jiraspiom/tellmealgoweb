'use client'

import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Carregando } from './Carregando'
import WhatsHappening from './WhatsHappening'
import CardX from './CardX'

interface DadoSegredo {
  cor: string
  coracao: null
  dataAt: string
  id: string
  segredo: string
  urlImage: string
  __v: number
}

export default function Segredos({ segredos }: { segredos: DadoSegredo[] }) {
  return (
    <div className="container mx-auto max-w-2x1 p-4">
      {/* <h1 className="text-3xl font-bold mb-6">...</h1> */}

      <WhatsHappening />

      <ScrollArea className="h-[600px]">
        {segredos.length > 0 ? (
          <ul>
            {segredos.map((item, index) => (
              <li key={Number(index)}>
                <CardX
                  descricao={item.segredo}
                  url={item.urlImage}
                  cor={item.cor}
                  data={item.dataAt}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="items-center">
            <Carregando />
          </div>
        )}
      </ScrollArea>
    </div>
  )
}
