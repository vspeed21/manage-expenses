import { useState } from 'react';

import useGastos from '../hook/useGastos';
import Alerta from './Alerta';

function Formulario() {
  const { presupuesto, setPresupuesto, setIsValidPrespuesto } = useGastos();
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if(!presupuesto || presupuesto <= 0) {
      setMensaje('presupuesto no valido');
      setTimeout(() => {
        setMensaje('')
      }, 3000);
      return;
    }
    setMensaje('');
    setIsValidPrespuesto(true);
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className='bg-white shadow max-w-2xl mx-auto mt-neg p-8 contenedor'
    >
      {mensaje && (
        <Alerta
          mensaje={mensaje}
          tipo='error'
        />
      )}
      <div className='flex flex-col gap-4'>
        <label 
          htmlFor='presupuesto'
          className='text-xl text-blue-500 font-bold'
        >Define tu presupuesto:</label>
        <input
          type='number'
          id='presupuesto'
          className='w-full border bg-gray-50 focus:outline-0 p-2 text-center text-2xl'
          value={presupuesto}
          onChange={e => setPresupuesto(Number(e.target.value))}
        />
      </div>

      <input 
        type='submit' 
        value='Continuar'
        className='bg-blue-500 mt-4 text-white w-full p-2 font-bold hover:cursor-pointer hover:bg-blue-600 transition-colors uppercase'
      />
    </form>
  )
}

export default Formulario