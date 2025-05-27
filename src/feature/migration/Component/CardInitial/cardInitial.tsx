import { Link } from "@/feature/core/ui";


type CardInitialProps =  {
    title: string;
    subtitle: string;
    backgroundImage: string;
    buttonshow: boolean;
}


export const CardInitial:React.FC<CardInitialProps> = ({backgroundImage,buttonshow,subtitle,title}) => {
  return (
     <section className="relative bg-cover bg-center min-h-[70vh] flex items-center justify-center px-6"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="bg-white/80 p-10 rounded-3xl max-w-2xl text-center shadow-xl border border-blue-200">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-red-700 font-pacifico drop-shadow-lg">
           {title}
          </h1>
          <p className="text-xl mb-6 text-blue-800 font-semibold">
           {subtitle}
          </p>
         {buttonshow && ( <Link
                to="https://wa.me/3202853852"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-sm hover:bg-red-500 text-white hover:no-underline px-8 py-3 rounded-full font-semibold md:text-lg shadow-lg transition"
              >
                Solicita tu asesoría ahora
              </Link>)}
        </div>
      </section>
  )
}

