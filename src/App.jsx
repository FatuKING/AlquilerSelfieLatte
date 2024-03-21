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
    
      </main>
    </>
  )
}

export default App
