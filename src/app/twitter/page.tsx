'use client'
import { Botao } from '@/components/Botao'
import { Card } from '@/components/Card'
import { Indicador } from '@/components/Indicador'
import { Responsivo } from '@/components/Responsivo'
import { Texto } from '@/components/Texto'
import { useState } from 'react'

export default function Twitter() {
  const [text, setText] = useState('')
  const [cardContent, setCardContent] = useState('')

  const [cor, setCor] = useState('')

  const handleButtonClick = () => {
    setCardContent(text)
  }
  const handleIndicadorClick = (corNova: string) => {
    setCor(corNova)
  }

  const handleTextChange = (text: string) => {
    setText(text)
  }

  return (
    <div className="p-relative h-screen">
      <div className="items-center justify-center">
        <div className="flex-col">
          <div className="">
            <Texto value={text} onChange={handleTextChange} />
          </div>
          <div className="flex flex-row">
            <div className="flex items-center ">
              <Botao onClick={handleButtonClick} novaCor={cor} />
            </div>
            <div className="flex items-center">
              <Indicador onClick={handleIndicadorClick} />
            </div>
          </div>
        </div>
        <hr className="border-4 border-gray-800" />
        <Card
          descricao={cardContent}
          url="https://media.istockphoto.com/id/1221000031/pt/foto/isolated-pink-guava-fruits.jpg?s=2048x2048&w=is&k=20&c=i2G46B0RXP4kOYy1CN4e57EdykeC12abXFbAy5eIuTY="
          cor="bg-green-500"
        />
        <Responsivo />
      </div>
    </div>
  )
}
