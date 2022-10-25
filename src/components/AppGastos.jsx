import Header from '../layout/Header'
import NuevoPresupuesto from './NuevoPresupuesto';
import ControlPresupuesto from './ControlPresupuesto';
import useGastos from '../hook/useGastos';

function AppGastos() {
  const { isValidPresupuesto } = useGastos();

  return (
    <>
      <Header/>

      {isValidPresupuesto ? (
        <ControlPresupuesto/>
      ) : (
        <NuevoPresupuesto/>
      )}
    </>
  )
}

export default AppGastos