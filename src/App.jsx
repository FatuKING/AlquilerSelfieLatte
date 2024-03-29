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
        <figure className='h-40 w-54'>
          <img className='w-full h-full' src='/logo200b.png' alt='' />
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
