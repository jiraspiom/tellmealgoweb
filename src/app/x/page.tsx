import TwitterX from '@/components/Twitter'

export default function X() {
  console.log('object')
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-xl mx-auto border-t border-l border-r border-gray-200">
        <TwitterX />
      </div>
    </main>
  )
}

//justify-center ajusta no centro da tela x
// items-center ajusta no centro da tela y
