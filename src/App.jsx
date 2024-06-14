import { useState, useEffect } from 'react'
import Latte from './components/Latte.jsx'
import { getData } from './Logic/getData.js'

export default function App () {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData()
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <header className='flex items-center justify-center w-full bg-verde/90 h-16'>
        <nav className='w-4/5 xl:w-3/4 flex justify-between items-center'>
          <figure className='w-40'>
            <img className='w-full h-full' src='/logoMartinez.png' alt='Logo Café Martínez' />
          </figure>

          <i className='bi bi-list text-5xl' />
        </nav>
      </header>
      <main className='w-4/5 xl:w-3/4 wrapper pt-36 gap-10'>
        {
          data.map((selfie, index) => {
            return (
              <Latte
                key={index}
                codInt={selfie.codInt}
                codOn={selfie.codOn}
                name={selfie.name}
                priceWeek={selfie.priceWeek}
                printWeek={selfie.printWeek}
                img={selfie.img}
                priceMonth={selfie.priceMonth}
                printMonth={selfie.printMonth}
                status={selfie.status}
              />
            )
          })
        }
      </main>
    </>
  )
}
