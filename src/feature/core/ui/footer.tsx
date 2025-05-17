import { CiLocationOn } from "react-icons/ci";
import { Link } from "./Link";
import {  FaInstagram } from "react-icons/fa";

export const Footer = () => {

  return (
    <footer>
        <div className="bg-gray-800  text-white py-4 md:h-40 italic ">
            <div className=" container grid grid-cols-1 md:grid-cols-3 mx-auto text-center mt-5">
                <div className="col-span-1">
                    <h2 className="text-lg font-bold mb-2">Contáctanos</h2>
                    <p className="text-sm !font-medium">Teléfono:  <span className="font-normal">(320) 285-3852</span></p>
                    <p className="text-sm font-medium">Teléfono:  <span className="font-normal">(314) 526-1461</span></p>
                    <p className="text-sm">Email: Universalprotours@gmail.com </p>
                </div>
                <div className="col-span-1">
                    <h2 className="text-lg font-bold mb-2">Ubicación</h2>
                    <p className="text-sm flex items-center justify-center">
                        <CiLocationOn className="mr-1" />
                        Calle 123 #45-67, Bogota, Colombia
                    </p>
               <p className="text-sm">© 2025 Universal Protours. Todos los derechos reservados.</p>
           
            </div>
            <div className="col-span-1">
                <h2 className="text-lg font-bold mb-2">Síguenos</h2>
                <div className="flex justify-center "> 
                   <Link className="text-white flex hover:text-primary-300  !no-underline" target="_targetBlak" to={'https://www.instagram.com/universalprotours/?igsh=NTRkbmxxZmZ5Ym5t&utm_source=qr#'}>
                   
                   <FaInstagram className="text-white mt-[1.1px] h-5 w-5 hover:text-primary-300" />
                   <span className="text-white mx-2 hover:text-primary-200">Instagram </span>
                   </Link>
                </div>

            </div>
            </div>
        </div>
    </footer>
  )
}

