export function Form ({ onClose, priceWeek, priceMonth }) {
  return (
    <>
      <section className='formBackground'>
        <article className='form rounded-xl'>
          <div className='flex justify-between'>
            <h1 className='text-2xl'>Formulario de alquiler</h1>

            <button className='text-2xl' onClick={onClose}><svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' class='bi bi-x' viewBox='0 0 16 16'>
              <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708' />
            </svg>
            </button>
          </div>
          <form className='flex flex-col gap-2' action='mailto:hrodriguez@cafemartinez.com.ar' method='POST'>
            <label className='flex flex-col gap-1'>
              <span className='inline-block w-full text-lg'>Nombre de sucursal</span>
              <input className='p-1 h-10 w-full bg-transparent border focus:outline-none focus:border-2' type='text' name='nombreSucursal' placeholder='Nombre de la sucursal' />
            </label>
            <label className='flex flex-col gap-1'>
              <span className='inline-block w-full text-lg'>Nombre del responsable</span>
              <input className='p-1 h-10 w-full bg-transparent border focus:outline-none focus:border-2' type='text' name='nombreResponsable' placeholder='Nombre completo' />
            </label>
            <label className='flex flex-col gap-1'>
              <span className='inline-block w-full text-lg'>Email del local </span>
              <input className='p-1 h-10 w-full bg-transparent border focus:outline-none focus:border-2' type='email' name='email' placeholder='mail@cafemartinez.com.ar' />
            </label>
            <label className='flex flex-col gap-1'>
              <span className='inline-block w-full text-lg'>Celular</span>
              <input className='p-1 h-10 w-full bg-transparent border focus:outline-none focus:border-2' type='tel' name='numeroCelular' placeholder='Numero de Celular' />
            </label>
            <label className='flex flex-col gap-1'>
              <span className='inline-block w-full text-lg'>Periodo de alquiler</span>
              <select className='w-1/2 bg-transparent border p-1 focus:outline-none focus:border-2'>
                <option className='bg-transparent text-black' value='week1' selected>Una Semana - {priceWeek}</option>
                <option className='bg-transparent text-black' value='week1'>Dos Semanas - {priceWeek}</option>
                <option className='bg-transparent text-black' value='week1'>Tres Semanas - {priceWeek}</option>
                <option className='bg-transparent text-black' value='week1'>Un Mes - {priceMonth}</option>
              </select>
            </label>
            <label className='flex flex-col gap-1'>
              <span className='inline-block w-full text-lg'>Descargar Comodato</span>
              <a href='public/Comodato.docx' download className='flex gap-2 text-sm 2xl:text-base border p-1 pl-2 pr-2 w-32 rounded active:scale-95'>Comodato <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-download' viewBox='0 0 16 16'>
                <path d='M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5' />
                <path d='M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z' />
              </svg>
              </a>
            </label>
            <label className='flex flex-col gap-1'>
              <span className='inline-block w-full text-lg'>Adjuntar Comodato</span>
              <input className='file:bg-black file:text-violet-700 file:rounded-full file:border-none file:p-1 file:pl-3 file:pr-3' type='file' name='comodato' />
            </label>
            <div className='flex justify-center'>
              <input className='border w-24 rounded active:scale-95' type='submit' value='Enviar' />
            </div>
          </form>
        </article>
      </section>
    </>
  )
}
