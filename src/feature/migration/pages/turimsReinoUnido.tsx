import { FaPassport, FaRegClock, FaPlaneDeparture } from "react-icons/fa";
import  imgReinoUnido from '@/feature/migration/img/turimsReinoUnido.jpg'
import { CardInitial } from "../Component/CardInitial";

const testimonios = [  {
             id:1,
            nombre: "Andrea perez",
            historia: "¡Mi viaje a Londres fue un sueño hecho realidad! Universal Protours me acompañó en todo el proceso.",
            foto: "https://randomuser.me/api/portraits/women/45.jpg"
          },
          { 
            id:2,
            nombre: "Oscar valencia",
            historia: "La asesoría fue clara y personalizada. Disfruté cada momento en el Reino Unido.",
            foto: "https://randomuser.me/api/portraits/men/36.jpg"
          },
          { 
            id:3,
            nombre: "Sebastian Gómez",
            historia: "Gracias a Universal Protours, pude visitar a mi familia y conocer lugares increíbles.",
            foto: "https://randomuser.me/api/portraits/women/68.jpg"
          }]

export const TurimsReinoUnido = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 pt-0 pb-16">
      {/* Hero */}
     
       <CardInitial 
       backgroundImage={imgReinoUnido}
         buttonshow={false}
         title="¡Descubre el Reino Unido con tu Visa de Turismo!"
         subtitle=" Vive la historia, cultura y paisajes únicos de UK. Nosotros te guiamos en cada paso."
      />

      {/* Tipos de Visa */}
      <section className="max-w-4xl mx-auto mt-12 mb-12 px-6 py-10 rounded-3xl bg-white/90 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center font-montserrat">
          Tipos de visas de turismo al Reino Unido
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <FaPassport className="text-blue-700 text-4xl mb-3" />
            <h3 className="font-semibold mb-2 text-blue-700">Visa de visitante estándar</h3>
            <p className="text-gray-700 text-sm">Para turismo, negocios o visitas familiares (hasta 6 meses).</p>
          </div>
          <div className="flex flex-col items-center">
            <FaRegClock className="text-blue-700 text-4xl mb-3" />
            <h3 className="font-semibold mb-2 text-blue-700">Visa de visitante larga duración</h3>
            <p className="text-gray-700 text-sm">Para estancias más largas (2, 5 o 10 años).</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPlaneDeparture className="text-blue-700 text-4xl mb-3" />
            <h3 className="font-semibold mb-2 text-blue-700">Visa de tránsito</h3>
            <p className="text-gray-700 text-sm">Para viajes de conexión en el Reino Unido (hasta 48 horas).</p>
          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="max-w-3xl mx-auto mb-16 px-6 py-10 rounded-3xl bg-blue-50/80 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center font-montserrat">
          Requisitos para obtener la visa de turismo al Reino Unido
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Tener un pasaporte válido por al menos 6 meses.</li>
          <li>No tener condenas penales o relacionadas con la inmigración.</li>
          <li>Convencer a un oficial de inmigración de que tiene lazos que le llevarán de vuelta a su país de origen.</li>
          <li>Convencer a un oficial de inmigración de que abandonará el Reino Unido al final de su estancia.</li>
          <li>Disponer de dinero suficiente para su estancia.</li>
        </ul>
      </section>

      {/* Nuestro Proceso en 4 Pasos */}
      <section className="max-w-4xl mx-auto mb-20 px-4 py-12 rounded-3xl bg-white/90 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-10 font-montserrat">
          Nuestro Proceso en 4 Sencillos Pasos
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="bg-blue-700 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">1</span>
            <h3 className="font-semibold mb-2 text-blue-700">Evaluación</h3>
            <p className="text-gray-700 text-sm">Analizamos tu perfil y te orientamos sobre los requisitos y posibilidades.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-blue-700 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">2</span>
            <h3 className="font-semibold mb-2 text-blue-700">Documentación</h3>
            <p className="text-gray-700 text-sm">Te ayudamos a reunir y organizar todos los documentos necesarios.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-blue-700 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">3</span>
            <h3 className="font-semibold mb-2 text-blue-700">Solicitud</h3>
            <p className="text-gray-700 text-sm">Presentamos tu solicitud y te preparamos para la entrevista.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-blue-700 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">4</span>
            <h3 className="font-semibold mb-2 text-blue-700">¡Viaja!</h3>
            <p className="text-gray-700 text-sm">Recibe tu visa y prepárate para disfrutar el Reino Unido.</p>
          </div>
        </div>
      </section>

      {/* Historias de Éxito */}
      <section className="max-w-5xl mx-auto mb-20 px-4 py-12 rounded-3xl bg-gradient-to-r from-blue-100 to-blue-300 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-10 font-montserrat">
          Historias de Éxito de Nuestros Viajeros
        </h2>
        <div className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory">
        { testimonios.map((t, idx) => (
            <div
              key={idx}
              className="min-w-[300px] max-w-xs bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center snap-center transition hover:scale-105"
            >
              <img
                src={t.foto}
                alt={t.nombre}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-200 mb-4"
              />
              <p className="italic text-gray-700 mb-4 text-center">"{t.historia}"</p>
              <span className="font-bold text-blue-800">{t.nombre}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="flex justify-center">
        <a
          href="https://wa.me/3202853852"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition"
        >
          ¡Solicita tu asesoría para tu visa al Reino Unido!
        </a>
      </section>
    </main>
  )
}

