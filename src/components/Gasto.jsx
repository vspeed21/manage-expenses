import { formatearFecha } from '../helpers';
import IconoAhorro from '../img/icono_ahorro.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoGastos from '../img/icono_gastos.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg';

const diccionarioIconos = {
  ahorro : IconoAhorro,
  comida : IconoComida,
  casa :  IconoCasa,
  gastos : IconoGastos,
  ocio : IconoOcio,
  salud : IconoSalud,
  suscripciones : IconoSuscripciones,
}


function Gasto({gasto}) {
  const {nombre, cantidad, categoria, id, fecha} = gasto

  return (
    <div className='bg-white shadow p-5 rounded max-w-2xl mt-5 mx-auto flex justify-between items-center mb-5'>
      <div className='flex gap-5 items-center'>
        <img
          src={diccionarioIconos[categoria]}
          alt={`imagen categoria ${nombre}`}
          className='w-20'
        />

        <div className='space-y-1'>
          <p className='text-xl'>{nombre}</p>
          <p className='capitalize'>{categoria === 'gastos' ? 'Gastos varios' : categoria}</p>
          <p className='text-gray-600'>
            Agregado el: {''}
            <span className='font-bold'>
              {formatearFecha(fecha)}
            </span>
          </p>
        </div>
      </div>

      <p className='font-bold text-xl'>${cantidad}</p>
    </div>
  )
}

export default Gasto