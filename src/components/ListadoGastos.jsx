import useGastos from '../hook/useGastos'
import Filtros from './Filtros'
import Gasto from './Gasto'

function ListadoGastos() {
  const { gastos, filtro, gastosFiltrados} = useGastos()

  return (
    <>
      <Filtros/>

      {
        filtro ? (
          <>
            <h2 className='text-gray-700 font-bold text-xl mt-10 max-w-2xl mx-auto py-5'>
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
            <h2 className='text-gray-700 font-bold text-xl mt-10 max-w-2xl mx-auto py-5'>
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
    </>
  )
}

export default ListadoGastos