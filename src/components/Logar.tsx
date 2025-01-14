export function CardLogar() {
  return (
    <div>
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-8">
        <form className="space-y-6" action="#">
          <h5 className="text-center text-xl font-medium text-gray-900 dark:text-white">
            LOGAR
          </h5>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm
               text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50
                   focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800
                    dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lembre me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Recuperar senha?
            </a>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium
             text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Logar na sua conta
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Sem registro?{' '}
            <a
              href="#"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Criar conta
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
