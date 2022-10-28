import { createContext, useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import swal from 'sweetalert';

import useModal from '../hook/useModal';

const GastosContext = createContext();

export function GastosProvider({children}) {

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
);
  const [isValidPresupuesto, setIsValidPrespuesto] = useState(false);

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  );
  const [gastoEditar, setGastoEditar] = useState({});

  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  const { showModal } = useModal();

  useEffect(() => {
    if(Object.keys(gastoEditar).length ) {
      showModal();
    }
  }, [gastoEditar]);

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto) ?? 0;
  }, [presupuesto]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
    if(presupuestoLS > 0) {
      setIsValidPrespuesto(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? []);
  }, [gastos]);

  useEffect(() => {
    const gastosF = gastos.filter( gasto => gasto.categoria === filtro);
    setGastosFiltrados(gastosF);
  }, [filtro]);

  function agregarGasto(gasto) {
    if(gasto.id) {
      //Actualizar
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState);
      setGastos(gastosActualizados);
      setGastoEditar({});

    }else{
      gasto.id = nanoid();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto]);
    }
  }

  function eliminarGasto(id) {
    swal({
      title: '¿Eliminar gasto?',
      text: '¿Quieres eliminar este gasto?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then( willDelete => {
      if (willDelete) {
        const gastosActualizados = gastos.filter( gasto => gasto.id !== id );
        setGastos(gastosActualizados);
      } 
    });
  }

  function handleResetApp() {
    swal({
      title: '¿Reiniciar app?',
      text: '¿Quieres reiniciar la aplicacion? Perderas todos tus gastos',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then( willDelete => {
      if (willDelete) {
        setIsValidPrespuesto(false);
        setPresupuesto(0)
        setGastos([]);
      } 
    });
  }

  return(
    <GastosContext.Provider
      value={{
        presupuesto,
        setPresupuesto,
        setIsValidPrespuesto,
        isValidPresupuesto,
        agregarGasto,
        gastos,
        gastoEditar,
        setGastoEditar,
        eliminarGasto,
        filtro,
        gastosFiltrados,
        setFiltro,
        handleResetApp
      }}
    >
      {children}
    </GastosContext.Provider>
  )
}

export default GastosContext;