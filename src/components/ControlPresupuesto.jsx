import useGastos from '../hook/useGastos';
import { formatearCantidad } from '../helpers';
import IconoNuevoGasto from '../img/nuevo-gasto.svg';
import Modal from './Modal';
import ListadoGastos from './ListadoGastos';
import { useEffect, useState } from 'react';

function ControlPresupuesto() {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const {presupuesto, showModal, modal, gastos} = useGastos();

  useEffect( () => {
    const cantidadGastada = gastos.reduce((acc, gasto) => gasto.cantidad + acc, 0);
    setGastado(cantidadGastada);
    setDisponible(presupuesto - cantidadGastada);
  }, [gastos]);

  return (
    <section>
      <div className="mx-auto bg-white shadow hover:shadow-md transition-shadow py-10 px-5 mt-neg max-w-2xl">
        <div className="grid md:grid-cols-2 place-items-center justify-center">
          <p>GRAFICA</p>

          <div className="flex flex-col gap-4">
            <p className='text-xl'>
              <span className='font-bold text-blue-600'>Presupuesto: </span>
              {formatearCantidad(presupuesto)}
            </p>

            <p className='text-xl'>
              <span className='font-bold text-blue-600'>Disponible: </span>
              {formatearCantidad(disponible)}
            </p>

            <p className='text-xl'>
              <span className='font-bold text-blue-600'>Gastado: </span>
              {formatearCantidad(gastado)}
            </p>
          </div>
        </div>
      </div>

      {modal && (
        <Modal/>
      )}

      <ListadoGastos/>

      <div className={`fixed bottom-10 right-10 ${modal ? 'hidden' : 'block'}`}>
        <img
          src={IconoNuevoGasto}
          alt='icono nuevo gasto'
          className="w-12 hover:cursor-pointer"
          onClick={() => showModal()}
        />
      </div>
    </section>
  )
}

export default ControlPresupuesto