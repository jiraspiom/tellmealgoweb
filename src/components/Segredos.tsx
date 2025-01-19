'use client'

import CardTwitter from './CardTwitter'
import { Carregando } from './Carregando'
import WhatsHappening from './WhatsHappening'

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
    <div>
      <WhatsHappening />

      <div className="">
        {segredos.length > 0 ? (
          <ul>
            {segredos.map((item, index) => (
              <li key={Number(index)}>
                <CardTwitter
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
      </div>
    </div>
  )
}
