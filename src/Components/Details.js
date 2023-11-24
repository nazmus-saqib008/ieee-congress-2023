import React from 'react'
import bg_image from '../Assets/img2.jpg'

function Details() {
  return (
    <>
    <div class="relative bg-gray-900">
      <div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
        <div class="h-full w-full xl:grid xl:grid-cols-2">
          <div class="h-full xl:relative xl:col-start-2">
            <img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src={bg_image} alt="People working on laptops"/>
            <div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
          </div>
        </div>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 class="text-lg md:text-4xl font-semibold tracking-wide uppercase">
            <span class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent font-bold text-[2rem] sm:text-[3rem]">Event Details</span>
          </h2>
          <p className='text-white text-md md:text-2xl my-20'>
          IEEE emphasizes advancing technology for societal betterment. As the largest technical network and one of the oldest, IEEE encourages young individuals to engage in different student branches that serve as exemplary platforms that contribute to their knowledge and expertise. 
IEEE Kolkata Section presents before all, a day-long event aimed at encouraging participation and interaction among various student branch members! The primary objective of this event is to showcase the activities undertaken by the student branches throughout the year and to interact with the members and office-bearers of IEEE Kolkata Section. Furthermore, IEEE Kolkata Section members will address any concerns raised by the students regarding their branch-related activities.
The event will also feature several IEEE seniors who will discuss the key benefits of IEEE to the students, along with a coding competition, from which the jury members will select the best student branch based on the performance of various SBs activities under IEEE Kolkata Section throughout the year, and the winning student branch will be awarded.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Details