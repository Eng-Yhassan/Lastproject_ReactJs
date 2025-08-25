import React from 'react'
import image from "../images/aboutProImg.jpg"

export default function Home() {
  return (
    <div>
      {/* Left Side - Image */}

      <div className='bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white w-screen h-[450px'>
        <h1 className='text-6xl text-center pt-14 font-bold text-white'>Creating unforgatable <span className='text-orange-400'>Events</span></h1>
        <p className='w-[60%] text-center ml-[20%] text-white pt-10 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem delectus aspernatur reiciendis. Autem, blanditiis eos ab praesentium vero obcaecati nam ipsa, cum minima dicta debitis.</p>
        <div className='flex gap-4 mt-10'>
          <button className='bg-orange-400 font-semibold p-2 py-3 ml-[38%] px-6 rounded-lg'>Explore Events</button>
          <button className='text-white font-semibold p-2 py-3 border-2 border-white px-6 rounded-lg'>Get in Touch</button>
        </div>
      </div>




      <div className='mt-20 mb-20'>
        <h1 className='text-5xl text-center font-bold'>Welcome To Event Pro</h1>
        <p className='w-[78%] text-center ml-[14%] pt-7 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed minima est dignissimos. Itaque minima perspiciatis, iusto eligendi ullam inventore in, laboriosam autem sint dolre minima Itaque minima perspiciatis reiciendis nobis necessitatibus nesciunt, eum impedit!</p>
        <div>

        </div>
      </div>
      

      <div className='flex px-10 gap-8'>
        <div>
          <h2 className="text-5xl font-bold mb-4">About EventPro</h2>
          <p className="text-gray-600 mb-6">With over a decade of experience in the events industry, EventPro has established itself asa partner for organizations seeking to create impactful and memorable experiences.</p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <i className="fa-solid fa-check text-green-500 mt-1 text-lg"></i>
              <div className="ml-3">
                <h3 className="font-semibold">Comprehensive Services</h3>
                <p className="text-gray-600">From concept to execution, we handle every aspect of your event.</p>
              </div>
            </li>

            <li className="flex items-start">
              <i className="fa-solid fa-check text-green-500 mt-1 text-lg"></i>
              <div className="ml-3">
                <h3 className="font-semibold">Innovative Solutions</h3>
                <p className="text-gray-600">Creative approaches that make your events stand out and engage audiences.</p>
              </div>
            </li>

            <li className="flex items-start">
              <i className="fa-solid fa-check text-green-500 mt-1 text-lg"></i>
              <div className="ml-3">
                <h3 className="font-semibold">Proven Track Record</h3>
                <p className="text-gray-600">Successfully delivered over 500 events with 98% client satisfaction rate.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div>
          <img
            src={image}
            alt="Meeting"
            className="rounded-2xl shadow-lg w-[1200px] h-[400px]"
          />
        </div>
      </div>


    </div>
  )
}
