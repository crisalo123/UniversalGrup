
import { IoLogoWhatsapp } from "react-icons/io";
import playaImg from '@/feature/protours/img/playa.jpg';
import { DetailServices, Testimonials , InformationsNetwors } from "../protours/comoponent";
import { useEffect } from "react";
import { Link } from "../core/ui/Link";
import { Navbar } from "../core/ui";


export const ProtursPage = () => {


  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Desplaza la página hacia la parte superior al cargar
    window.scrollTo(0, 0);
  }, []);



  return (
    <>
      <Navbar />
    <main className="bg-gray-50 bg-fixed min-h-screen" style={{ backgroundImage: `url(${playaImg})` }}>
      {/* Carrusel de Imágenes */}
      <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center">
        <div className="bg-black/50 absolute inset-0 z-0" />
        <div className="relative z-10 text-center text-white space-y-6">
          <h1 className="text-5xl font-bold drop-shadow-lg">Explora el Mundo con Universal Protours</h1>
          <p className="text-lg md:text-2xl">Viajes inolvidables, destinos únicos y experiencias extraordinarias.</p>
          <button  onClick={scrollToServices} className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white px-6 py-3 rounded-lg shadow-lg transition">
            Descubre Nuestros Servicios
          </button>
        </div>
      </section>

      {/* Detalles de Servicios */}
      <DetailServices />
      {/* Testimonios */}
      <section className="py-16   bg-gradient-to-r from-blue-100 to-blue-300">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Testimonios</h2>
       <Testimonials />
      </section>
      {/* Información de Redes */}
      <InformationsNetwors />

      {/* Botón de WhatsApp */}
      <Link
        to="https://wa.me/3202853852"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce"
      >
        <IoLogoWhatsapp className="text-2xl" />
          
      </Link>
    </main>
    </>
  );
};

