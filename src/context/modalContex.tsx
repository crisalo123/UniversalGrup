import { createContext, useContext, useState } from "react";

export interface ModalContextType {
  state: boolean;  
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}




export const ModalContext = createContext<ModalContextType>({
    state: false,
    setState: () => null
})

export const ModalProvider = ({children}: {children: React.ReactNode}) => {
    const [state, setState] = useState(false);
    
   
     
    return (
        <ModalContext.Provider value={{state, setState}}>
            {children}
        </ModalContext.Provider>
    );

};

export const useModalContext = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModalContext must be used within a ModalProvider");
    }
    return context;
}