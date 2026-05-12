export default function NotFound() {
  return (
    
    <section className="flex min-h-[67vh] items-center justify-center bg-white">
      {/* pagina 404  */}
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-gray-700 lg:text-9xl">
            404
          </h1>

          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-500 md:text-4xl">
            ¡Lo sentimos!
          </p>

          <p className="mb-4 text-lg font-light text-gray-400">
            La página que estás buscando no existe, pero puedes seguir
            navegando
          </p>
        </div>
      </div>
    </section>
  );
}