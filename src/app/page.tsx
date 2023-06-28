'use client'
import { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { Texto } from '@/components/Texto'
import { Botao } from '@/components/Botao'
import { fetchData, postData } from './utils/api'
import { Carregando } from '@/components/Carregando'

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

  // const [records, setRecords] = useState<string[]>([])
  // const handSubmit = async (event: FormEvent) => {
  //   event.preventDefault()
  //   setRecords([...records, texto].reverse())
  //   setTexto('')
  // }

  const handleOnChange = (text: string) => {
    setTexto(text)
  }

  useEffect(() => {
    const getData = async () => {
      const responseData = await fetchData()
      setData(responseData || [])
    }
    getData()
  }, [])

  const handlePostData = async () => {
    try {
      const response = await postData({ segredo: texto })

      console.log('Resposta do POST:', response.data)

      fetchData()
      setData(data || [])
      setTexto('')
    } catch (error) {
      console.error('Erro ao enviar a requisição POST:', error)
    }
  }

  return (
    <div>
      <div>
        <Texto value={texto} onChange={handleOnChange} />
      </div>
      <div>
        <Botao onClick={handlePostData} />
      </div>
      <hr className="border-4 border-gray-800" />
      <div>
        {data.length > 0 ? (
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <Card descricao={item.segredo} url={item.urlImage} />
              </li>
            ))}
          </ul>
        ) : (
          // <p>Loadizando...</p>
          <Carregando />
        )}
      </div>
    </div>
  )
}
