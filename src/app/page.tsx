'use client'

import { Botao } from '@/components/Botao'
import { Card } from '@/components/Card'
import { Carregando } from '@/components/Carregando'
import { Indicador } from '@/components/Indicador'
import { Texto } from '@/components/Texto'
import { useState, useEffect } from 'react'
import { fetchData, postData } from './utils/api'

interface Dado {
  cor: string
  coracao: null
  dataAt: string
  id: string
  segredo: string
  urlImage: string
  __v: number
}

export default function Opa() {
  const [texto, setTexto] = useState('')
  const [data, setData] = useState<Dado[]>([])
  const [cor, setCor] = useState('')
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  const handleOnChange = (text: string) => {
    setTexto(text)
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await fetchData()
        const newData = responseData.slice(0, 8)
        setData(newData)
        setPage(1)
        setHasMore(responseData.length > 8)
        console.log(responseData)
        console.log(newData)
        console.log(responseData.length > 8)
      } catch (error) {
        console.error('Erro ao carregar os dados:', error)
      }
    }
    getData()
  }, [])

  const handlePostData = async () => {
    try {
      const response = await postData({ segredo: texto, cor })

      if (response.status === 200) {
        const novoDado = response.data
        setData((prevData) => [novoDado, ...prevData])
        setTexto('')
      } else {
        console.error('Erro ao adicionar o dado:', response.status)
      }
    } catch (error) {
      console.error('Erro ao enviar a requisição POST:', error)
    }
  }

  const handleIndicadorClick = (corNova: string) => {
    setCor(corNova)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadMore()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const loadMore = async () => {
    if (!loading && hasMore) {
      setLoading(true)
      try {
        const responseData = await fetchData()
        const startIndex = page * 8
        const endIndex = startIndex + 8
        const newData = responseData.slice(startIndex, endIndex)
        setData((prevData) => [...prevData, ...newData])
        setPage((prevPage) => prevPage + 1)
        setHasMore(responseData.length > endIndex)
      } catch (error) {
        console.error('Erro ao carregar mais dados:', error)
      }
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="">
        <Texto value={texto} onChange={handleOnChange} />
      </div>

      <div className="flex flex-row">
        <div className="flex items-center">
          <Botao onClick={handlePostData} novaCor={cor} />
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
              <li key={index}>
                <Card
                  descricao={item.segredo}
                  url={item.urlImage}
                  cor={item.cor}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="items-center">
            <Carregando />
          </div>
        )}
        {loading && (
          <div className="items-center">
            <Carregando />
          </div>
        )}
      </div>
    </div>
  )
}
