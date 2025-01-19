'use client'
import Image from 'next/image'
import { format } from 'date-fns'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

interface CardXProps {
  descricao: string
  url: string
  cor: string
  data?: string
}

export default function CardX({ descricao, url, cor, data }: CardXProps) {
  return (
    <Card className="mb-4  min-w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Avatar className={`mr-2 ${cor} rounded-full p-2`}>
            <AvatarImage src={'/cat01.png'} className="h-12 w-12" />
          </Avatar>
          <p className="my-0.5 py-1  text-gray-500 text-sm dark:text-gray-400">
            {data && format(data, 'hh:mm a · MMM dd, yyyy')}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mt-3 block text-xl leading-snug text-gray-600 dark:text-white mb-2">
          {descricao}
        </p>
        <div className="flex justify-center w-[388p]">
          <Image
            className="rounded-sm"
            src={url}
            width={388}
            height={388}
            alt="gatos"
          />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col">
          <div className="my-1 border border-b-0 border-gray-200 dark:border-gray-600" />

          <div className="mt-3 flex text-gray-500 dark:text-gray-400">
            <div className="mr-6 flex items-center">
              ❤️
              <span className="ml-3">615</span>
            </div>
            <div className="mr-6 flex items-center">
              💬<span className="ml-3">oO people are comment about this</span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
