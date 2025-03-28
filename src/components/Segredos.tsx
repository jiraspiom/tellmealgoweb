'use client'

import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Carregando } from './Carregando'
import type { DadoSegredo } from '@/lib/interfaces'
import WhatsHappeningRetro from './WhatsHappeningRetro'
import CardXRetro from './CardXRetro'
import { useTheme } from 'next-themes'

export default function Segredos({ segredos }: { segredos: DadoSegredo[] }) {
  const { setTheme } = useTheme()
  setTheme('dark')
  return (
    <div className="container mx-auto max-w-2x1 p-2 ">
      {/* <h1 className="text-3xl font-bold mb-6">...</h1> */}

      <WhatsHappeningRetro />

      <ScrollArea className="h-[600px]">
        {segredos.length > 0 ? (
          <ul>
            {segredos.map((item, index) => (
              <li key={Number(index)}>
                <CardXRetro segredo={item} />
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
