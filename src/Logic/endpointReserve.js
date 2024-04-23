export function endpointReserve () {
  const data = {
    Latte1: new Date(),
    Latte2: '',
    Latte3: ''
  }

  fetch('https://sheet.best/api/sheets/ea36f84a-6a31-42de-b986-1bd637284b67/tabs/Reserva', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((r) => r.json())
    .then((data) => {
      console.log('Reserva cargada')
    })
    .catch((error) => {
      console.log(error)
    })
}
