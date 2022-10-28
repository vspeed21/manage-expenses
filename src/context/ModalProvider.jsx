import { createContext, useState } from 'react';

const ModalContext = createContext();
export const ModalProvider = ({children}) => {
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  function showModal() {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }

  function closeModal() {
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 500);
  }

  function closeModalWObject() {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  }

  return(
    <ModalContext.Provider
      value={{
        modal,
        showModal,
        closeModal,
        animarModal,
        closeModalWObject,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext;