import Latte from './Latte'

function App () {
  return (
    <>
      <header>
        <h1 className='text-6xl font-bold'>Alquiler Selfie Latte - Cafe Martinez</h1>
      </header>
      <main className='flex gap-10'>
        <Latte name='Selfie Latte #1' img='/selfiLatte.png' codInt='SL01' codOn='195341' priceMonth='$79.560,00' priceWeek='$26.520,00' status='Disponible' />
        <Latte name='Selfie Latte #2' img='/selfiLatte.png' codInt='SL01' codOn='195341' priceMonth='$79.560,00' priceWeek='$26.520,00' status='Disponible' />
        <Latte name='Selfie Latte #3' img='/selfiLatte.png' codInt='SL01' codOn='195341' priceMonth='$79.560,00' priceWeek='$26.520,00' status='Disponible' />

      </main>
    </>
  )
}

export default App
