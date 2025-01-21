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
      <Card className="retro-card mb-2">
        <CardContent>
          <div className="">
            <div className="flex items-center mt-1 -ml-5">
              <Indicador onClick={handleIndicadorClick} />
            </div>
            <div className="mt-2 -mx-4">
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
          <div className="flex items-center -m-4">
            <BotaoTwitter novaCor={cor} />
          </div>

          {/* <hr className="border-1 border-red-100 " /> */}
        </CardFooter>
      </Card>
    </form>
  )
}
