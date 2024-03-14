import { useState } from 'react'
import { Form } from './Form.jsx'

export default function Latte ({ name, img, status, priceWeek, priceMonth, codInt, codOn }) {
  const [form, setForm] = useState(false)

  const handleClick = () => {
    setForm(true)
  }

  return (
    <>
      <section className='flex flex-col justify-center items-center gap-8 h-96 large bg-slate-50 rounded-md'>
        <h1 className='text-2xl text-black font-bold'>{name} </h1>
        <div className='flex justify-center items-center gap-4'>
          <figure className='w-52 h-52 lg:h-64 lg:w-64'>
            <img className='h-full w-full' src={img} alt={img} />
          </figure>

          <div className='flex flex-col gap-4'>
            <span className='text-black text-base md:text-lg font-medium'>Cod Interno: {codInt}</span>
            <span className='text-black text-base md:text-lg font-medium'>Cod Online: {codOn}</span>
            <span className='text-black text-base md:text-lg font-medium'>Precio por semana: {priceWeek}</span>
            <span className='text-black text-base md:text-lg font-medium'>Precio por mes: {priceMonth}</span>
            <span className='text-black text-base md:text-lg font-medium'>Estado: {status}</span>

            <button className='inline-block rounded bg-black p-3 w-40 uppercase' onClick={handleClick}>Alquilar</button>
          </div>
        </div>
      </section>

      {
        form ? <Form /> : null
      }
    </>
  )
}
