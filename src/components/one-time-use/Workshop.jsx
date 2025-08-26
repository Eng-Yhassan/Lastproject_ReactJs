import imag1 from "../../images/tech.jpg"

function Workshop() {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white p-8 text-center">
        <p className="uppercase tracking-wide text-sm font-semibold">Workshop</p>
        <h3 className="text-3xl md:text-4xl font-bold mt-2">
          Discover How to Get Hired Without <br /> Applying!
        </h3>
      </div>

      {/* Image */}
      <div>
        <img
          src={imag1}
          alt="Tech Workshop"
          className="w-full h-72 object-cover"
        />
      </div>

      {/* Date, Time, Location under image */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 p-6 bg-gray-50">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-calendar-days text-indigo-700 text-2xl"></i>
          <div>
            <p className="text-sm text-gray-500">Date</p>
            <h4 className="text-lg font-semibold">Saturday, March 15, 2025</h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <i className="fa-solid fa-clock text-indigo-700 text-2xl"></i>
          <div>
            <p className="text-sm text-gray-500">Time</p>
            <h4 className="text-lg font-semibold">3:00 PM</h4>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <i className="fa-solid fa-location-dot text-indigo-700 text-2xl"></i>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <h4 className="text-lg font-semibold">Wadajir - Hotel Jaziira</h4>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-indigo-900 mb-4">About This Event</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Join us for an exciting <span className="font-semibold">Tech Workshop</span> designed
          to empower innovators, developers, and future leaders in the digital world! 🚀💻 In this
          session, we’ll explore the latest strategies and tools that are shaping the future of
          technology, with a strong focus on <span className="font-semibold">career growth,
          digital skills, and innovation</span>.
        </p>

        <ul className="space-y-2 text-gray-700">
          <li>✅ Building strong foundations in software development & problem-solving</li>
          <li>✅ Mastering essential tools for developers (Git, VS Code, Cloud Platforms)</li>
          <li>✅ How to use technology to solve real-world challenges</li>
          <li>✅ Positioning yourself as a tech professional in the global market</li>
        </ul>

        {/* Bottom Info */}
        <div className="mt-6 flex flex-wrap gap-6 text-gray-700 font-medium">
          <p>🗓️ Date: <span className="font-semibold">15 May 2025</span></p>
          <p>🕒 Time: <span className="font-semibold">3:00 PM</span></p>
          <p>📍 Venue: <span className="font-semibold">Wadajir - Hotel Jaziira</span></p>
        </div>
      </div>
    </div>
  )
}

export default Workshop
