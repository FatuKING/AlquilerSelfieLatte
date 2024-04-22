import { useState } from 'react'
import { endpointPostSheet } from '../Logic/endpointPostSheet'

export function useForm ({ priceWeek }) {
  const [branch, setBranch] = useState('')
  const [fullName, setFullName] = useState('')
  const [mail, setMail] = useState('')
  const [phone, setPhone] = useState('')

  const [errorBranch, setErrorBranch] = useState('')
  const [errorFullName, setErrorFullName] = useState('')
  const [errorMail, setErrorMail] = useState('')
  const [errorPhone, setErrorPhone] = useState('')

  const priceTwoWeek = () => {
    const value = priceWeek.replace(/[$.,]/g, '').slice(0, -2)

    const price = value * 2

    return price.toLocaleString().replace(',', '.')
  }

  const handleSumit = (e) => {
    e.preventDefault()
    const form = new window.FormData(e.target)

    const dataSubmit = {
      nombreSucursal: form.get('Sucursal'),
      nombre: form.get('NombreCompleto'),
      mail: form.get('DirrecionDecorreo'),
      tel: form.get('Telefono'),
      tiempoAlquiler: form.get('TiempoDealquiler')
    }

    endpointPostSheet(dataSubmit)
  }

  const validateBranch = (e) => {
    const query = e.target.value

    setBranch(query)

    if (query.match(/^$/)) {
      setErrorBranch(null)
      return
    }

    if (!query.match(/^[^{}/><?'":;+=\-_)(*&^%$#!@[\]]+$/g)) { // devuelve True si tiene algun simbolo
      setErrorBranch('El nombre no puede contener simbolos')
      return
    }

    if (query.match(/^[^{}/><?'":;+=\-_)(*&^%$#!@[\]]+$/g)) {
      setErrorBranch(null)
    }

    if (query.match(/^$/)) {
      setErrorBranch(null)
    }
  }

  const validateName = (e) => {
    const query = e.target.value

    setFullName(query)

    if (query.match(/^$/)) {
      setErrorFullName(null)
      return
    }

    if (!query.match(/^[^{}/><?'":;+=\-_)(*&^%$#!@]+$/g)) {
      setErrorFullName('El nombre no puede contener simbolos')
      return
    }

    if (!query.match(/^\D+$/)) {
      setErrorFullName('El nombre no puede contener numeros')
      return
    }

    if (query.match(/^\D+$/)) {
      setErrorFullName(null)
      return
    }

    if (query.match(/^[^{}/><?'":;+=\-_)(*&^%$#!@]+$/g)) {
      setErrorFullName(null)
    }
  }

  const validateMail = (e) => {
    const query = e.target.value

    setMail(query)

    if (query.match(/^$/)) {
      setErrorMail(null)
      return
    }

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

    setPhone(query)

    if (query.match(/^$/)) {
      setErrorPhone(null)
      return
    }

    if (!query.match(/^[^{}/><?'":;+=\-_)(*&^%$#!@[\]]+$/g)) { // devuelve True si tiene algun simbolo
      setErrorPhone('El nombre no puede contener simbolos')
      return
    }

    if (query.match(/[a-zA-Z]/)) { // devuelve true si tiene alguna letra o cualquier posicion
      setErrorPhone('El nombre no puede contener letras')
      return
    }

    if (!query.match(/[a-zA-Z]/)) {
      setErrorPhone(null)
      return
    }

    if (query.match(/^[^{}/><?'":;+=\-_)(*&^%$#!@]+$/g)) {
      setErrorPhone(null)
    }
  }

  return { branch, fullName, mail, phone, errorBranch, errorFullName, errorMail, errorPhone, priceTwoWeek, handleSumit, validateBranch, validateName, validateMail, validateTel }
}
