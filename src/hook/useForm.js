import { useState, useEffect } from 'react'

export function useForm ({ priceWeek }) {
  const [mensaje, setMensaje] = useState({
    sucursal: ' ',
    nombreCompleto: ' ',
    Correo: ' ',
    Telefono: ' ',
    PeriodoAlquiler: ' ',
    comodato: ' '
  })

  const priceTwoWeek = () => {
    const value = priceWeek.replace(/[$.,]/g, '').slice(0, -2)

    const price = value * 2

    return price.toLocaleString().replace(',', '.')
  }

  return { mensaje, priceTwoWeek }
}
