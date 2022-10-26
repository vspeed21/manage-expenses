import { createContext, useState } from "react";

const GastosContext = createContext();

export function GastosProvider({children}) {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPrespuesto] = useState(false);
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

  return(
    <GastosContext.Provider
      value={{
        presupuesto,
        setPresupuesto,
        setIsValidPrespuesto,
        isValidPresupuesto,
        animarModal,
        modal,
        showModal,
        closeModal,
      }}
    >
      {children}
    </GastosContext.Provider>
  )
}

export default GastosContext;