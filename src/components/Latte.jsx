import { useState } from 'react'
import { Form } from './Form.jsx'

export default function Latte ({ name, img, status, priceWeek, priceMonth, printWeek, printMonth, codInt, codOn }) {
  const [form, setForm] = useState(false)

  const handleClick = () => {
    if (status === 'Disponible') { setForm(true) }
  }

  const onClose = () => {
    setForm(false)
  }

  const styleStatus = (status) => {
    let color
    if (status === 'Disponible') {
      color = 'text-green-900'
    } else if (status === 'Reservada') {
      color = 'text-orange-900'
    } else {
      color = 'text-red-900'
    }
    return color
  }

  return (
    <>
      <section className='flex flex-col justify-center items-center gap-4 large p-2 rounded-md'>
        <h1 className='text-xl 2xl:text-2xl text-black font-bold'>{name} </h1>
        <div className='flex justify-center items-center gap-4'>
          <figure className='md:w-52 md:h-52 2xl:h-60 2xl:w-60'>
            <img className='h-full w-full' src={img} alt={img} />
          </figure>

          <div className='flex flex-col gap-2'>
            <span className='text-black text-sm 2xl:text-lg font-medium'>Cod Interno: {codInt}</span>
            <span className='text-black text-sm 2xl:text-lg font-medium'>Cod Online: {codOn}</span>
            <span className='text-black text-sm 2xl:text-lg font-medium'>Precio por semana: {priceWeek}</span>
            <span className='text-black text-sm 2xl:text-lg font-medium'>Hasta: {printWeek}</span>
            <span className='text-black text-sm 2xl:text-lg font-medium'>Precio por mes: {priceMonth}</span>
            <span className='text-black text-sm 2xl:text-lg font-medium'>Hasta: {printMonth}</span>
            <span className='text-black text-sm 2xl:text-lg font-medium'>Estado: <strong className={styleStatus(status)}>{status}</strong></span>

            <button className='inline-block text-sm 2xl:text-lg rounded bg-black p-2 w-40 uppercase active:scale-95' onClick={handleClick}>Alquilar</button>
          </div>
        </div>
      </section>

      {
        form ? <Form onClose={onClose} priceMonth={priceMonth} priceWeek={priceWeek} /> : null
      }
    </>
  )
}
