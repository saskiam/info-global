
export default function Footer() {
    return (
      <footer
  className="
    
    border-t border-white/20
    bg-white/90
    backdrop-blur-md
    shadow-2xl
  "
>
  <div className="mx-auto max-w-screen-xl px-4 py-8 text-center md:px-8 lg:px-10">
    
    {/* Logo */}
    <a
      href="#"
      className="flex items-center justify-center text-2xl font-semibold text-orange-700"
    >
      INFOGLOBAL
    </a>

    {/* Descripción */}
    <p className="my-6 text-gray-700">
      El lugar donde encuentras las últimas noticias.
    </p>

    {/* Redes sociales */}
    <div className="mt-4 flex justify-center gap-5">
      
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex h-11 w-11 items-center justify-center
          rounded-full
          bg-white/30
          backdrop-blur-md
          border border-white/20
          text-sm font-bold text-blue-700
          shadow-md
          transition-all duration-300
          hover:scale-110 hover:bg-blue-100/40
        "
      >
        FB
      </a>

      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex h-11 w-11 items-center justify-center
          rounded-full
          bg-white/30
          backdrop-blur-md
          border border-white/20
          text-sm font-bold text-black
          shadow-md
          transition-all duration-300
          hover:scale-110 hover:bg-gray-200/40
        "
      >
        X
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex h-11 w-11 items-center justify-center
          rounded-full
          bg-white/30
          backdrop-blur-md
          border border-white/20
          text-sm font-bold text-pink-700
          shadow-md
          transition-all duration-300
          hover:scale-110 hover:bg-pink-100/40
        "
      >
        IG
      </a>
    </div>

    {/* Copyright */}
    <span className="mt-6 block text-sm text-gray-700">
      © 2026{" "}
      <a href="#" className="font-medium hover:underline">
        InfoGlobal™
      </a>
      . Todos los derechos reservados.
    </span>
  </div>
</footer>
    )
}