import React, { useState } from 'react'
import Database from '../components/Data'
import Card from '../components/one-time-use/Card'

function Events() {
  const[category, setCategory] = useState("")

  const FilterDatabase = Database.filter((data) => {
    const CategoryData = category ? data.category === category : true
    return CategoryData
  })
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white py-20 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Our <span className="text-orange-400">Events</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Discover our comprehensive portfolio of events and seminars designed <br /> to inspire, educate, and connect.
          </p>

        </div>
      </section>
      <div className='flex justify-between px-7 py-10'>
        <p>Filter by Category:</p>
        <div>
          <button onClick={() => setCategory("")} className='bg-blue-200 text-blue-800 px-7 py-2 rounded-sm ml-3'>All</button>
          <button onClick={() => setCategory("Events")} className='bg-blue-200 text-blue-800 px-7 py-2 rounded-sm ml-3'>Events</button>
          <button onClick={() => setCategory("Seminar")} className='bg-blue-200 text-blue-800 px-7 py-2 rounded-sm ml-3'>Seminar</button>
        </div>
      </div>
      {/* show-events */}
      <div className='flex flex-wrap justify-center mt-14 gap-10'>
        {
          FilterDatabase.map((items) => {
            return <div>
              <Card events={items}/>
            </div>
          })
        }
      </div>
    </div>
  )
}
export default Events