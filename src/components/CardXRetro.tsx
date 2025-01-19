'use client'
import Image from 'next/image'
import { format } from 'date-fns'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { postLike } from '@/utils/actions'
import type { DadoSegredo } from '@/lib/interfaces'

interface CardXProps {
  segredo: DadoSegredo
}

//   id: string
//   descricao: string
//   url: string
//   cor: string
//   data?: string
//   coracao: string

export default function CardXRetro({ segredo }: CardXProps) {
  const clicou = async (id: string) => {
    await postLike(id)
  }
  return (
    <Card className="retro-card mb-4 min-w-full ">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Avatar className={`mr-2 ${segredo.cor} rounded-full p-2`}>
            <AvatarImage src={'/cat01.png'} className="h-12 w-12" />
          </Avatar>
          <p className="my-0.5 py-1  text-gray-100 text-sm dark:text-gray-400">
            {segredo.dataAt && format(segredo.dataAt, 'hh:mm a · MMM dd, yyyy')}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mt-3 block text-xl leading-snug text-gray-100 dark:text-white mb-2">
          {segredo.segredo}
        </p>
        <div className="flex justify-center w-[388p]">
          <Image
            className="rounded-sm"
            src={segredo.urlImage ? segredo.urlImage : 'www'}
            width={388}
            height={388}
            alt="gatos"
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col">
          <div className="my-1 border border-b-0 border-gray-200 dark:border-gray-600" />

          <div className="mt-3 flex text-gray-100 dark:text-gray-400">
            <div className="mr-6 flex items-center">
              <Button variant={'ghost'} onClick={() => clicou(segredo.id)}>
                💣 {segredo.coracao ? segredo.coracao : 0}
              </Button>
              {/* <span className=""> {coracao ? coracao : 0} </span> */}
            </div>
            <div className="mr-6 flex items-center">
              💀<span className="ml-3">oO people are comment about this</span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
