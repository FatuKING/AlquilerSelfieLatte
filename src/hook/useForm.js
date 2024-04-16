import { useState } from 'react'

export function useForm ({ priceWeek }) {
  const [sucursal, setSucursal] = useState('')
  const [nombreCompleto, setNombreCompleto] = useState('')
  const [correo, setCorreo] = useState('')
  const [telefono, setTelefono] = useState('')
  const [periodoAlquiler, setPeriodoAlquiler] = useState('')
  const [comodato, setComodato] = useState(null)

  const [errorSucursal, setErrorSucursal] = useState('')
  const [errorName, setErrorName] = useState('')
  const [errorMail, setErrorMail] = useState('')
  const [errorTel, setErrorTel] = useState('')

  const priceTwoWeek = () => {
    const value = priceWeek.replace(/[$.,]/g, '').slice(0, -2)

    const price = value * 2

    return price.toLocaleString().replace(',', '.')
  }

  const handleSumit = (e) => {
    e.preventDefault()
    const form = new window.FormData(e.target)
    setSucursal(form.get('Sucursal'))
    setNombreCompleto(form.get('NombreCompleto'))
    setCorreo(form.get('DirrecionDecorreo'))
    setTelefono(form.get('Telefono'))
    setPeriodoAlquiler(form.get('TiempoDealquiler'))
    setComodato(form.get('Comodato'))

    console.log({ sucursal, nombreCompleto, correo, telefono, periodoAlquiler, comodato })
  }

  const validateBranch = (e) => {
    const query = e.target.value

    setSucursal(query)

    if (query.length < 4) {
      setErrorSucursal('Nombre demasiado corto')
      return
    }

    if (!query.match(/^[^{}/><?'":;+=\-_)(*&^%$#!@]+$/g)) {
      setErrorSucursal('El nombre no puede contener simbolos')
      return
    }

    if (!query.match(/^[A-Za-z\s]+$/)) {
      setErrorSucursal(null)
      return
    }

    if (query.length > 4) {
      setErrorSucursal(null)
    }
  }

  const validateName = (e) => {
    const query = e.target.value

    setNombreCompleto(query)

    if (query.length < 4) {
      setErrorName('Nombre demasiado corto')
      return
    }

    if (!query.match(/^[^{}/><?'":;+=\-_)(*&^%$#!@]+$/g)) {
      setErrorName('El nombre no puede contener simbolos')
      return
    }

    if (!query.match(/^\D+$/)) {
      setErrorName('El nombre no puede contener numeros')
      return
    }

    if (query.match(/^\D+$/)) {
      setErrorName(null)
      return
    }

    if (query.match(/^[^{}/><?'":;+=\-_)(*&^%$#!@]+$/g)) {
      setErrorName(null)
      return
    }

    if (query.length > 4) {
      setErrorName(null)
    }
  }

  const validateMail = (e) => {
    const query = e.target.value

    setCorreo(query)

    if (query.length < 4) {
      setErrorMail('Nombre demasiado corto')
      return
    }

    if (!query.match(/^[^{}/><?'":;+=\-_)(*&^%$#!@]+$/g)) {
      setErrorMail('El nombre no puede contener simbolos')
      return
    }

    if (!query.match(/^\D+$/)) {
      setErrorMail('El nombre no puede contener numeros')
      return
    }

    if (query.match(/^\D+$/)) {
      setErrorMail(null)
      return
    }

    if (query.match(/^[^{}/><?'":;+=\-_)(*&^%$#!@]+$/g)) {
      setErrorMail(null)
      return
    }

    if (query.length > 4) {
      setErrorMail(null)
    }
  }

  const validateTel = (e) => {
    const query = e.target.value

    setTelefono(query)

    if (!query.match(/^[^{}/><?'":;+=\-_)(*&^%$#!@[\]]+$/g)) { // devuelve True si tiene algun simbolo
      setErrorTel('El nombre no puede contener simbolos')
      return
    }

    if (query.match(/[a-zA-Z]/)) { // devuelve true si tiene alguna letra o cualquier posicion
      setErrorTel('El nombre no puede contener letras')
      return
    }

    if (!query.match(/[a-zA-Z]/)) {
      setErrorTel(null)
      return
    }

    if (query.match(/^[^{}/><?'":;+=\-_)(*&^%$#!@]+$/g)) {
      setErrorTel(null)
    }
  }

  return { sucursal, nombreCompleto, correo, telefono, periodoAlquiler, comodato, errorSucursal, errorName, errorMail, errorTel, priceTwoWeek, handleSumit, validateBranch, validateName, validateMail, validateTel }
}
