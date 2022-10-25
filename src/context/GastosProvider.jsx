import { createContext, useState } from "react";

const GastosContext = createContext();

export function GastosProvider({children}) {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidoPrespuesto] = useState(false);

  return(
    <GastosContext.Provider
      value={{
        presupuesto,
        setPresupuesto,
        setIsValidoPrespuesto,
      }}
    >
      {children}
    </GastosContext.Provider>
  )
}

export default GastosContext;