async function obtenerDatos() {
    const url = 'https://sheetdb.io/api/v1/yw2wlsgzo8l1q';
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error(`HTTP error! status: ${respuesta.status}`);
        }
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.log('Ha ocurrido un error: ' + error.message);
    }
}

obtenerDatos().then(datos => {
    console.log(datos);
});