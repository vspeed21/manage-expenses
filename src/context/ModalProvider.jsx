import { createContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({children}) => {

  return(
    <ModalContext.Provider
      value={{
        
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalContext;