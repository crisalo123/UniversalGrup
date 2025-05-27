
import { FaPassport, FaPlaneDeparture, FaRegSmileBeam } from "react-icons/fa"
import  imgbgTurimsUsa from '@/feature/migration/img/turismoUsa.jpg'
import { CardInitial } from '../Component/CardInitial'

export const TurimsUsa = () => {
  return (
    
      <main className="min-h-screen  pt-10 pb-16">
        {/* Hero */}
       <CardInitial
        title="Visa de Turismo para Estados Unidos"
        subtitle="Permite visitar EEUU por placer o negocios hasta 6 meses."
         backgroundImage={imgbgTurimsUsa}
        buttonshow={true}
/>

         <section className="max-w-3xl mt-10 mx-auto mb-16 px-6 py-10 rounded-3xl bg-blue-50/80 shadow-lg">
          <h2 className="text-lg md:text-2xl font-bold text-blue-800 mb-4 text-center italic">
            Permite visitar EEUU por placer o negocios hasta 6 meses.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">Requisitos:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Pasaporte válido</li>
                <li>Formulario DS-160</li>
                <li>Prueba de fondos ($2,000 - $5,000)</li>
                <li>Carta de invitación (opcional)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-blue-700 mb-2">Documentación necesaria:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Pasaporte</li>
                <li>Foto reciente</li>
                <li>Comprobante de pago de la tarifa</li>
              </ul>
              <h3 className="font-semibold text-blue-700 mt-4 mb-1">Costo:</h3>
              <p className="text-gray-700">$160 + $85 <span className="text-sm text-gray-500">(tarifa de procesamiento)</span></p>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="max-w-5xl mx-auto mt-16 mb-20 px-4 py-12 rounded-3xl bg-white/80 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center font-pacifico text-blue-800 mb-8">
            ¿Por qué tramitar tu Visa de Turismo con nosotros?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <FaPassport className="text-red-500 text-5xl mb-4" />
              <h3 className="font-bold text-lg mb-2">Acompañamiento Experto</h3>
              <p className="text-gray-700">Te guiamos en cada paso, desde la documentación hasta la entrevista.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaPlaneDeparture className="text-red-500 text-5xl mb-4" />
              <h3 className="font-bold text-lg mb-2">Proceso Ágil y Seguro</h3>
              <p className="text-gray-700">Optimiza tu tiempo y aumenta tus posibilidades de aprobación.</p>
            </div>
            <div className="flex flex-col items-center">
              <FaRegSmileBeam className="text-red-500 text-5xl mb-4" />
              <h3 className="font-bold text-lg mb-2">Viaja Sin Preocupaciones</h3>
              <p className="text-gray-700">Disfruta tu viaje a USA con la tranquilidad de tener todo en regla.</p>
            </div>
          </div>
        </section>

        {/* Pasos del Proceso */}
        <section className="max-w-4xl mx-auto mb-20 px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center font-pacifico text-blue-900 mb-8">
            ¿Cómo es el proceso?
          </h2>
          <ol className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="bg-red-400 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">1</span>
              <div>
                <span className="font-semibold">Evaluación personalizada:</span> Analizamos tu perfil y te orientamos sobre los requisitos.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-red-400 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">2</span>
              <div>
                <span className="font-semibold">Preparación de documentos:</span> Te ayudamos a reunir y organizar toda la documentación necesaria.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-red-400 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">3</span>
              <div>
                <span className="font-semibold">Simulación de entrevista:</span> Practica con nosotros para que llegues seguro a tu cita en la embajada.
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="bg-red-400 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">4</span>
              <div>
                <span className="font-semibold">¡Listo para viajar!</span> Recibe tu visa y prepárate para disfrutar USA.
              </div>
            </li>
          </ol>
        </section>
      </main>
    
  )
}

