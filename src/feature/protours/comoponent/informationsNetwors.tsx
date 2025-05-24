import { Link } from "@/feature/core/ui";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import women from '@/feature/protours/img/chica.png'
import { useEffect, useState } from "react";

export const InformationsNetwors = () => {

  const [isResponsive, setIsResponsive] = useState(window.innerWidth < 768);
  
  
   useEffect(() => {
      const handleResize = () => {
        setIsResponsive(window.innerWidth < 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const img = isResponsive ? 'block' : women;


  return (
     <section
      className=" bg-black/40  py-20 px-6 bg-no-repeat bg-right   w-full bg-opacity-50 text-white"
     style={{ backgroundImage: `url(${img})` }}
     
    >
        <h2 className="text-3xl font-bold text-center mb-10 ">Síguenos en Redes Sociales Proturs</h2>
        <div className="flex justify-center space-x-6">
          {[
            { name: 'Facebook', icon: <FaFacebook />, link: 'https://web.facebook.com/UniversalprotoursOficial?mibextid=wwXIfr&_rdc=1&_rdr#' },
            { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/universalprotours/?igsh=NTRkbmxxZmZ5Ym5t&utm_source=qr#' },
          ].map((social, index) => (
            <Link
              key={index}
              to={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-lg font-medium text-gray-700 hover:text-blue-500 transition"
            >
              <span className="text-4xl text-white">{social.icon}</span>
              <span className="!text-white">{social.name}</span>
            </Link>
          ))}
        </div>
      </section>
  )
}

