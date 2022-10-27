import useGastos from '../hook/useGastos'
import Filtros from './Filtros'
import Gasto from './Gasto'

function ListadoGastos() {
  const { gastos, filtro, gastosFiltrados} = useGastos()

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