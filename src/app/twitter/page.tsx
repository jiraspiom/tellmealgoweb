'use client'

import BotaoTwitter from '@/components/BotaoTwitter'
import CardTwitter from '@/components/CardTwitter'
import { Indicador } from '@/components/Indicador'
import { Responsivo } from '@/components/Responsivo'

import { Texto } from '@/components/Texto'
import { useState } from 'react'

export default function Twitter() {
  const [text, setText] = useState('')
  const [cardContent, setCardContent] = useState('')

  const [cor, setCor] = useState('')

  const handleButtonClick = () => {
    const url = window.location.href
    console.log(url)
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
              <BotaoTwitter onClick={handleButtonClick} novaCor={cor} />
            </div>
            <div className="flex items-center">
              <Indicador onClick={handleIndicadorClick} />
            </div>
          </div>
        </div>
        <hr className="border-4 border-gray-800" />
        <CardTwitter descricao={cardContent} url="" cor="bg-green-500" />
        <Responsivo />
      </div>
    </div>
  )
}
