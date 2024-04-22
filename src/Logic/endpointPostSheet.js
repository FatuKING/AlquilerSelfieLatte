export function endpointPostSheet (dataSubmit) {
  const data = {
    Sucursal: dataSubmit.nombreSucursal,
    'Nombre Completo': dataSubmit.nombre,
    'Dirrecion de correo': dataSubmit.mail,
    Telefono: dataSubmit.tel,
    'Periodo de Alquiler': dataSubmit.tiempoAlquiler
  }

  fetch('https://sheet.best/api/sheets/ea36f84a-6a31-42de-b986-1bd637284b67/tabs/Registro', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
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
