import React from 'react'
import bg_ieee from "../Assets/295499111_1242724226559788_6188795751682533661_n.jpg"
import bg_img from '../Assets/image1.png'

function Hero() {
  return (
    <div id='hero' className='h-[650px] pt-10 text-center'>
        <img src={bg_img} alt="" className='fixed -z-10 h-[100vh] w-full object-cover'/>
        <div className='h-full w-full backdrop-filter backdrop-blur-[2px] bg-opacity-30 items-center flex flex-col'>

          <h1 className='text-2xl md:text-4xl mt-28 mb-5 font-semibold uppercase text-white'>IEEE Kolkata Section </h1>
          <h2 className='text-md md:text-xl uppercase text-white'>presents</h2>
          <h1 className='text-4xl md:text-6xl mt-5 mb-20 font-bold uppercase subpixel-antialiased text-white [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-black'> Student Congress 2023 </h1>
          <div className='flex flex-row'>
              <div className='bg-black text-white px-8 py-4 text-xl font-bold'>29 Nov</div>
              <div className="bg-white text-black px-8 py-4 text-xl font-bold">2023</div>
          </div>
        </div>
    </div>

  )
}

export default Hero
