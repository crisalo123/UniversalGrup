import studentImg from "@/feature/migration/img/estuden.jpg";
import { FaPassport, FaUniversity, FaGlobeAmericas, FaQuoteLeft } from "react-icons/fa";

const testimonios = [
  {
    nombre: "María López",
    historia: "Gracias a Universal Migrations, ahora estudio en Nueva York y mi inglés ha mejorado muchísimo. ¡Una experiencia inolvidable!",
    foto: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    nombre: "Carlos Pérez",
    historia: "El acompañamiento fue total, desde la visa hasta la llegada. Hoy tengo nuevas oportunidades en EE.UU.",
    foto: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    nombre: "Ana Torres",
    historia: "Nunca imaginé que aprender inglés en el extranjero fuera tan fácil. ¡Gracias por ayudarme a cumplir mi sueño!",
    foto: "https://randomuser.me/api/portraits/women/65.jpg"
  }
]

export const MigrationsPage = () => {
  return (
    <>
     
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-10 pb-16">
        {/* Hero */}
          <section
        className="relative bg-cover bg-center text-white min-h-[80vh] flex items-center justify-center px-6"
        style={{ backgroundImage: `url(${studentImg})` }}
      >
        <div className="bg-black mt-5 md:mt-0 bg-opacity-60 p-10 rounded-lg max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight ">
            ¿Por Qué Estudiar Inglés en EE.UU. con Nosotros?
          </h1>
          <p className="text-xl mb-6">
            ¡Estudia Inglés Intensivo en Estados Unidos y Abre las Puertas a un Futuro Brillante!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-semibold text-lg transition">
            Quiero más información
          </button>
        </div>
      </section>

       <section className="max-w-5xl mx-auto mt-20 mb-20 px-4 py-12 rounded-3xl bg-white/80 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-8">
            ¿Por qué tramitar tu Visa de Estudiante con Universal Migrations?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FaPassport className="text-blue-600 text-5xl mb-4" />
              <h3 className="font-bold text-lg mb-2">Asesoría Personalizada</h3>
              <p className="text-gray-700">Te guiamos paso a paso en todo el proceso de solicitud y requisitos para tu visa de estudiante.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaUniversity className="text-blue-600 text-5xl mb-4" />
              <h3 className="font-bold text-lg mb-2">Acceso a Instituciones Top</h3>
              <p className="text-gray-700">Te ayudamos a elegir las mejores escuelas y universidades en EE.UU. según tus metas.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaGlobeAmericas className="text-blue-600 text-5xl mb-4" />
              <h3 className="font-bold text-lg mb-2">Experiencia Internacional</h3>
              <p className="text-gray-700">Vive una experiencia única, mejora tu inglés y amplía tus oportunidades profesionales.</p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="https://wa.me/3202853852"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition"
            >
              ¡Quiero asesoría para mi visa!
            </a>
          </div>
        </section>

        {/* Historias de Éxito */}
        <section className="max-w-5xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
            Historias de Éxito de Nuestros Estudiantes
          </h2>
          {/* Carrusel simple */}
          <div className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory">
            {testimonios.map((t, idx) => (
              <div
                key={idx}
                className="min-w-[320px] max-w-xs bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center snap-center transition hover:scale-105"
              >
                <img
                  src={t.foto}
                  alt={t.nombre}
                  className="w-24 h-24 rounded-full object-cover border-4 border-blue-200 mb-4"
                />
                <FaQuoteLeft className="text-blue-300 text-2xl mb-2" />
                <p className="italic text-gray-700 mb-4">"{t.historia}"</p>
                <span className="font-bold text-blue-800">{t.nombre}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-blue-700 mt-10 font-semibold font-pacifico">
            Tú También Puedes Ser Nuestro Próximo Caso de Éxito
          </p>
        </section>
      </main>
     
    </>
  )
}

