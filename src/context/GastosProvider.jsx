import { createContext, useState } from "react";
import { nanoid } from 'nanoid'
import { useEffect } from "react";

const GastosContext = createContext();

export function GastosProvider({children}) {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPrespuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if(Object.keys(gastoEditar).length ) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  function showModal() {
    setModal(true);
    setGastoEditar({});

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

  function agregarGasto(gasto) {
    if(gasto.id) {
      //Actualizar
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastosActualizados);

    }else{
      gasto.id = nanoid();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }
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
        agregarGasto,
        gastos,
        gastoEditar,
        setGastoEditar,
      }}
    >
      {children}
    </GastosContext.Provider>
  )
}

export default GastosContext;