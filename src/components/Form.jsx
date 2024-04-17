import { useForm } from '../hooks/useForm'

export function Form ({ onClose, priceWeek, priceMonth }) {
  const { sucursal, nombreCompleto, correo, telefono, errorSucursal, errorName, errorMail, errorTel, priceTwoWeek, handleSumit, validateBranch, validateName, validateMail, validateTel } = useForm({ priceWeek })

  return (
    <>
      <section className='formBackground'>
        <article className='form rounded-xl'>
          <div className='flex justify-between'>
            <h1 className='text-2xl'>Formulario de alquiler</h1>

            <button className='text-2xl' onClick={onClose}><svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' className='bi bi-x' viewBox='0 0 16 16'>
              <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708' />
            </svg>
            </button>
          </div>
          <form onSubmit={handleSumit} className='flex flex-col gap-4'>
            <label className='flex flex-col gap-1'>
              <span className='inline-block w-full'>Nombre de sucursal</span>
              <input
                onChange={validateBranch}
                value={sucursal}
                className='p-2 pt-4 pb-4 h-6 w-full bg-transparent border focus:outline-none'
                style={{ borderColor: errorSucursal ? 'red' : 'white' }}
                autoComplete='off'
                type='text'
                name='Sucursal'
                placeholder='Ej: Talcahuano'
                required
              />
              {errorSucursal && <p className='text-red-700 text-xs font-semibold'>{errorSucursal}</p>}
            </label>
            <label className='flex flex-col gap-1'>
              <span className='inline-block w-full'>Nombre completo</span>
              <input
                onChange={validateName}
                value={nombreCompleto}
                className='p-2 pt-4 pb-4 h-6 w-full bg-transparent border focus:outline-none'
                style={{ borderColor: errorName ? 'red' : 'white' }}
                autoComplete='off'
                type='text'
                name='NombreCompleto'
                placeholder='Ej: Juan Pablo Salas'
                minLength={7}
                required
              />
              {errorName && <p className='text-red-700 text-xs font-semibold'>{errorName}</p>}
            </label>
            <label className='flex flex-col gap-1'>
              <span className='inline-block w-full'>Dirreción de correo</span>
              <input
                onChange={validateMail}
                value={correo}
                className='p-2 pt-4 pb-4 h-6 w-full bg-transparent border focus:outline-none'
                style={{ borderColor: errorMail ? 'red' : 'white' }}
                autoComplete='off'
                type='email'
                name='DirrecionDecorreo'
                placeholder='Ej: sucursal@cafemartinez.com.ar'
                required
              />
              {errorMail && <p className='text-red-700 text-xs font-semibold'>{errorMail}</p>}
            </label>
            <label className='flex flex-col gap-1'>
              <span className='inline-block w-full'>Numero de contacto</span>
              <input
                onChange={validateTel}
                value={telefono}
                className='p-2 pt-4 pb-4 h-6 w-full bg-transparent border focus:outline-none'
                style={{ borderColor: errorTel ? 'red' : 'white' }}
                autoComplete='off'
                minLength={10}
                maxLength={11}
                type='tel'
                name='Telefono'
                placeholder='Ej: 1178963545'
                required
              />
              {errorTel && <p className='text-red-700 text-xs font-semibold'>{errorTel}</p>}
            </label>
            <label className='flex items-center pt-2'>
              <span className='inline-block w-full'>Periodo de alquiler</span>
              <select className='bg-transparent border p-1 focus:outline-none focus:border-2' type='select' name='TiempoDealquiler' defaultValue='Una Semana'>
                <option className='bg-transparent text-black' value='Una Semana'>1 Semana - {priceWeek}</option>
                <option className='bg-transparent text-black' value='Dos Semanas'>2 Semanas - ${priceTwoWeek()},00</option>
                <option className='bg-transparent text-black' value='Tres Semanas'>3 Semanas - {priceMonth}</option>
                <option className='bg-transparent text-black' value='Un Mes'>4 Semanas - {priceMonth}</option>
              </select>
            </label>
            <div className='flex justify-end pt-2'>
              <input className='border w-24 rounded-full active:scale-95' type='submit' value='Enviar' />
            </div>
          </form>
        </article>
      </section>
    </>
  )
}
