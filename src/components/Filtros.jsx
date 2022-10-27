import useGastos from '../hook/useGastos';

function Filtros() {
  const { filtro, setFiltro } = useGastos();

  return (
    <div className='shadow py-8 px-5 rounded bg-white my-10 max-w-2xl mx-auto'>
      <div className='flex justify-between items-center'>
        <label htmlFor='filtro' className='text-2xl text-gray-600 font-bold'>Filtrar gastos</label>
        <select 
          id='filtro'
          className='bg-gray-100 font-bold p-2 rounded focus:outline-0 placeholder-gray-600 text-center w-7/12'
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
        >
          <option value=''> --Todas las categorías--</option>
          <option value='ahorro'>Ahorro</option>
          <option value='comida'>Comida</option>
          <option value='casa'>Casa</option>
          <option value='gastos'>Gastos varios</option>
          <option value='ocio'>Ocio</option>
          <option value='salud'>Salud</option>
          <option value='suscripciones'>Suscripciones</option>
        </select>
      </div>
    </div>
  )
}

export default Filtros