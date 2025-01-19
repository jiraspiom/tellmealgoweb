'use client'

import BotaoTwitter from '@/components/BotaoTwitter'
import CardTwitter from '@/components/CardTwitter'
import { Carregando } from '@/components/Carregando'
import { Indicador } from '@/components/Indicador'
import { Texto } from '@/components/Texto'
import { getData, postData } from '@/utils/actions'
import { useState, useEffect } from 'react'

interface Dado {
  cor: string
  coracao: null
  dataAt: string
  id: string
  segredo: string
  urlImage: string
  __v: number
}

export default function Home() {
  const [texto, setTexto] = useState('')
  const [data, setData] = useState<Dado[]>([])
  const [cor, setCor] = useState('')

  const handleOnChange = (text: string) => {
    setTexto(text)
  }

  useEffect(() => {
    const getDados = async () => {
      try {
        const responseData = await getData()
        setData(responseData || [])
      } catch (error) {
        console.error('Erro ao carregar os dados:', error)
      }
    }
    getDados()
  }, [])

  const handlePostData = async () => {
    try {
      const response = await postData({ segredo: texto, cor })

      // console.log('Resposta do POST:', response.data)

      if (response.status === 200) {
        const novoDado = response.data
        setData(prevData => [novoDado, ...prevData])
        setTexto('')
      } else {
        console.error('Erro ao adicionar o dado:', response.status)
      }
      // fetchData()
    } catch (error) {
      console.error('Erro ao enviar a requisição POST:', error)
    }
  }

  const handleIndicadorClick = (corNova: string) => {
    setCor(corNova)
  }

  return (
    <div>
      <div className="">
        <Texto value={texto} onChange={handleOnChange} />
      </div>

      <div className="flex flex-row">
        <div className="flex items-center ">
          <BotaoTwitter onClick={handlePostData} novaCor={cor} />
        </div>

        <div className="flex items-center ">
          <Indicador onClick={handleIndicadorClick} />
        </div>
      </div>

      <hr className="border-4 border-gray-800" />
      <div>
        {data.length > 0 ? (
          <ul>
            {data.map((item, index) => (
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
          // <p>Loadizando...</p>
          <div className="items-center">
            <Carregando />
          </div>
        )}
      </div>
    </div>
  )
}
