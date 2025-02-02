import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-400 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold">
          Evento
        </a>

        {/* Menu pour desktop */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#" className="hover:underline">
              Accueil
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Trouver un événement
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Connexion
            </a>
          </li>
        </ul>

        
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-center">
          <li>
            <a href="#" className="block py-2 hover:bg-blue-700">
              Accueil
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:bg-blue-700">
            Trouver un événement
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 hover:bg-blue-700">
              Connexion
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
