import useGastos from '../hook/useGastos';
import { formatearCantidad } from '../helpers';
import IconoNuevoGasto from '../img/nuevo-gasto.svg';
import Modal from './Modal';
import ListadoGastos from './ListadoGastos';
import { useEffect, useState } from 'react';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

function ControlPresupuesto() {

  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const {presupuesto, showModal, modal, gastos} = useGastos();

  const [porcentaje, setPorcentaje] = useState(0);

  useEffect( () => {
    const cantidadGastada = gastos.reduce((acc, gasto) => gasto.cantidad + acc, 0);
    setGastado(cantidadGastada);
    setDisponible(presupuesto - cantidadGastada);

    const porcentajeNuevo = ((( presupuesto - (presupuesto - cantidadGastada) ) /presupuesto )*100).toFixed(2);

    setTimeout(() => {
      setPorcentaje(porcentajeNuevo);
    }, 1000);

  }, [gastos]);

  return (
    <section>
      <div className="mx-auto bg-white shadow hover:shadow-md transition-shadow py-10 px-5 mt-neg max-w-2xl">
        <div className="grid md:grid-cols-2 place-items-center justify-center">
          <div className="w-56 h-56">
            <CircularProgressbar
              value={porcentaje}
              text={`${porcentaje}% gastado`}
              styles={buildStyles({
                pathColor: porcentaje > 100 ? '#b91c1c' : '#2564eb',
                trailColor: '#F5F5F5',
                textSize: '10px',
                textColor: porcentaje > 100 ? '#b91c1c' : '#2564eb',
              })}
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className='text-xl'>
              <span className='font-bold text-blue-600'>Presupuesto: </span>
              {formatearCantidad(presupuesto)}
            </p>

            <p className={`text-xl ${disponible < 0 ? 'text-red-600 font-bold' : 'text-black'}`}>
              <span className={`font-bold ${disponible < 0 ? 'text-red-600 font-bold' : 'text-blue-600'}`}>Disponible: </span>
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