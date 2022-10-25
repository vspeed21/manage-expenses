import { GastosProvider } from "./context/GastosProvider"
import AppGastos from "./components/AppGastos"


function App() {

  return (
    <GastosProvider>
      <AppGastos />
    </GastosProvider>
  )
}

export default App
