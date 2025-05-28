import { useModalContext } from "@/context/modalContex";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const { state, setState } = useModalContext();

  const closeModal = () => {
    setState(false);
  };

  const modalRoot = document.getElementById("modal");
  if (!modalRoot || !state) return null;

  return createPortal(
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {/* Modal content wrapper */}
      <div
        ref={modalRef}
        className="relative z-50 w-full max-w-lg p-7 bg-white rounded-lg shadow-2xl"
      >
        <span className="sr-only">Close</span>

        <IoIosCloseCircleOutline
          onClick={closeModal}
          className="text-3xl font-medium text-primary-900 hover:cursor-pointer absolute  right-2 top-2"
        />
        {/* Modal Children */}
        {children}
      </div>
    </div>,
    modalRoot
  );
};
