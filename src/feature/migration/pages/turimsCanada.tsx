

import imgCanada from '@/feature/migration/img/img_canada.avif'
import { CardInitial } from '../Component/CardInitial'

const testimonios = [
  {
    nombre: "Laura Gómez",
    historia: "Gracias a Universal Protours, mi viaje a Canadá fue increíble. El proceso fue claro y rápido, ¡lo recomiendo totalmente!",
    foto: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    nombre: "Andrés Martínez",
    historia: "Me ayudaron con todos los documentos y la asesoría fue personalizada. ¡Ya estoy planeando mi segundo viaje!",
    foto: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    nombre: "Sofía Torres",
    historia: "La atención y el acompañamiento fueron excelentes. Canadá superó mis expectativas.",
    foto: "https://randomuser.me/api/portraits/women/65.jpg"
  }
]

export const TurimsCanada = () => {
  return (
   
   
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 pt-4 pb-16">
      {/* Hero */}
     
      <CardInitial
        backgroundImage={imgCanada}
        buttonshow={false}
        title="¡Descubre Canadá con tu Visa de Turismo!"
        subtitle="Vive la experiencia canadiense: naturaleza, cultura y aventura te esperan. Te ayudamos a lograrlo."
      />

      {/* Información principal */}
      <section className="max-w-3xl mt-10 mx-auto mb-16 px-6 py-10 rounded-3xl bg-white/80 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center font-montserrat">
          Requisitos para obtener la visa de turismo a Canadá
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Tener un pasaporte válido por al menos 6 meses.</li>
          <li>No tener condenas penales o relacionadas con la inmigración.</li>
          <li>Convencer a un oficial de inmigración de que tiene lazos que le llevarán de vuelta a su país de origen.</li>
          <li>Convencer a un oficial de inmigración de que abandonará Canadá al final de su estancia.</li>
          <li>Disponer de dinero suficiente para su estancia (alrededor de <span className="font-semibold">$2,000-$5,000 CAD</span> por persona).</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-blue-700 mb-2">Tipos de visas de turismo:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Visa de visitante: una entrada</li>
              <li>Visa de visitante: múltiples entradas</li>
              <li>Visa de tránsito</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-blue-700 mb-2">Costos asociados:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Tarifa de solicitud: <span className="font-semibold">$100 CAD</span> por persona</li>
              <li>Tarifa de biométricos: <span className="font-semibold">$85 CAD</span> por persona</li>
              <li>Tarifa de procesamiento del pasaporte: <span className="font-semibold">$45 CAD</span> por persona <span className="text-gray-500">(opcional)</span></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-6">
          <h3 className="font-semibold text-blue-700 mb-2">Duración de la visa:</h3>
          <p className="text-gray-700">
            La duración varía según el caso, pero generalmente es de hasta <span className="font-semibold">6 meses</span>.
          </p>
        </div>
      </section>

      {/* Nuestro Proceso en 4 Sencillos Pasos */}
      <section className="max-w-4xl mx-auto mb-20 px-4 py-12 rounded-3xl bg-white/90 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-10 font-montserrat">
          Nuestro Proceso en 4 Sencillos Pasos
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">1</span>
            <h3 className="font-semibold mb-2 text-blue-700">Evaluación</h3>
            <p className="text-gray-700 text-sm">Analizamos tu perfil y te orientamos sobre los requisitos y posibilidades.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">2</span>
            <h3 className="font-semibold mb-2 text-blue-700">Documentación</h3>
            <p className="text-gray-700 text-sm">Te ayudamos a reunir y organizar todos los documentos necesarios.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">3</span>
            <h3 className="font-semibold mb-2 text-blue-700">Solicitud</h3>
            <p className="text-gray-700 text-sm">Presentamos tu solicitud y te preparamos para la entrevista.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">4</span>
            <h3 className="font-semibold mb-2 text-blue-700">¡Viaja!</h3>
            <p className="text-gray-700 text-sm">Recibe tu visa y prepárate para disfrutar Canadá.</p>
          </div>
        </div>
      </section>

      {/* Historias de Éxito */}
      <section className="max-w-5xl mx-auto mb-20 px-4 py-12 rounded-3xl bg-gradient-to-r from-blue-100 to-blue-300 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-10 font-montserrat">
          Historias de Éxito de Nuestros Viajeros
        </h2>
        <div className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory">
          {testimonios.map((t, idx) => (
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
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition"
        >
          ¡Solicita tu asesoría para tu visa canadiense!
        </a>
      </section>
    </main>
   
  )
}

