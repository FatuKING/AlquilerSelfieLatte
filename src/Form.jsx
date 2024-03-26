export function Form ({ onClose }) {
  return (
    <>
      <section className='formBackground'>
        <article>
          <div className='flex justify-between'>
            <h1 className='text-2xl'>Formulario de alquiler</h1>

            <button className='text-2xl' onClick={onClose}>X</button>
          </div>
          <form className='form' action='mailto:hrodriguez@cafemartinez.com.ar' method='POST'>
            <label>
              <span className='inline-block w-full text-lg'>Nombre de sucursal</span>
              <input className='p-1 h-10 text-black w-full' type='text' name='nombreSucursal' placeholder='Nombre de la sucursal' />
            </label>
            <label>
              <span className='inline-block w-full text-lg'>Nombre de responsable</span>
              <input className='p-1 h-10 text-black w-full' type='text' name='nombreResponsable' placeholder='Nombre completo' />
            </label>
            <label>
              <span className='inline-block w-full text-lg'>Email del local </span>
              <input className='p-1 h-10 text-black w-full' type='email' name='email' placeholder='sumail@cafemartinez.com.ar' />
            </label>
            <label>
              <span className='inline-block w-full text-lg'>Celular</span>
              <input className='p-1 h-10 text-black w-full' type='tel' name='numeroCelular' placeholder='Numero de Celular' />
            </label>
            <label>
              <span className='inline-block w-full text-lg'>Fecha de inicio </span>
              <input className='p-1 h-10 text-black w-full' type='date' name='fecha' />
            </label>
            <label>
              <span className='inline-block w-full text-lg'>Adjuntar Comodato</span>
              <input className='' type='file' name='comodato' />
            </label>
            <input className='' type='submit' value='Enviar' />
          </form>
        </article>
      </section>
    </>
  )
}
