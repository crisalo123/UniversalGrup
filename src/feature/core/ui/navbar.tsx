import React, { useState, useEffect } from 'react'
import { Link } from './Link'
import { useLocation } from 'react-router-dom'


const linkNavar =[{
  name: 'VISA ESTUDIO USA',
  to: '/Migrations'
},
{
  name: 'VISA TURISMO USA',
  to: '/Migrations/TurimsUsa'
},
{
  name: 'VISA TURISMO CANADA',
  to: '/Proturs'
},
{
  name: 'VISA TURISMO REINO UNIDO',
  to: '/visa'
},
{
  name: 'VISA TURISMO CHINA',
  to: '/visa'
},
{
  name: 'PERDON MIGRATORIO',
  to: '/visa'
}

]

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false) 

  const locotions = useLocation()
  
  const isLocations = locotions.pathname.includes('/Migrations')


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-gradient-to-r from-[#82a0f5] to-[#7a8799] backdrop-blur-md'
      }`}
    >
      <div className={`${isLocations ? 'max-w-8xl' : 'max-w-7xl'}  mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16`}>
        {/* Logo */}
        <div className="text-2xl font-semibold text-white font-display tracking-wide flex items-center gap-2">
          <Link  className='!no-underline'  to={'/'}> 
           <span className='text-white mx-2'>★</span>
          <span className={isScrolled ? 'text-gray-800' : 'text-white'}>{isLocations ? 'Home' : 'Universal Group'}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!isLocations && ( <nav className="hidden md:flex gap-6 font-medium">
          <Link
            to={"/Migrations"}
            className={`transition duration-300 !no-underline ${
              isScrolled ? 'text-gray-800 hover:text-blue-500' : 'text-white hover:text-yellow-400'
            }`}
          >
            Migrations
          </Link>
         <Link
            to={"/Proturs"}
            className={`transition duration-300  !no-underline ${
              isScrolled ? 'text-gray-800 hover:text-blue-500' : 'text-white hover:text-yellow-400'
            }`}
          >
            ProTours
         </Link>
          <a
            href="#contact"
            className={`transition duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-blue-500' : 'text-white hover:text-yellow-400'
            }`}
          >
            Contacto
          </a>
        </nav>)}
       
       {isLocations && (<nav className="hidden md:flex gap-6 font-semibold  italic text-sm">
          {linkNavar.map((link) => (   
             <Link
            key={link.name}
            to={link.to}
            className={`transition duration-300  !no-underline ${
              isScrolled ? 'text-gray-800 hover:text-blue-500' : 'text-white hover:text-yellow-400'
            }`}
          >
           {link.name}
         </Link> ))
            
          }
          </nav> )}
        

        {/* Mobile Menu Placeholder */}
        <button className="md:hidden text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

