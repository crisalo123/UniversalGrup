import axios from "axios";

interface ContactoFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const sendContactForm = async (data: ContactoFormData) => {
  try {
    const response = await axios.post(
      "https://protturs-backend.onrender.com/send-email",
      data
    );

    return response.data;
  } catch (error) {
    console.error("Error enviando contacto:", error);
    throw error;
    // ESTO DEL THROW ES PARA QUE EL COMPONENTE QUE LLAMA A ESTA FUNCIÓN PUEDA MANEJAR EL ERROR
  }
};
