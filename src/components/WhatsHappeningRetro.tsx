'use client'
import { postData } from '@/utils/actions'
import { useState } from 'react'
import BotaoTwitter from './BotaoTwitter'
import { Indicador } from './Indicador'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

export default function WhatsHappeningRetro() {
  const [cor, setCor] = useState('')

  const teste = async (formData: FormData) => {
    const texto = formData.get('texto')?.toString() || ''

    const response = await postData({ segredo: texto, cor })

    if (response) {
      console.log(';)')
    }
  }

  const handleIndicadorClick = (corNova: string) => {
    setCor(corNova)
  }

  return (
    <form action={teste}>
      <Card className="retro-card mb-6">
        <CardContent>
          <div className="">
            <div className="mt-4 ">
              <Textarea
                name="texto"
                className="retro-text-area resize-none overflow-hidden min-h-[40px] "
                // className=" col-span-5 row-span-2 w-full bg-transparent text-lg font-medium text-gray-400"
                placeholder="What's happening?"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <div className="flex items-center">
                <BotaoTwitter novaCor={cor} />
              </div>

              <div className="flex items-center ">
                <Indicador onClick={handleIndicadorClick} />
              </div>
            </div>

            <hr className="border-1 border-red-100 " />
          </div>
        </CardFooter>
      </Card>
    </form>
  )
}
