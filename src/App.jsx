import { GastosProvider } from "./context/GastosProvider"
import { ModalProvider } from "./context/ModalProvider"
import AppGastos from "./components/AppGastos"


function App() {

  return (
    <ModalProvider>
      <GastosProvider>
        <AppGastos/>
      </GastosProvider>
    </ModalProvider>
  )
}

export default App
