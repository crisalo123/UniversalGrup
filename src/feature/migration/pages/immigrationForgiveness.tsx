import { FaRegHandshake, FaPassport, FaRegSmileBeam, FaRegCheckCircle } from "react-icons/fa";
import imgSucesss from '@/feature/migration/img/perdon_migratorio.avif'
import { CardInitial } from "../Component/CardInitial";
import { FormContact } from "@/feature/contact";

export const ImmigrationForgiveness = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 pt-24 pb-16">
      {/* Hero */}

         <CardInitial
              backgroundImage={imgSucesss}
              buttonshow={false}
              title="¡Recupera tu Futuro con el Perdón Migratorio!"
              subtitle="Te acompañamos en el proceso para regularizar tu situación migratoria y abrir nuevas oportunidades en EE.UU."
            />

      {/* ¿Qué es el Perdón Migratorio? */}
      <section className="max-w-3xl mx-auto mt-10 mb-16 px-6 py-10 rounded-3xl bg-white/80 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 text-center font-montserrat">
          ¿Qué es el Perdón Migratorio?
        </h2>
        <p className="text-gray-700 text-lg mb-4 text-center">
          El perdón migratorio es un recurso legal que permite a personas que han cometido ciertas infracciones migratorias solicitar la regularización de su estatus en Estados Unidos. Es una oportunidad para quienes desean reunirse con sus familias, trabajar o continuar su vida en EE.UU. de manera legal.
        </p>
      </section>

      {/* Beneficios */}
      <section className="max-w-4xl mx-auto mb-16 px-4 py-10 rounded-3xl bg-gradient-to-r  shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-700 mb-8 font-montserrat">
          Beneficios del Perdón Migratorio
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <FaRegHandshake className="text-red-600 text-4xl mb-3" />
            <h3 className="font-semibold mb-2 text-red-700">Reunificación Familiar</h3>
            <p className="text-gray-700 text-sm">Permite reencontrarte con tus seres queridos en EE.UU.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPassport className="text-red-600 text-4xl mb-3" />
            <h3 className="font-semibold mb-2 text-red-700">Regularización</h3>
            <p className="text-gray-700 text-sm">Legaliza tu estatus migratorio y evita futuras deportaciones.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaRegSmileBeam className="text-red-600 text-4xl mb-3" />
            <h3 className="font-semibold mb-2 text-red-700">Nuevas Oportunidades</h3>
            <p className="text-gray-700 text-sm">Accede a empleo, educación y servicios de salud.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaRegCheckCircle className="text-red-600 text-4xl mb-3" />
            <h3 className="font-semibold mb-2 text-red-700">Trámite Seguro</h3>
            <p className="text-gray-700 text-sm">Acompañamiento profesional durante todo el proceso.</p>
          </div>
        </div>
      </section>

      {/* Proceso en 4 Pasos */}
      <section className="max-w-4xl mx-auto mb-20 px-4 py-12 rounded-3xl bg-white/90 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-700 mb-10 font-montserrat">
          Nuestro Proceso en 4 Sencillos Pasos
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <span className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">1</span>
            <h3 className="font-semibold mb-2 text-red-700">Evaluación</h3>
            <p className="text-gray-700 text-sm">Analizamos tu caso y te orientamos sobre la mejor opción de perdón migratorio.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">2</span>
            <h3 className="font-semibold mb-2 text-red-700">Documentación</h3>
            <p className="text-gray-700 text-sm">Te ayudamos a reunir y preparar todos los documentos necesarios.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">3</span>
            <h3 className="font-semibold mb-2 text-red-700">Solicitud</h3>
            <p className="text-gray-700 text-sm">Presentamos tu solicitud de perdón migratorio ante las autoridades competentes.</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="bg-red-600 text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl font-bold mb-3 shadow-lg">4</span>
            <h3 className="font-semibold mb-2 text-red-700">Seguimiento</h3>
            <p className="text-gray-700 text-sm">Realizamos un seguimiento continuo de tu caso hasta obtener una respuesta.</p>
          </div>
        </div>
      </section>

      {/* Llamado a la Acción */}
      <section className="max-w-3xl mx-auto mb-16 px-6 py-10 rounded-3xl bg-white shadow-lg text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 font-montserrat">
          ¿Listo para Comenzar tu Proceso?
        </h2>
        <p className="text-gray-700 text-lg mb-4">
          No dejes pasar más tiempo. Cada día es una nueva oportunidad para cambiar tu vida.
        </p>
        <a href="#contacto" className="inline-block bg-red-600 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-red-700 transition-all">
          Contáctanos Ahora
        </a>
      </section>

      {/* Testimonios */}
      <section className="max-w-4xl mx-auto mb-20 px-4 py-12 rounded-3xl bg-white/90 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-700 mb-10 font-montserrat">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="space-y-8">
          {/* Testimonio 1 */}
          <div className="p-6 rounded-3xl bg-red-50 shadow-md">
            <p className="text-gray-700 text-lg mb-4">
              "Gracias al perdón migratorio pude reunirme con mi familia después de años separados. El proceso fue rápido y transparente."
            </p>
            <p className="font-semibold text-red-700">
              - Juan P.
            </p>
          </div>
          {/* Testimonio 2 */}
          <div className="p-6 rounded-3xl bg-red-50 shadow-md">
            <p className="text-gray-700 text-lg mb-4">
              "El equipo me guió en cada paso del proceso. Ahora tengo un trabajo estable y puedo construir un futuro en EE.UU."
            </p>
            <p className="font-semibold text-red-700">
              - María L.
            </p>
          </div>
          {/* Testimonio 3 */}
          <div className="p-6 rounded-3xl bg-red-50 shadow-md">
            <p className="text-gray-700 text-lg mb-4">
              "Nunca pensé que podría obtener el perdón migratorio. Su profesionalismo y dedicación cambiaron mi vida."
            </p>
            <p className="font-semibold text-red-700">
              - Carlos G.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto mb-20 px-6 py-10 rounded-3xl bg-white/80 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 text-center font-montserrat">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {/* Pregunta 1 */}
          <div>
            <h3 className="font-semibold text-red-700 mb-2">¿Quiénes pueden solicitar el perdón migratorio?</h3>
            <p className="text-gray-700 text-sm">
              Pueden solicitarlo aquellas personas que hayan cometido infracciones migratorias y cumplan con ciertos requisitos. Es importante consultar con un experto para evaluar cada caso en particular.
            </p>
          </div>
          {/* Pregunta 2 */}
          <div>
            <h3 className="font-semibold text-red-700 mb-2">¿Cuál es el tiempo estimado para el proceso?</h3>
            <p className="text-gray-700 text-sm">
              El tiempo puede variar dependiendo de cada caso y de la carga de trabajo de las autoridades migratorias. Sin embargo, nuestro equipo se asegura de que cada trámite se realice lo más rápido posible.
            </p>
          </div>
          {/* Pregunta 3 */}
          <div>
            <h3 className="font-semibold text-red-700 mb-2">¿Es garantizado el perdón migratorio?</h3>
            <p className="text-gray-700 text-sm">
              No podemos garantizar resultados, ya que depende de muchos factores externos. Sin embargo, nuestro compromiso es brindar el mejor asesoramiento y apoyo en todo momento.
            </p>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="max-w-3xl mx-auto mb-20 px-6 py-10 rounded-3xl bg-white shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6 text-center font-montserrat">
          Contáctanos
        </h2>
        <p className="text-gray-700 text-lg mb-4 text-center">
          Estamos aquí para ayudarte. Completa el siguiente formulario y nos pondremos en contacto contigo a la brevedad.
        </p>
        <FormContact  />
        
      </section>

      
    </main>
  )
}

