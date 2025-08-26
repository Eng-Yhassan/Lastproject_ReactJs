import { Link } from "react-router";

function Card({ events }) {
  return (
    <div className="max-w-sm bg-white rounded-t-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 relative">
      <img
        src={events.image}
        alt={events.name}
        className="w-full h-48 rounded-t-lg "
      />

      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{events.name}</h3>
        <p className="text-gray-600">{events.title}</p>

        <div className="mt-3 space-y-1 text-sm text-gray-500">
          <p>📅 {events.date}</p>
          <p>📍 {events.location}</p>
        </div>

        <Link to={`/view/${events.id}`}><button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition">
          View Project
        </button></Link>

        <div className="mt-3">
          <span className="inline-block bg-[#EA580C] text-white text-xs px-3 py-1 rounded-full absolute top-3 left-2">
            {events.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
