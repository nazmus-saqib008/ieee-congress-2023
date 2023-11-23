import React, { useState, useEffect } from 'react';

import bg_ieee from "../Assets/295499111_1242724226559788_6188795751682533661_n.jpg"
import bg_img from '../Assets/image1.png'

function Hero() {
  const calculateTimeRemaining = () => {
    const targetDate = new Date(2023, 10, 29, 11, 0, 0); // 11am, 29/10/2023
    const now = new Date();
    const difference = targetDate - now; // ms

    const time = Math.max(0, Math.floor(difference / 1000)); 
    let rem = time;
    const days = Math.floor(rem / (3600 * 24));
    rem = rem % (3600 * 24);
    const hours = Math.floor(rem / 3600);
    rem = rem % 3600;
    const minutes = Math.floor(rem / 60);
    rem = rem % 60
    const seconds = rem % 60;
    return {
      days: `${days}`,
      hours: `${hours < 10 ? '0' : ''}${hours}`,
      minutes: `${minutes < 10 ? '0' : ''}${minutes}`,
      seconds:  `${seconds < 10 ? '0' : ''}${seconds}`
    }
  };

  const [time, setTime] = useState(calculateTimeRemaining);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(calculateTimeRemaining);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div id='hero' className='pt-10 text-center'>
        <img src={bg_img} alt="" className='fixed -z-10 h-[100vh] w-full object-cover'/>
        <div className='h-full w-full backdrop-filter backdrop-blur-[2px] bg-opacity-30 items-center flex flex-col'>

          <h1 className='text-2xl md:text-4xl mt-28 mb-5 font-semibold uppercase text-white'>IEEE Kolkata Section </h1>
          <h2 className='text-md md:text-xl uppercase text-white'>presents</h2>
          <h1 className='text-4xl md:text-6xl mt-5 mb-20 font-bold uppercase subpixel-antialiased text-white [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-black'> Student Congress 2023 </h1>
          <div className='flex flex-row'>
              <div className='bg-black text-white px-8 py-4 text-xl font-bold'>29 Nov</div>
              <div className="bg-white text-black px-8 py-4 text-xl font-bold">2023</div>
          </div>
          <div className='flex flex-col md:flex-row mt-2'>
              <div className='bg-white text-black px-3 py-4 text-xl font-bold'>{time.days}</div>
              <div className="bg-black text-white px-5 py-4 text-xl font-bold">days</div>
              <div className='bg-white text-black px-3 py-4 text-xl font-bold'>{time.hours}</div>
              <div className="bg-black text-white px-5 py-4 text-xl font-bold">hours</div>
              <div className='bg-white text-black px-3 py-4 text-xl font-bold'>{time.minutes}</div>
              <div className="bg-black text-white px-5 py-4 text-xl font-bold">minutes</div>
              <div className='bg-white text-black px-3 py-4 text-xl font-bold'>{time.seconds}</div>
              <div className="bg-black text-white px-5 py-4 text-xl font-bold">seconds to go!</div>
          </div>
          <a href='https://docs.google.com/forms/d/e/1FAIpQLScgb_lFOvUSgzurCLvoHZmtg-TwFvI_ykAVYD3l6a3HgEle_Q/viewform?usp=send_form' target='blank' className='bg-white text-black px-8 py-4 text-xl font-bold mt-12 mb-12 hover:bg-indigo-400 hover:text-white transition duration-500'>Register Now</a>
        </div>
    </div>

  )
}

export default Hero
