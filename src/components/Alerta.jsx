
const Alerta = ({mensaje, tipo}) => {
  return <p className={`border-l-4 py-3 text-center my-4 uppercase font-bold ${tipo === 'error' ? 'bg-red-100 border-red-800 text-red-700' : 'bg-green-100 border-green-800 text-green-700'}`}>
    {mensaje}
  </p>
}

export default Alerta