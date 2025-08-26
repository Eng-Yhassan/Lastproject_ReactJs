import React from 'react'
import image from "../images/aboutProImg.jpg"
import img1 from "../images/hakim.jpg"
import img2 from "../images/yaya.jpg"
import img3 from "../images/Yoonka.jpg"
import ICONS from '../cart_icon'
import Database from '../components/Data'
import Card from '../components/one-time-use/Card'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      {/* Left Side - Image */}

      <div className='bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white w-screen h-[450px]'>
        <h1 className='sm:text-6xl text-3xl text-center pt-14 font-bold text-white'>Creating unforgatable <span className='text-orange-600'>Events</span></h1>
        <p className='sm:w-[60%] w-[80%] text-center sm:ml-[20%] ml-[8%] text-white pt-10 sm:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem delectus aspernatur reiciendis. Autem, blanditiis eos ab praesentium vero obcaecati nam ipsa, cum minima dicta debitis.</p>
        <div className='flex gap-4 mt-10'>
          <button className='bg-orange-600 font-semibold p-2 py-3 sm:ml-[38%] ml-[8%] px-6 rounded-lg'>Explore Events</button>
          <button className='text-white font-semibold p-2 py-3 border-2 border-white px-6 rounded-lg'>Get in Touch</button>
        </div>
      </div>




      <div className='mt-20 mb-20'>
        <h1 className='sm:text-5xl text-3xl text-center font-bold'>Welcome To Event Pro</h1>
        <p className='w-[78%] text-center sm:ml-[14%] ml-[10%] pt-7 sm:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed minima est dignissimos. Itaque minima perspiciatis, iusto eligendi ullam inventore in, laboriosam autem sint dolre minima Itaque minima perspiciatis reiciendis nobis necessitatibus nesciunt, eum impedit!</p>
      
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto py-16">
      <ICONS icon="fa-solid fa-calendar-days" titles="Expert Planning" />
      <ICONS icon="fa-solid fa-users" titles="Professional Team" />
      <ICONS icon="fa-solid fa-trophy" titles="Award-Winning" />
      </div>

        
      </div>


      <div className='sm:flex px-10 gap-8 sm:space-y-0 space-y-10 bg-slate-100 items-center w-screen sm:h-[510px] h-[540px'>
        <div className='pt-12 '>
          <h2 className="sm:text-5xl text-3xl font-bold mb-4 sm:text-start text-center">About EventPro</h2>
          <p className="text-gray-600 sm:mb-6">With over a decade of experience in the events industry, EventPro has established itself asa partner for organizations seeking to create impactful and memorable experiences.</p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <i className="fa-solid fa-check text-green-500 mt-1 text-lg"></i>
              <div className="ml-3">
                <h3 className="font-semibold">Comprehensive Services</h3>
                <p className="text-gray-600 ]">From concept to execution, we handle every aspect of your event.</p>
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
                <p className="text-gray-600 ">Successfully delivered over 500 events with 98% client satisfaction rate.</p>
              </div>
            </li>
          </ul>
          <button className='bg-indigo-800 text-white font-semibold p-2 py-3 px-6 rounded-lg mt-6'>Learn More About Us</button>

        </div>

        {/* Right Side - Image */}
        <div>
          <img src={image} alt="Meeting" className="rounded-2xl shadow-lg sm:w-[1200px] sm:h-[400px]"
          />
        </div>
      </div>


      {/* Meet Team  */}


      <div className="sm:mt-20 mt-20 mb-20">
        {/* Section Title */}
        <h1 className="sm:text-5xl text-3xl text-center font-bold">Meet Our Team</h1>
        <p className="w-[78%] text-center sm:ml-[14%] ml-[10%] pt-7 sm:text-xl text-gray-600">
          We are a passionate team of three developers dedicated to creating modern and user-friendly
          websites. Our latest project focuses on building an innovative events platform that connects
          people and brings ideas to life. With creativity, teamwork, and technology, we strive to
          deliver solutions that truly make an impact.
        </p>

        {/* Team Grid */}
        <div className="mt-12 grid sm:grid-cols-3 gap-8 px-6 sm:px-20">

          {/* Team Member 1 Abdihakim*/}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <img src={img1} alt="Abdihakiim" className="rounded-2xl w-full h-64 object-cover" />

            <h2 className="mt-4 text-xl font-semibold">Abdihakim A Daud</h2>
            <p className="text-indigo-600 font-medium">Director</p>
            <p className="mt-2 text-gray-600 text-sm">
             Visionary leader who guides our projects with strategy and innovation,
             ensuring we always move forward with clear direction.
            </p>
          </div>

          {/* Team Member 2 Yerman */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <img src={img2} alt="Ayaan" className="rounded-2xl w-full h-64 object-cover" />
            <h2 className="mt-4 text-xl font-semibold">Yahye Hassan</h2>
            <p className="text-indigo-600 font-medium">Manager</p>
            <p className="mt-2 text-gray-600 text-sm">Skilled in planning and coordination, making sure our
              ideas are transformed into functional, high-quality websites.</p>
          </div>

          {/* Team Member 3 Yoonis */}
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition">
            <img src={img3} alt="Mahad" className="rounded-2xl w-full h-64 object-cover" />
            <h2 className="mt-4 text-xl font-semibold">Yoonis Gallad</h2>
            <p className="text-indigo-600 font-medium">Event Planner</p>
            <p className="mt-2 text-gray-600 text-sm">Creative planner with a sharp eye for detail,
              bringing unique ideas to shape our event-focused platforms.</p>
          </div>

        </div>
      </div>
      <div className='mt-20 mb-20'>
        <h1 className='sm:text-5xl text-3xl text-center font-bold'>Featured Events</h1>
        <p className='w-[78%] text-center sm:ml-[14%] ml-[10%] pt-7 sm:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sed minima est dignissimos. Itaque minima </p>
        <div className='flex flex-wrap gap-10 justify-center mt-16'>
          {
            Database.slice(0,3).map((items) => {
              return <div>
                <Card  events={items} />
              </div>
            })
          }

        </div>
      </div>
        



    </div>
  )
}
