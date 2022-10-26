export function formatearCantidad(cantidad) {
  return cantidad.toLocaleString('en-US', {
    style: 'currency', 
    currency: 'USD'
  });
}

export function formatearFecha(fecha){
  const fechaNueva = new Date(fecha);

  return fechaNueva.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
}