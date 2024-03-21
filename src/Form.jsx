export function Form () {
  return (
    <>
      <section className='formBackground'>
        <form className='form'>
          <div className='flex justify-between'>
            <h1 className='text-2xl'>Formulario de alquiler</h1>

            <button className='text-2xl'>X</button>
          </div>
          <label>
            <span>Nombre de sucursal</span>
            <input className='p-1 h-10 text-black w-full' type='text' name='nombreSucursal' placeholder='Nombre de la sucursal' />
          </label>
          <label>
            <span>Nombre de responsable</span>
            <input className='p-1 h-10 text-black w-full' type='text' name='nombreResponsable' placeholder='Nombre de responsable' />
          </label>
          <label>
            <span className='inline-block w-full'>Fecha de inicio </span>
            <input className='p-1 h-10 text-black w-full' type='date' name='fecha' />
          </label>
          <label>
            <span className='inline-block w-full'>Email del local </span>
            <input className='p-1 h-10 text-black w-full' type='email' name='email' />
          </label>
          <label>
            <span className='inline-block w-full'>Celular</span>
            <input className='p-1 h-10 text-black w-full' type='tel' name='numeroCelular' placeholder='Numero de Celular' />
          </label>
          <label>
            Adjuntar comodato
            <input className='' type='file' name='comodato' />
          </label>
          <input className='' type='submit' value='Enviar' />
        </form>
      </section>
    </>
  )
}
