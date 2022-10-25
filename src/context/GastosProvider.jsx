import { createContext, useState } from "react";

const GastosContext = createContext();

export function GastosProvider({children}) {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPrespuesto] = useState(false);
  const [modal, setModal] = useState(false);

  return(
    <GastosContext.Provider
      value={{
        presupuesto,
        setPresupuesto,
        setIsValidPrespuesto,
        isValidPresupuesto,
        setModal,
        modal,
      }}
    >
      {children}
    </GastosContext.Provider>
  )
}

export default GastosContext;