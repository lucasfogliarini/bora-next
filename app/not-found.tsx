export default function NotFound() {
    return (
      <>
        <div className="text-center">
            <p className="text-base font-semibold text-indigo-600">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Página não encontrada</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Desculpe, nós não encontramos a página que você está procurando.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Voltar para a Home
              </a>
              <a href="https://wa.me/51992364249" className="text-sm font-semibold text-gray-900">
                Contatar o suporte <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
      </>
    )
  }
  