"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        sticky top-0 z-50 w-full
        bg-white/70
        backdrop-blur-md
        border-b border-white/20
        shadow-lg
      "
    >
      {/* Navegación principal */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        
        {/* Logo */}
        <div className="text-xl font-bold text-orange-700">
          INFOGLOBAL 
        </div>

        {/* Menú desktop */}
        <ul className="hidden gap-6 md:flex text-xl">
          <li className="cursor-pointer text-gray-800 hover:text-orange-700 transition">
             <Link
                href="/#nacionales"
                className="
                  cursor-pointer
                  text-gray-800
                  hover:text-orange-700
                  transition
                "
              >
                Nacionales
              </Link>
          </li>
          <li className="cursor-pointer text-gray-800 hover:text-orange-700 transition">
            <Link
                href="/#deportes"
                className="
                  cursor-pointer
                  text-gray-800
                  hover:text-orange-700
                  transition
                "
              >
                Deportes
              </Link>
          </li>
          <li className="cursor-pointer text-gray-800 hover:text-orange-700 transition">
            <Link
                href="/#tecnologia"
                className="
                  cursor-pointer
                  text-gray-800
                  hover:text-orange-700
                  transition
                "
              >
                Tecnología
              </Link>
          </li>
        </ul>

        {/* Botón para menú mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="
            rounded-lg
            bg-orange-700
            backdrop-blur-md
            p-2
            md:hidden
            border border-white/80
          "
        >
          ☰
        </button>
      </nav>

      {/* Menú móvil desplegable */}
      {open && (
        <div
          className="
            md:hidden
            px-4 pb-4
            backdrop-blur-md
            bg-white/20
          "
        >
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer text-gray-700 hover:text-orange-700">
              Nacionales
            </li>
            <li className="cursor-pointer text-gray-700 hover:text-orange-700">
              Deportes
            </li>
            <li className="cursor-pointer text-gray-700 hover:text-orange-700">
              Tecnología
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}