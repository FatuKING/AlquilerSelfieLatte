export function Form () {
  return (
    <>
      <section className='formBackground'>
        <form className='form'>
          <div>
            <h1>Formulario de alquiler</h1>

            <button className=''>X</button>
          </div>
          <label>
            Nombre de sucursal:
            <input type='text' name='nombreSucursal' />
          </label>
          <label>
            Nombre de responsable:
            <input type='text' name='nombreResponsable' />
          </label>
          <label>
            Fecha:
            <input type='date' name='fecha' />
          </label>
          <label>
            Email:
            <input type='email' name='email' />
          </label>
          <label>
            Teléfono celular:
            <input type='tel' name='numeroCelular' />
          </label>
          <label>
            Adjuntar comodato:
            <input type='file' name='comodato' />
          </label>
          <input type='submit' value='Enviar' />
        </form>
      </section>
    </>
  )
}
