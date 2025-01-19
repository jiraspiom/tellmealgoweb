'use server'

import Segredos from '@/components/Segredos'
import { getData } from '@/utils/actions'

export default async function Home() {
  const responseData = await getData()

  return <Segredos segredos={responseData} />
}
