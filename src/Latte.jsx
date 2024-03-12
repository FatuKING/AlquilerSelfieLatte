export default function Latte ({ name, img, status, priceWeek, priceMonth, codInt, codOn }) {
  return (
    <>
      <section className='flex flex-col justify-center items-center gap-8 h-96 large bg-slate-50 rounded-md'>
        <h1 className='text-2xl text-black font-bold'>{name} </h1>
        <div className='flex justify-center items-center gap-4'>
          <figure className='h-52 w-52'>
            <img className='h-full w-full' src={img} alt={img} />
          </figure>

          <div className='flex flex-col gap-4'>
            <span className='text-black text-lg'>Cod Interno: {codInt}</span>
            <span className='text-black text-lg'>Cod Online: {codOn}</span>
            <span className='text-black text-lg'>Precio por mes: {priceMonth}</span>
            <span className='text-black text-lg'>Precio por semana: {priceWeek}</span>
            <span className='text-black text-lg'>Estado: {status}</span>
          </div>
        </div>
      </section>
    </>
  )
}
