import { Button, Input } from "../core/ui";
import { Textarea } from "../core/ui/textarea";
import { useForm } from "react-hook-form";
import {
  createDocumentSchema,
  type CreateDocumentSchemaType,
} from "./createDocumetShema";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormContact = () => {
  const { register, handleSubmit } = useForm<CreateDocumentSchemaType>({
    resolver: zodResolver(createDocumentSchema),
  });

  const onSubmit = (data: CreateDocumentSchemaType) => {
    console.log(data);
  };

  return (
    <div className="w-10/12 mx-auto  justify-center items-center mt-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid  grid-cols-1 md:grid-cols-3 gap-5 "
      >
        <div className="col-span-1">
          <Input placeholder="Nombre Completo" {...register("name")} />
        </div>
        <div className="col-span-1">
          <Input placeholder="Correo  electrónico" {...register("email")} />
        </div>
        <div className="col-span-1">
          <Input placeholder="Teléfono" {...register("phone")} />
        </div>

        <div className="col-span-1 md:col-span-3">
          <Textarea placeholder="Mensaje" {...register("message")} />
        </div>

        <div>
          <Button type="submit">Enviar</Button>
        </div>
      </form>
    </div>
  );
};
