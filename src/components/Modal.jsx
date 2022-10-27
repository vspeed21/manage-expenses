import useGastos from '../hook/useGastos';

import IconoCerrarModal from '../img/cerrar.svg';
import Formulario from './Formulario';

function Modal() {
  const { closeModal } = useGastos();

  return (
    <div className='bg-black h-screen fixed z-10 top-0 left-0 right-0 bottom-0w-full'>

      <div className='relative'>
        <img 
          src={IconoCerrarModal}
          alt='icono cerrar modal'
          className='absolute top-5 right-6 w-8 hover:cursor-pointer'
          onClick={() => closeModal()}
        />
      </div>

      <Formulario/>

    </div>
  )
}

export default Modal