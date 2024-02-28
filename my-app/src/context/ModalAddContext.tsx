import { createContext, useState } from "react";

interface IModalAddContext {
    modal: boolean;
    open: () => void;
    close: () => void;
}

export const ModalAddContext = createContext<IModalAddContext>({
    modal: false,
    open: () => {},
    close: () => {}
});

export const ModalState = ({children}: {children: React.ReactNode}) =>{
    const [modal, setModal] = useState(false);

    const open = () => setModal(true);
    
    const close = () => setModal(false);

    return (
        <ModalAddContext.Provider value={{modal, open, close}}>
            {children}
        </ModalAddContext.Provider>
    )
}