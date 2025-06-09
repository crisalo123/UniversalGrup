import imgChina from '@/feature/migration/img/bgChina.jpg'
import { CardInitial } from '../Component/CardInitial'

const testimonios = [
  {
    nombre: "Juan Li",
    historia: "Gracias a Universal Protours, pude conocer la Gran Muralla y vivir la cultura china de cerca. ¡Un viaje inolvidable!",
    foto: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    nombre: "María González",
    historia: "El proceso fue claro y rápido. Me ayudaron con todos los documentos y la asesoría fue excelente.",
    foto: "https://randomuser.me/api/portraits/women/47.jpg"
  },
  {
    nombre: "Carlos Wang",
    historia: "China superó mis expectativas. Universal Protours estuvo conmigo en cada paso del trámite.",
    foto: "https://randomuser.me/api/portraits/men/55.jpg"
  }
]

export const TurimsChina = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-100 pt-10 md:pt-4 md:pb-16">
      {/* Hero */}
      <CardInitial
        backgroundImage={imgChina}
        buttonshow={false}
        title="¡Descubre China con tu Visa de Turismo!"
        subtitle="Explora la historia milenaria, la cultura y los paisajes únicos de China. Nosotros te ayudamos a lograrlo."
      />

      {/* Información principal */}
      <section className="max-w-3xl mt-10 mx-auto mb-16 px-6 py-10 rounded-3xl bg-white/80 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 text-center font-montserrat">
          Requisitos para obtener la visa de turismo a China
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
          <li>Tener un pasaporte válido por al menos 6 meses.</li>
          <li>Formulario de solicitud de visa (Formulario V.2013).</li>
          <li>Foto reciente tamaño pasaporte.</li>
          <li>Reserva de vuelos y alojamiento.</li>
          <li>Prueba de fondos suficientes para la estancia (aprox. $2,000 - $5,000 USD).</li>
          <li>No tener antecedentes penales.</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-red-700 mb-2">Tipos de visas de turismo:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Visa L (turismo individual o en grupo)</li>
              <li>Visa de tránsito (G)</li>
              <li>Visa de visita familiar (Q2)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-red-700 mb-2">Costos asociados:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Tarifa de solicitud: <span className="font-semibold">$140 USD</span> por persona</li>
              <li>Tarifa de servicio del centro de visas: <span className="font-semibold">$66 USD</span> por persona</li>
              <li>Tarifa de mensajería (opcional): <span className="font-semibold">$30 USD</span></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-6">
          <h3 className="font-semibold text-red-700 mb-2">Duración de la visa:</h3>
          <p className="text-gray-700">
            Generalmente hasta <span className="font-semibold">30 días</span> por visita, con posibilidad de entradas múltiples según el caso.
          </p>
        </div>
      </section>

      {/* Nuestro Proceso en 4 Sencillos Pasos */}
      <section className="max-w-4xl mx-auto mb-20 px-4 py-12 rounded-3xl bg-white/90 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-700 mb-10 font-montserrat">
          Nuestro Proceso en 4 Sencillos Pasos
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">1</span>
            <h3 className="font-semibold mb-2 text-red-700">Evaluación</h3>
            <p className="text-gray-700 text-sm">Analizamos tu perfil y te orientamos sobre los requisitos y posibilidades.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">2</span>
            <h3 className="font-semibold mb-2 text-red-700">Documentación</h3>
            <p className="text-gray-700 text-sm">Te ayudamos a reunir y organizar todos los documentos necesarios.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">3</span>
            <h3 className="font-semibold mb-2 text-red-700">Solicitud</h3>
            <p className="text-gray-700 text-sm">Presentamos tu solicitud y te preparamos para la entrevista.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">4</span>
            <h3 className="font-semibold mb-2 text-red-700">¡Viaja!</h3>
            <p className="text-gray-700 text-sm">Recibe tu visa y prepárate para disfrutar China.</p>
          </div>
        </div>
      </section>

      {/* Historias de Éxito */}
      <section className="max-w-5xl mx-auto mb-20 px-4 py-12 rounded-3xl bg-gradient-to-r from-red-100 to-yellow-100 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-700 mb-10 font-montserrat">
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
                className="w-20 h-20 rounded-full object-cover border-4 border-red-200 mb-4"
              />
              <p className="italic text-gray-700 mb-4 text-center">"{t.historia}"</p>
              <span className="font-bold text-red-700">{t.nombre}</span>
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
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition"
        >
          ¡Solicita tu asesoría para tu visa a China!
        </a>
      </section>
    </main>
  )
}

