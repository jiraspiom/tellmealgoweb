'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'

import {
  HiOutlinePhoto,
  HiOutlineFaceSmile,
  HiCalendar,
  HiOutlineMapPin,
} from 'react-icons/hi2'
import { useRef } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import { Label } from '@radix-ui/react-label'

const schemaForm = z.object({
  comentario: z.string().max(188, 'max 188 caracter'),
})

type FormProps = z.infer<typeof schemaForm>

export default function TwitterX() {
  const textareaRef = useRef(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: 'onSubmit',
    resolver: zodResolver(schemaForm),
  })

  const onSubmit = (data: FormProps) => {
    console.log(data)
  }

  // const autoresize = () => {
  //   const textarea = textareaRef.current;
  //   if (textarea) {
  //     textarea.style.height = 'auto';
  //     textarea.style.height = `${textarea.scrollHeight}px`;
  //   }
  // };

  return (
    <div>
      <div className="flex gap-4 border-b border-gray-200 p-4">
        <Avatar>
          <AvatarImage src="https://github.com/abcdefghijk.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <Label>Twitter</Label>
          <div className="autoresize">
            <textarea
              {...register('comentario')}
              // className="border-none box-border w-full bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] text-lg leading-none text-gray-900 outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
              className="resize-none border-none focus:outline-none bg-transparent w-full p-2"
              placeholder="What's happening?"
              // ref={textareaRef}
              // onInput={autoresize}
            />
            {/* <AutoResizeTextarea {...register('comentario')}/> */}
            {errors.comentario && <p>{errors.comentario.message}</p>}
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-4">
              <div>
                <HiOutlinePhoto className="w-5 h-5 inline-flex" />
              </div>
              <div>
                <HiOutlineFaceSmile className="w-5 h-5 inline-flex" />
              </div>
              <div>
                <HiCalendar className="w-5 h-5 inline-flex" />
              </div>
              <div>
                <HiOutlineMapPin className="w-5 h-5 inline-flex" />
              </div>
            </div>

            <Button
              variant={'ghost'}
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 font-medium leading-none text-white disabled:opacity-50"
            >
              Nice
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
