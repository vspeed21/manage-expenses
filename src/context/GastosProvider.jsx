import { createContext, useState } from "react";

const GastosContext = createContext();

export function GastosProvider({children}) {

  const [presupuesto, setPresupuesto] = useState(0);

  return(
    <GastosContext.Provider
      value={{
        presupuesto,
        setPresupuesto,
      }}
    >
      {children}
    </GastosContext.Provider>
  )
}

export default GastosContext;