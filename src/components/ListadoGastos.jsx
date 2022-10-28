import { useState } from 'react'

import useGastos from '../hook/useGastos'
import Filtros from './Filtros'
import Gasto from './Gasto'

function ListadoGastos() {
  const { gastos, filtro, gastosFiltrados} = useGastos();

  const [siguiente, setSiguiente] = useState(
    gastos.length > 1 ? '' : 'editar'
  );

  return (
    <div className='w-11/12 mx-auto'>
      <Filtros/>

      {
        filtro ? (
          <>
            <h2 className='text-gray-700 font-bold text-3xl mt-10 md:max-w-2xl md:mx-auto py-5 text-center md:text-left'>
              {gastosFiltrados.length > 0 ? 'Gastos' : 'No hay gastos en esta categoría'}
            </h2>

            {gastosFiltrados.length && gastosFiltrados.map(gasto => (
              <Gasto
                key={gasto.id}
                gasto={gasto}
              />
            ))}
          </>

        ):(
          <>
            <h2 className='text-gray-700 font-bold text-3xl mt-10 md:max-w-2xl md:mx-auto py-5 text-center md:text-left'>
              {gastos.length > 0 ? 'Gastos' : 'No hay gastos aún. Añade uno'}
            </h2>

            <div 
              className={`relative mb-6 triangulo bg-blue-300 p-2 rounded-md max-w-max mx-auto transition-opacity duration-300 
              ${gastos.length === 1 && siguiente === 'editar' ? 'block' : 'hidden'}
              
              `}
            >
                <p className='text-lg'>Para modificar un gasto desliza hacia la derecha</p>
              <div className='flex justify-end gap-3 mt-1'>
                <button
                  type='button'
                  className=''
                  onClick={() => setSiguiente('')}
                >
                  Saltar tutorial
                </button>

                <button
                  type='button'
                  className='font-bold'
                  onClick={() => setSiguiente('eliminar')}
                >
                  Siguiente
                </button>
              </div>
            </div>

            <div className={`relative mb-6 triangulo bg-blue-300 p-2 rounded-md max-w-max mx-auto transition-opacity duration-300 ${siguiente === 'eliminar' ? 'block': 'hidden'}`}>
              <p className='text-lg'>Para eliminar un gasto desliza hacia la izquierda</p>

              <div className='flex justify-end'>
                <button
                  type='button'
                  className='font-bold'
                  onClick={() => setSiguiente('')}
                >
                  Cerrar
                </button>
              </div>
            </div>

          {gastos.length && gastos.map(gasto => (
            <Gasto
              key={gasto.id}
              gasto={gasto}
            />
            ))}
          </>
        )
      }
    </div>
  )
}

export default ListadoGastos