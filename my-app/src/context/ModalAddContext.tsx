import { createContext, useState } from "react";

interface IModalAddContext {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

export const ModalAddContext = createContext<IModalAddContext>({
    isOpen: false,
    openModal: () => {},
    closeModal: () => {},
});

export function useModalAdd({children}: {children: React.ReactNode}) {
    const [modal,setModal] = useState(false);
    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <ModalAddContext.Provider value={{isOpen: modal, openModal, closeModal}}>
            {children}
        </ModalAddContext.Provider>
    )
}