import React, { useState, useEffect } from "react";
import { Link } from "./Link";
import { useLocation } from "react-router-dom";
import { WhatsAppComponent } from "./whatsAppComponent";

const linkNavar = [
  { name: "VISA ESTUDIO USA", to: "Migrations" },
  { name: "VISA TURISMO USA", to: "Migrations/TurimsUsa" },
  { name: "VISA TURISMO CANADA", to: "Migrations/TurimsCanada" },
  { name: "VISA TURISMO REINO UNIDO", to: "Migrations/TurimsReinoUnido" },
  { name: "VISA TURISMO CHINA", to: "/*" },
  { name: "PERDON MIGRATORIO", to: "/*" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isLocations = location.pathname.includes("/Migrations");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cierra el menú móvil al navegar
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 md:transition-all md:duration-300 
        ${
          isScrolled || menuOpen
            ? "bg-white shadow-md"
            : "bg-gradient-to-r from-[#82a0f5] to-[#7a8799] backdrop-blur-md"
        }`}
    >
      <div
        className={`${isLocations ? "max-w-8xl" : "max-w-7xl"} mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16`}
      >
        {/* Logo */}
        <div className="text-2xl font-semibold text-white font-display md:tracking-wide flex items-center gap-2">
          <Link className="!no-underline" to={"/"}>
            {/* <span className={`text-white  mx-2 `}>★</span> */}
            <span className={isScrolled ? "text-gray-800" : "text-white"}>
              {isLocations ? "HOME" : "UNIVERSAL GROUP"}
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isLocations && (
          <nav className="hidden md:flex gap-6 font-medium">
            <Link
              to={"Migrations"}
              className={`transition duration-300 !no-underline ${
                isScrolled
                  ? "text-gray-800 hover:text-blue-500"
                  : "text-white hover:text-red-400"
              }`}
            >
              Migrations
            </Link>
            <Link
              to={"Proturs"}
              className={`transition duration-300  !no-underline ${
                isScrolled
                  ? "text-gray-800 hover:text-blue-500"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              ProTours
            </Link>
            <Link
              to={"Contact"}
              className={`transition duration-300 ${
                isScrolled
                  ? "text-gray-800 hover:text-blue-500"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              Contacto
            </Link>
          </nav>
        )}

        {isLocations && (
          <nav className="hidden md:flex gap-6 font-semibold !font-pacifico text-sm">
            {linkNavar.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`transition duration-300  !no-underline ${
                  isScrolled
                    ? "text-gray-800  hover:text-blue-500"
                    : "text-white hover:text-red-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}

        {/* Mobile Menu Button */}
        <WhatsAppComponent
          classNameLogo="text-xl"
          className="md:hidden fixed  right-16 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 "
        />

        <button
          className="md:hidden text-white focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/60 z-40 flex md:hidden">
            <div className="bg-white w-full h-full shadow-lg p-8 flex flex-col gap-6 animate-slide-in-right">
              <button
                className="self-end mb-4 text-gray-700"
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              {!isLocations ? (
                <>
                  <Link
                    to={"/Migrations"}
                    className="text-gray-800 hover:text-blue-500 py-2 "
                  >
                    Migrations
                  </Link>
                  <Link
                    to={"/Proturs"}
                    className="text-gray-800 hover:text-blue-500 py-2"
                  >
                    ProTours
                  </Link>
                  <Link
                    to={"/Contact"}
                    className="text-gray-800 hover:text-blue-500 py-2"
                  >
                    Contact
                  </Link>
                </>
              ) : (
                linkNavar.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    className="text-gray-800 hover:text-blue-500 py-2"
                  >
                    {link.name}
                  </Link>
                ))
              )}
            </div>
            {/* Clic fuera del menú para cerrar */}
            <div className="flex-1" onClick={() => setMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
};
