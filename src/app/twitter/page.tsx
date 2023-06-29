'use client'
import { Botao } from '@/components/Botao'
import { Card } from '@/components/Card'
import { Responsivo } from '@/components/Responsivo'
import { Texto } from '@/components/Texto'
import { useState } from 'react'

export default function Twitter() {
  const [text, setText] = useState('')
  const [cardContent, setCardContent] = useState('')

  const handleButtonClick = () => {
    setCardContent(text)
  }

  const handleTextChange = (text: string) => {
    setText(text)
  }

  return (
    <div className="h-screen items-center ">
      <div className="items-center justify-center">
        <div className="flex-col">
          <div className="">
            <Texto value={text} onChange={handleTextChange} />
          </div>
          <div className="">
            <Botao onClick={handleButtonClick} />
          </div>
        </div>
        <hr className="border-4 border-gray-800" />
        <Card
          descricao={cardContent}
          url="https://media.istockphoto.com/id/1221000031/pt/foto/isolated-pink-guava-fruits.jpg?s=2048x2048&w=is&k=20&c=i2G46B0RXP4kOYy1CN4e57EdykeC12abXFbAy5eIuTY="
        />
        <Responsivo />
      </div>
    </div>
  )
}
