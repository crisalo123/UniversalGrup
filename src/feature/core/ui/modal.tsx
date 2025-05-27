import { useModalContext } from "@/context/modalContex";
import { useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
   children: React.ReactNode;
}

export const Modal:React.FC<ModalProps> = ({children}) => {

    const modalRef = useRef<HTMLDivElement>(null)

   const {state, setState} = useModalContext()

   const closeModal = () => { setState(false) }

  

   const modalRoot = document.getElementById('modal');
   if( !modalRoot || !state) return null;



  return  createPortal(<div className="overlay" onClick={closeModal}>
     <div className="modal" ref={modalRef}>
        {children}
        {/* Close button */}
        <button className="close" onClick={closeModal}>
            <span className="visually-hidden">Close</span>
            <i className="icon-close"></i>
        </button>
     </div>
  </div>,modalRoot) 
}

