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

    if (!query.match(/^[^{}/><?'":;+=\-_)(*&^%$#!@[\]]+$/g)) { // devuelve True si tiene algun simbolo
      setErrorSucursal('El nombre no puede contener simbolos')
      return
    }

    if (query.match(/^[^{}/><?'":;+=\-_)(*&^%$#!@[\]]+$/g)) {
      setErrorSucursal(null)
    }
  }

  const validateName = (e) => {
    const query = e.target.value

    setNombreCompleto(query)

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
    }
  }

  const validateMail = (e) => {
    const query = e.target.value

    setCorreo(query)

    if (!query.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      setErrorMail('Dirrecion de correo no valida')
      return
    }

    if (query.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
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
