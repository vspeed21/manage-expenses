import { useState } from 'react';

import useGastos from '../hook/useGastos';
import Alerta from './Alerta';

function Formulario() {
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');
  const [mensaje, setMensaje] = useState('');

  const { animarModal, agregarGasto } = useGastos();

  const handleSubmit = e => {
    e.preventDefault();

    if([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios');
      return;
    }
    setMensaje('');
    agregarGasto({nombre, cantidad, categoria});
  }

  return (
    <form 
      className={`w-11/12 lg:w-2/6 mx-auto mt-14 ${animarModal ? 'opacity-1' : 'opacity-0'} transition-opacity`}
      onSubmit={handleSubmit}
    >
      <legend className='text-white uppercase text-3xl font-bold border-b-4 border-blue-800 pb-4 text-center'>nuevo gasto</legend>

      {mensaje && <Alerta mensaje={mensaje} tipo="error" />}

      <div className='flex flex-col gap-2 mt-4'>
        <label 
          htmlFor='nombre'
          className='text-blue-500 font-bold text-xl'
        >Nombre del gasto:</label>

        <input
          id='nombre'
          type='text'
          value={nombre}
          onChange={e => setNombre(e.target.value)}
          className='w-full bg-gray-50 p-2 rounded focus:outline-0 placeholder-gray-600'
          placeholder='Añade el Nombre del gasto, ej Transporte'
        />
      </div>

      <div className='flex flex-col gap-2 mt-4'>
        <label 
          htmlFor='cantidad'
          className='text-blue-500 font-bold text-xl'
        >Cantidad del gasto:</label>

        <input
          id='cantidad'
          type='number'
          value={cantidad}
          onChange={e => setCantidad(Number(e.target.value))}
          className='w-full bg-gray-50 p-2 rounded focus:outline-0 placeholder-gray-600'
          placeholder='Añade la cantidad del gasto, ej 300'
        />
      </div>

      <div className='flex flex-col gap-2 mt-4'>
        <label 
          htmlFor='categoria'
          className='text-blue-500 font-bold text-xl'
        >Categoria del gasto:</label>

        <select
          id='categoria'
          className='w-full bg-gray-50 p-2 rounded focus:outline-0 placeholder-gray-600 text-center'
          value={categoria}
          onChange={e => setCategoria(e.target.value)}
        >
          <option value='' disabled selected> --Seleccione una categoria--</option>
          <option value='ahorro'>Ahorro</option>
          <option value='comida'>Comida</option>
          <option value='casa'>Casa</option>
          <option value='gastos'>Gastos varios</option>
          <option value='ocio'>Ocio</option>
          <option value='salud'>Salud</option>
          <option value='suscripciones'>Suscripciones</option>
        </select>
      </div>

      <input 
        type='submit' 
        value={'Añadir gasto'}
        className='bg-blue-700 text-white p-3 rounded mt-5 text-center w-full text-base uppercase font-bold hover:cursor-pointer hover:bg-blue-800 transition-colors'
      />
    </form>
  )
}

export default Formulario