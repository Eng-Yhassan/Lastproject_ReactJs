import React, { useState } from 'react'
import Database from '../components/Data'
import Card from '../components/one-time-use/Card'

function Events() {
  const[category, setCategory] = useState("")

  const FilterDatabase = Database.filter((data) => {
    const CategoryData = category ? data.category === category : true
    return CategoryData
  })

  const baseBtn = "px-5 md:px-7 py-2 rounded-sm ml-2 md:ml-3 font-medium transition-all duration-300";

  // function si uu style u go'aamiyo
  const getBtnClass = (btnCategory) => {
    return category === btnCategory
      ? "bg-blue-500 text-white" // active button (blue)
      : "bg-orange-500 text-white " // others (orange)
  }


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
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center px-7 py-10 gap-4 md:gap-0">
        <p className="font-medium text-gray-700 mb-2 md:mb-0">Filter by Category:</p>
        <div className="flex flex-wrap gap-2 md:gap-3">
          <button onClick={() => setCategory("")} className={`${baseBtn} ${getBtnClass("")}`}>All</button>
          <button onClick={() => setCategory("Events")} className={`${baseBtn} ${getBtnClass("Events")}`}>Events</button>
          <button onClick={() => setCategory("Seminar")} className={`${baseBtn} ${getBtnClass("Seminar")}`}>Seminar</button>
        </div>
      </div>
      {/* show-events */}
      <div className='flex flex-wrap justify-center mt-14 gap-10'>
        {
          FilterDatabase.map((items) => {
            return <div>
              <Card  events={items}/>
            </div>
          })
        }
      </div>
    </div>
  )
}
export default Events