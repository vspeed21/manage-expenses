import React from 'react'

function Formulario() {
  return (
    <form className='bg-white shadow max-w-2xl mx-auto mt-neg p-8'>
      <div className='flex flex-col gap-4'>
        <label 
          htmlFor='presupuesto'
          className='text-xl text-blue-500 font-bold'
        >Define tu presupuesto:</label>
        <input
          id='presupuesto'
          className='w-full border bg-gray-50 focus:outline-0 p-2 text-center text-2xl'
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