'use client'

import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Label } from "@radix-ui/react-label";
import {
  HiOutlinePhoto,
  HiOutlineFaceSmile,
  HiCalendar,
  HiOutlineMapPin,
} from "react-icons/hi2";

const schemaForm = z.object({
  comentario: z.string().max(188, 'max 188 caracter'),
});

type FormProps = z.infer<typeof schemaForm>

export default function TwitterX() {

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

  return (
    <div>
      <div
        className="flex gap-4 border-b border-gray-200 p-4"
      >
        <Avatar>
          <AvatarImage src="https://github.com/abcdefghijk.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <form onSubmit={handleSubmit(onSubmit)}
          className="w-full"
        >
          <Label>Twitter</Label>
          <div>
            <textarea {...register('comentario')}
              className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] text-lg leading-none text-gray-900 outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
              placeholder="What's happening?"
              required
            />
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
              variant={"ghost"}
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
