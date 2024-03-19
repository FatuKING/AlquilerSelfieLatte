import React from 'react'
export function Form () {
  return (
    <> <h1>Formulario de alquiler</h1>
    <form>
        <label>
          Nombre de sucursal:
          <input type="text" name="nombreSucursal" />
        </label>
        <label>
          Nombre de responsable:
          <input type="text" name="nombreResponsable" />
        </label>
        <label>
          Fecha:
          <input type="date" name="fecha" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Teléfono celular:
          <input type="tel" name="numeroCelular" />
        </label>
        <label>
          Adjuntar comodato:
          <input type="file" name="comodato" />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}
