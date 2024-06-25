import { useState } from 'react'
import { Form } from './Form.jsx'

export default function Latte ({ name, img, status, priceWeek, priceMonth, codInt, codOn }) {
  const [form, setForm] = useState(false)

  const handleClick = () => {
    if (status === 'Disponible') { setForm(true) }
  }

  const onClose = () => {
    setForm(false)
  }

  return (
    <>
      <section className='flex flex-col justify-center items-center gap-2 bg-verde p-2 rounded-md shadow-md shadow-black'>
        <h1 className='text-lg md:text-2xl text-gray-300 font-bold'>{name}</h1>
        <div className='flex items-center w-full lg:gap-3 xl:gap-0'>
          <figure className='w-2/4 lg:w-1/3 xl:w-2/4 aspect-square'>
            <img className='h-full w-full' src={img} alt={img} />
          </figure>

          <ul className='flex flex-col gap-3 xl:gap-2 w-2/4 xl:w-2/3'>
            <li className='text-gray-300 text-sm md:text-base xl:text-sm font-semibold'>Cod Interno: {codInt}</li>
            <li className='text-gray-300 text-sm md:text-base xl:text-sm font-semibold'>Cod Online: {codOn}</li>
            <li className='flex gap-2 text-gray-300 text-sm md:text-base xl:text-sm font-semibold'>Semanal: {priceWeek} <div className='tooltip'><i className='bi bi-question-circle-fill' /></div></li>
            <li className='flex gap-2 text-gray-300 text-sm md:text-base xl:text-sm font-semibold'>Mensual: {priceMonth}<div className='tooltip'><i className='bi bi-question-circle-fill' /></div></li>
            <button className='inline-block text-sm md:text-base xl:text-sm font-semibold rounded bg-naranja p-1 w-2/3 uppercase active:scale-95' onClick={handleClick}>Alquilar</button>
          </ul>

        </div>
      </section>

      {
        form ? <Form onClose={onClose} priceMonth={priceMonth} priceWeek={priceWeek} /> : null
      }
    </>
  )
}
