import { createContext } from "react";

const GastosContext = createContext();

export function gastosProvider({children}) {

  const hola = 'Hello context'

  return(
    <GastosContext.Provider
      value={{
        hola,
      }}
    >
      {children}
    </GastosContext.Provider>
  )
}

export default GastosContext;