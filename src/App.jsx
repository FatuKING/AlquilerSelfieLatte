import { useState, useEffect } from 'react'
import Latte from './Latte.jsx'
import { api } from './api.js'

function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <header>
        <h1 className='text-black text-3xl md:text-4xl font-bold '>Alquiler Selfie Latte</h1>
        <figure className='h-48 w-48'>
          <img className='w-full h-full' src='/logoMartinez.png' alt='' />
        </figure>
      </header>
      <main className='wrapper'>
        {
          data.map((selfie, index) => {
            return (
              <Latte key={index} codInt={selfie.codInt} codOn={selfie.codOn} name={selfie.name} priceWeek={selfie.priceWeek} priceMonth={selfie.priceMonth} img={selfie.img} status={selfie.status} />
            )
          })
        }
      </main>
    </>
  )
}

export default App
