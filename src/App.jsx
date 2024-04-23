import { useState, useEffect } from 'react'
import Latte from './components/Latte.jsx'
import { api } from './Logic/api.js'

export default function App () {
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
      <header className='h-auto p-10'>
        <figure className='imgSize'>
          <img className='w-full h-full aspect-auto' src='/logoMartinez.png' alt='Logo Cafe Martinez' />
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
