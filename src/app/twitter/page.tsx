'use client'
import { Botao } from '@/components/Botao'
import { Card } from '@/components/Card'
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
    <div>
      <Texto value={text} onChange={handleTextChange} />
      <Botao onClick={handleButtonClick} />
      <Card descricao={cardContent} url="www.terra.com.br" />
    </div>
  )
}
