import React from 'react'
import bg_image from '../Assets/295499111_1242724226559788_6188795751682533661_n.jpg'

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
            <span class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">Event Details</span>
          </h2>
          <p className='text-white text-md md:text-2xl my-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rem soluta doloribus delectus quia assumenda. Veritatis, cum reiciendis. Neque expedita iste itaque et aliquid fuga, in distinctio quo consequuntur laboriosam illo officia nam pariatur aut maxime asperiores beatae tempore omnis odit? Labore consequatur ipsam aspernatur rerum, quos tenetur nihil minus illum ducimus? Neque, omnis nihil. Porro, ratione expedita quisquam nulla molestiae velit voluptatum consequatur dolore quaerat, corporis incidunt nisi obcaecati! Repellendus laudantium ut vero quos. Quis aliquam itaque nemo quisquam suscipit unde aperiam alias hic! Eligendi dolor rem perspiciatis voluptate similique deserunt ex in sequi. Doloremque distinctio ullam vel nostrum, at modi aliquid nisi harum quas. Voluptatum expedita quaerat ullam magni delectus reprehenderit dolore asperiores, adipisci est officiis quae quod enim non explicabo illum laborum hic velit autem commodi!
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Details