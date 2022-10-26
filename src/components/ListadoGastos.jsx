import useGastos from '../hook/useGastos'
import Gasto from './Gasto'

function ListadoGastos() {
  const { gastos } = useGastos()

  return (
    <>
      <h2 className='text-gray-700 font-bold text-xl mt-10 max-w-2xl mx-auto'>
        {gastos.length > 0 ? 'Gastos' : 'No hay gastos aún'}
      </h2>

        {gastos.length ? gastos.map(gasto => (
          <Gasto
            key={gasto.id}
            gasto={gasto}
          />
        )) : null}
    </>
  )
}

export default ListadoGastos