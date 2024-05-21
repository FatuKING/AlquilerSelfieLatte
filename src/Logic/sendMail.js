export function sendMail (dataSubmit) {
  const data = {
    Sucursal: dataSubmit.nombreSucursal,
    Nombre: dataSubmit.nombre,
    Correo: dataSubmit.mail,
    Telefono: dataSubmit.tel,
    Periodo: dataSubmit.tiempoAlquiler
  }

  fetch('https://script.google.com/macros/s/AKfycbx5AzfVfRVasu8Ps-PteC60Qv4NC2a2zs_x3E5aTPSVXOfVYSQxy0IMQsNyyZqANmbe/exec', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: JSON.stringify(data)
  })
    .then((r) => r.json())
    .then((data) => {
      console.log('Formulario Recibido')
    })
    .catch((error) => {
      console.log(error)
    })
}
