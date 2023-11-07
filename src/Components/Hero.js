import React from 'react'
import bg_ieee from "../Assets/295499111_1242724226559788_6188795751682533661_n.jpg"

function Hero() {
  return (
    <div id='hero' className='flex flex-col items-center pt-10 text-center'>
        <img src={bg_ieee} alt="" className='fixed -z-10 w-full'/>
        <h1 className='text-2xl md:text-4xl mt-28 mb-5 font-semibold uppercase text-slate-800'>IEEE Kolkata Section </h1>
        <h2 className='text-md md:text-xl uppercase text-slate-950'>presents</h2>
        <h1 className='text-4xl md:text-6xl mt-5 mb-20 font-bold uppercase text-slate-900'> Student Congress 2023 </h1>
        <div className='flex flex-row'>
            <div className='bg-black text-white px-8 py-4 text-xl font-bold'>29 Nov</div>
            <div className="bg-white text-black px-8 py-4 text-xl font-bold">2023</div>
        </div>
    </div>

  )
}

export default Hero
