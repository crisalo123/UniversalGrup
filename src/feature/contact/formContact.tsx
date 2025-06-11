import { Button, Input } from "../core/ui";
import { Textarea } from "../core/ui/textarea";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import {
  createDocumentSchema,
  type CreateDocumentSchemaType,
} from "./createDocumetShema";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactForm } from "@/service/contactService";

export const FormContact = () => {
  const { register, handleSubmit , reset, formState: { errors } } = useForm<CreateDocumentSchemaType>({
    resolver: zodResolver(createDocumentSchema),
  });

  const onSubmit = async (data: CreateDocumentSchemaType) => {
    try{
        await sendContactForm(data)
        Swal.fire({
        icon: "success",
         title: "¡Mensaje enviado!",
         text: "Gracias por contactarnos. Te responderemos pronto.",
       });
       reset();
        // Resetea el formulario después de enviar
    }
    catch(error){
      Swal.fire({
        icon: "error",
        title: "Error al enviar el mensaje",
        text: "Por favor, inténtalo de nuevo más tarde.",
      });
      console.error("Error al enviar el formulario:", error); 
    }
    
  };

  return (
    <div className="w-10/12 mx-auto  justify-center items-center mt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid  grid-cols-1 md:grid-cols-2 gap-5 "
      >
        <div className=" col-span-3 md:col-span-2">
          <Input placeholder="Nombre Completo" {...register("name")} />
          <p className="text-red-500">{errors.name?.message}</p>
        </div>
        <div className="col-span-3 md:col-span-1">
          <Input placeholder="Teléfono" {...register("phone")} />
          <p className="text-red-500">{errors.phone?.message}</p>
        </div>
        <div className="col-span-3">
          <Input placeholder="Correo  electrónico" {...register("email")} />  
          <p className="text-red-500">{errors.email?.message}</p>
        </div>
        

        <div className="col-span-3 md:col-span-3">
          <Textarea className="h-40" placeholder="Mensaje" {...register("message")} />
          <p className="text-red-500">{errors.message?.message}</p>
        </div>

        <div>
          <Button className="bg-gradient-to-r bg-red-500 hover:bg-red-700  w-32" type="submit">Enviar</Button>
        </div>
      </form>
    </div>
  );
};
