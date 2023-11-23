import React from 'react'
import bg_image from '../Assets/image1.png'

function Event() {
  return (
    <div
      id="event"
      className="flex flex-col justify-center items-center backdrop-filter backdrop-blur-[10px] bg-opacity-30"
    >
      <img src={bg_image} alt="" className='fixed -z-10 h-full w-full object-cover opacity-10'/>
      <h1 className="text-3xl md:text-5xl mt-5 mb-12 text-center text-white">Events</h1>
      <h2 className="text-2xl md:text-3xl mb-4 text-center text-white">Debate</h2>
      <p className='mb-3 ml-10 mr-10 text-white'>Looking for a better platform to discuss the fast-moving tech climate than reddit? Well, look no further! We bring to you a very unique debating event with engrossing motions relevant to science and technology! Join our debate competition on the 29th of November, and bring out the voice within you! Register quickly as seats are limited!</p>
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSd-sRUrOD8HI4CnvThMmxy4Tg0wkugIHmO27deVjkH2DcGlDQ/viewform?usp=sf_link' target='blank' className='bg-white text-black px-8 py-4 text-xl font-bold mb-12 hover:bg-indigo-400 hover:text-white transition duration-500'>Register Now</a>
    </div>
  );
}

export default Event