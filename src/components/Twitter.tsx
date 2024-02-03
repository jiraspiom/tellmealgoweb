'use client'

import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

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
      <h2>TWITTER</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <textarea {...register('comentario')}
          className="text-gray-900"
          />
          {errors.comentario && <p>{errors.comentario.message}</p>}
        </div>
        <div>
          <button type="submit">Nice comment</button>
        </div>
      </form>
    </div>
  )
}
