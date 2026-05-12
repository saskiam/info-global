"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className="
        sticky top-0 z-50 w-full
        border-b border-gray-200
        bg-white/80
        backdrop-blur-md
        shadow-sm
      "
    >
     
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo tipo link */}
        <Link
          href="/"
          className="text-2xl font-black tracking-wide text-orange-700"
        >
          INFOGLOBAL
        </Link>

        {/* Menú para vista desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link
              href="/#ciencia"
              className="
                text-lg font-medium text-gray-700
                transition hover:text-orange-700
              "
            >
              Ciencia
            </Link>
          </li>

          <li>
            <Link
              href="/#deportes"
              className="
                text-lg font-medium text-gray-700
                transition hover:text-orange-700
              "
            >
              Deportes
            </Link>
          </li>

          <li>
            <Link
              href="/#tecnologia"
              className="
                text-lg font-medium text-gray-700
                transition hover:text-orange-700
              "
            >
              Tecnología
            </Link>
          </li>
        </ul>

        {/* Botón para vista mobile, menú desplegable */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          className="
            flex h-11 w-11 items-center justify-center
            rounded-lg bg-orange-700 text-white
            transition active:scale-95 md:hidden
          "
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mostrar menú hasta que se abra */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/40
          transition-opacity duration-300
          md:hidden
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={closeMenu}
      />

      <aside
        className={`
          fixed top-0 right-0 z-50
          h-screen w-72
          bg-white
          shadow-2xl
          transition-transform duration-300
          md:hidden
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-xl font-bold text-orange-700">
            INFOGLOBAL
          </h2>

          <button
            onClick={closeMenu}
            className="
              flex h-10 w-10 items-center justify-center
              rounded-lg bg-gray-100
            "
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="flex flex-col p-4">
          <li>
            <Link
              href="/#ciencia"
              onClick={closeMenu}
              className="
                block rounded-lg px-4 py-4
                text-lg font-medium text-gray-700
                transition hover:bg-orange-50
                hover:text-orange-700
              "
            >
              Ciencia
            </Link>
          </li>

          <li>
            <Link
              href="/#deportes"
              onClick={closeMenu}
              className="
                block rounded-lg px-4 py-4
                text-lg font-medium text-gray-700
                transition hover:bg-orange-50
                hover:text-orange-700
              "
            >
              Deportes
            </Link>
          </li>

          <li>
            <Link
              href="/#tecnologia"
              onClick={closeMenu}
              className="
                block rounded-lg px-4 py-4
                text-lg font-medium text-gray-700
                transition hover:bg-orange-50
                hover:text-orange-700
              "
            >
              Tecnología
            </Link>
          </li>
        </ul>
      </aside>
    </header>
  );
}