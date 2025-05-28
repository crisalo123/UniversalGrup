import { z } from "zod";

export const createDocumentSchema = z.object({
  name: z.string().min(1, { message: "El nombre es requerido" }),
  email: z.string().email({ message: "El correo electrónico no es válido" }),
  phone: z.string().min(1, { message: "El número de teléfono es requerido" }),
  message: z.string().min(1, { message: "El mensaje es requerido" }),
});

export type CreateDocumentSchemaType = z.infer<typeof createDocumentSchema>;
