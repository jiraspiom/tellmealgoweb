'use client'
import CardTwitter from '@/components/CardTwitter'
import { Carregando } from '@/components/Carregando'

import WhatsHappening from '@/components/WhatsHappening'
import { getData } from '@/utils/api'
import { useEffect, useState } from 'react'

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
  const [dados, setDados] = useState<Dado[]>([])

  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  // const dados = use(getData())
  useEffect(() => {
    const getdados = async () => {
      try {
        const responseData = await getData()

        console.log('retornou', responseData)

        const newData = responseData.slice(0, 8)
        setDados(newData)
        // setPage(1)
        // setHasMore(responseData.length > 8)
        // console.log(responseData)
        // console.log(newData)
        // console.log(responseData.length > 8)
      } catch (error) {
        console.error('Erro ao carregar os dados:', error)
      }
    }
    getdados()
  }, [])

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
        const responseData = await getData()
        const startIndex = page * 8
        const endIndex = startIndex + 8
        const newData = responseData.slice(startIndex, endIndex)
        setDados(prevData => [...prevData, ...newData])
        setPage(prevPage => prevPage + 1)
        setHasMore(responseData.length > endIndex)
      } catch (error) {
        console.error('Erro ao carregar mais dados:', error)
      }
      setLoading(false)
    }
  }

  return (
    <div>
      <WhatsHappening />

      <div className="">
        {dados.length > 0 ? (
          <ul>
            {dados.map((item, index) => (
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
        {loading && (
          <div className="items-center">
            <Carregando />
          </div>
        )}
      </div>
    </div>
  )
}
