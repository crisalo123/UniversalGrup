
import { mockDataServices } from '../const/mockData'

export const DetailServices = () => {
  return (
        <section id="services" className="py-16 px-6 bg-white bg-opacity-90">
            <h2 className="text-3xl font-bold text-center mb-10">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockDataServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              ))}
            </div>
          </section>
  )
}

