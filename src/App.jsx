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
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Alquiler Selfie Latte</h1>
      </div>
      <main className='grid grid-cols-1 md:grid-cols-3 gap-10 h-auto grid-column: 1 grid-row: 2 / 5'>
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
