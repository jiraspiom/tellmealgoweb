import { postData } from '@/utils/api'
import { useState } from 'react'
import BotaoTwitter from './BotaoTwitter'
import { Indicador } from './Indicador'

export default function WhatsHappening() {
  const [cor, setCor] = useState('')

  const teste = async (formData: FormData) => {
    const texto = formData.get('texto')?.toString() || ''

    const response = await postData({ segredo: texto, cor })
    console.log('dados enviado', response)
  }

  const handleIndicadorClick = (corNova: string) => {
    setCor(corNova)
  }

  return (
    <form action={teste}>
      <div className="">
        <div className="mb-2 mt-2 px-2 pt-2">
          <textarea
            name="texto"
            className=" col-span-5 row-span-2 w-full bg-transparent text-lg font-medium text-gray-400"
            placeholder="What's happening?"
          />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="flex items-center">
          <BotaoTwitter novaCor={cor} />
        </div>

        <div className="flex items-center ">
          <Indicador onClick={handleIndicadorClick} />
        </div>
      </div>

      <hr className="border-4 border-gray-100 " />
    </form>
  )
}
