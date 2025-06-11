import imgContactBagraoud from "@/feature/protours/img/chica.png";
import { FormContact } from "../contact";

export const ContactPage = () => {
  return (
    <>
      <main
        className="relative   bg-contain bg-no-repeat bg-center min-h-[50vh] "
        style={{
          backgroundImage: `url(${imgContactBagraoud})`,
          backgroundPositionX: "right",
        }}
      >
        <div className=" hidden md:block mx-10 md:mt-10  w-7/12 m-3 space-y-5">
          <h1 className="  text-6xl text-blue-900 font-bold mt-14 pt-20 font-pacifico drop-shadow-lg">
            Contacta a Protours Ya
          </h1>
          <p className="  text-lg text-gray-700">
            Nuestro equipo de expertos está disponible para ayudarle a responder
            las preguntas que pueda tener respecto a su B1 o B2. Complete este
            formulario para enviar sus inquietudes directamente a nuestros
            agentes.
          </p>
        </div>
      </main>

      <div className="mb-3 ">

        <p className=" block md:hidden text-blue-700 text-md justify-center mx-auto p-5 ">
            Nuestro equipo de expertos está disponible para ayudarle a responder
            las preguntas que pueda tener respecto a cualquier proceso que tengas. 
          </p>
        <FormContact />
      </div>
    </>
  );
};
