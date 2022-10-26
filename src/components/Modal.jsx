import useGastos from '../hook/useGastos';

import IconoCerrarModal from '../img/cerrar.svg';

function Modal() {
  const { closeModal } = useGastos();

  return (
    <div className='bg-black h-screen absolute top-0 left-0 w-full'>

      <div className='relative'>
        <img 
          src={IconoCerrarModal}
          alt='icono cerrar modal'
          className='absolute top-5 right-6 w-8 hover:cursor-pointer'
          onClick={() => closeModal()}
        />
      </div>
    </div>
  )
}

export default Modal