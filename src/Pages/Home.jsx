import React from 'react'

export default function Home() {
  return (
    <div>
      <div className='bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white w-screen h-[450px]'>
        <h1 className='text-6xl text-center pt-14 font-bold text-white'>Creating unforgatable <span className='text-orange-400'>Events</span></h1>
        <p className='w-[60%] text-center ml-[20%] text-white pt-10 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem delectus aspernatur reiciendis. Autem, blanditiis eos ab praesentium vero obcaecati nam ipsa, cum minima dicta debitis.</p>
        <div className='flex gap-4 mt-20'>
          <button className='bg-orange-400 font-semibold p-2 py-3 ml-[38%] px-6 rounded-lg'>Explore Events</button>
          <button className='text-white font-semibold p-2 py-3 border-2 border-white px-6 rounded-lg'>Get in Touch</button>
        </div>
      </div>
      <div className='mt-20 mb-20'>
        <h1 className='text-5xl text-center font-bold'>Welcome To Event Pro</h1>
        <p className='w-[78%] text-center ml-[14%] pt-7 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed minima est dignissimos. Itaque minima perspiciatis, iusto eligendi ullam inventore in, laboriosam autem sint dolre minima Itaque minima perspiciatis reiciendis nobis necessitatibus nesciunt, eum impedit!</p>
        <div></div>
      </div>

    </div>
  )
}
