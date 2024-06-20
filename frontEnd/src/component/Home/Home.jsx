import React from 'react'
import "./Home.css"
import MultiItemCarousel from './MultiItemCarousel'

export const Home = () => {
  return (
    <div className=''>
        <section className='banner -z-50 relative flex flex-col justify-center items-center'>
            <div className='w-[50vw] z-10 text-center'>
                <p className='text-2x1 lg:text-6xl font-bold z-10 py-5' style={{fontSize:50}}>Jay's Food</p>
                <p className='z-10 text-gray-300 text-x1 lg:text-4x1' style={{fontSize:30}}>Taste the convenience: Food, fast and delivered.</p>
            </div>
            <div className='cover absolute top-0 left-0 right-0'>
            </div>
            <div className='fadout'></div>
        </section>
        <section className='p-10 lg:py-10 lg:px-20'>
          <p className='text-2x1 font-semibold text-gray-400 py-3 pb-10' style={{fontSize:30}}>Top Meals</p>
          <MultiItemCarousel/>
        </section>
    </div>
  )
}