import { useState, useEffect } from 'react'
import Latte from './components/Latte.jsx'
import { getData } from './Logic/getData.js'

export default function App () {
  const [data, setData] = useState([])
  const [active, setActive] = useState(false)

  const toggleMenu = () => {
    setActive(!active)
  }

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
      <header className='flex items-center justify-center w-full bg-verde h-16'>
        <nav className='w-11/12 sm:w-2/3 xl:w-4/5 flex justify-between items-center'>
          <figure className='w-40'>
            <img className='w-full h-full' src='/logoMartinez.png' alt='Logo Café Martínez' />
          </figure>

          <div className={`hamburger ${active ? 'open' : ''}`} onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </div>
        </nav>
      </header>

      <main className='w-11/12 sm:w-2/3 xl:w-4/5 grid grid-cols-1 xl:grid-cols-3 items-center h-screen md:gap-5'>
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
