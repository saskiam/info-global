
export default function Navbar() {
    return (
          <header className="sticky top-0 z-50 bg-white shadow-sm w-full" >
            {/* Navegación principal con logotipo y enlaces */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="text-xl font-bold text-gray-800">
          InfoGlobal HN
        </div>
        <ul className="hidden gap-6 md:flex">
          <li className="cursor-pointer text-gray-600 hover:text-black">
            Nacionales
          </li>
          <li className="cursor-pointer text-gray-600 hover:text-black">
            Deportes
          </li>
          <li className="cursor-pointer text-gray-600 hover:text-black">
            Tecnología
          </li>
        </ul>
        {/* Botón solamente visible en mobile */}
        <button className="rounded-lg bg-gray-100 p-2 md:hidden">
          ☰
        </button>
      </nav>
    </header>
  );
    
}