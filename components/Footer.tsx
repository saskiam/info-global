import FBIcon from "./icons/FBIcon";
import IGIcon from "./icons/IGIcon";
import XIcon from "./icons/XIcon";


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
  <div className="mx-auto max-w-7xl px-4 py-8 text-center md:px-8 lg:px-10">
    
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
      
      <FBIcon action="follow"/>

      <IGIcon />

      <XIcon action="follow"/>

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