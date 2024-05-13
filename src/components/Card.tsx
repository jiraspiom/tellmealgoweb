import Image from 'next/image'

interface CardTwi {
  descricao: string
  url: string
  cor: string
}

export function Card({ descricao, url, cor }: CardTwi) {
  return (
    <div className="flex items-center justify-center bg-gray-50  p-2 dark:bg-black">
      <div className="max-w-xl rounded-xl border border-gray-200  bg-white p-4 dark:border-gray-800 dark:bg-gray-800">
        <div className="flex justify-between">
          <div className="flex items-center">
            <div className={`rounded-full ${cor}`}>
              <Image
                className="h-11 w-11 rounded-full"
                src="/cat01.png"
                width={88}
                height={88}
                alt="Profile da conta"
              />
            </div>
            <div className="ml-1.5 text-sm leading-tight">
              <span className="block font-bold text-black dark:text-white ">
                .
              </span>
              <span className="block font-normal text-gray-500 dark:text-gray-400">
                .
              </span>
            </div>
          </div>
          <svg
            className="inline-block h-6 w-auto fill-current text-blue-400 dark:text-white"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M17.211,3.39H2.788c-0.22,0-0.4,0.18-0.4,0.4v9.614c0,0.221,0.181,0.402,0.4,0.402h3.206v2.402c0,0.363,0.429,0.533,0.683,0.285l2.72-2.688h7.814c0.221,0,0.401-0.182,0.401-0.402V3.79C17.612,3.569,17.432,3.39,17.211,3.39M16.811,13.004H9.232c-0.106,0-0.206,0.043-0.282,0.117L6.795,15.25v-1.846c0-0.219-0.18-0.4-0.401-0.4H3.189V4.19h13.622V13.004z"></path>
            </g>
          </svg>
        </div>
        <p className="mt-3 block text-xl leading-snug text-black dark:text-white">
          {descricao}
        </p>
        <Image
          className="mt-2 rounded-2xl border border-gray-100 dark:border-gray-700"
          src={url}
          width={288}
          height={288}
        />

        <p className="my-0.5 py-1 text-base text-gray-500 dark:text-gray-400">
          00:00 AM · Jan 01, 0000
        </p>
        <div className="my-1 border border-b-0 border-gray-200 dark:border-gray-600"></div>
        <div className="mt-3 flex text-gray-500 dark:text-gray-400">
          <div className="mr-6 flex items-center">
            <svg className="h-5 w-auto fill-current" viewBox="0 0 24 24">
              <g>
                <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
              </g>
            </svg>
            <span className="ml-3">615</span>
          </div>
          <div className="mr-6 flex items-center">
            <svg className="h-5 w-auto fill-current" viewBox="0 0 24 24">
              <g>
                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
              </g>
            </svg>
            <span className="ml-3">oO people are comment about this</span>
          </div>
        </div>
      </div>
    </div>
  )
}
