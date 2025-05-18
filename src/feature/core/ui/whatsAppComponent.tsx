import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from './Link'

interface WhatsAppComponentProps {
   className: string;
   classNameLogo: string;

}

export const WhatsAppComponent:React.FC<WhatsAppComponentProps> = ({className,classNameLogo}) => {
  return (
   <Link
        to="https://wa.me/3202853852"
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        <IoLogoWhatsapp className={classNameLogo} />
          
      </Link>
  )
}

