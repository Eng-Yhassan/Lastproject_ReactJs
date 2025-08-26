import { useParams } from "react-router-dom";
import Database from "../Data";

function Workshop() {
  const { id } = useParams();
  const event = Database.find((e) => e.id === parseInt(id));

  if (!event)
    return (
      <h2 className="text-center mt-10 text-red-500 text-3xl font-bold">Workshop not found!</h2>
    );

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Tag */}
      <p className="bg-blue-200 w-32 pl-3 py-1 text-blue-800 font-semibold rounded-md inline-block mb-4">
        Workshop
      </p>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-6">
        Discover How to Get Hired Without Even <br /> Applying!
      </h2>

      {/* Info Flex */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Date */}
        <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex-1">
          <i className="fa-solid fa-calendar-days text-blue-500"></i>
          <div>
            <p className="text-sm text-gray-500">Date</p>
            <h3 className="font-medium">{event.date}</h3>
          </div>
        </div>

        {/* Time */}
        <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex-1">
          <i className="fa-solid fa-clock text-blue-500"></i>
          <div>
            <p className="text-sm text-gray-500">Time</p>
            <h3 className="font-medium">{event.time}</h3>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex-1">
          <i className="fa-solid fa-location-dot text-blue-500"></i>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <h3 className="font-medium">{event.location}</h3>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="mb-6">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-64 object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-3xl font-semibold mb-2 text-blue-800">About This Event</h3>
        <p className="text-gray-700 ">{event.description}</p>
      </div>

      {/* Bottom Info - Block Style with Outline */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        <div className=" flex gap-3 ">
          <i className="mt-1 fa-solid fa-calendar-days text-blue-500 mb-1"></i>
          <p className="font-medium">{event.date}</p>
        </div>
        <div className=" flex gap-3">
          <i className="mt-1 fa-solid fa-clock text-blue-500 mb-1"></i>
          <p className="font-medium">{event.time}</p>
        </div>
        <div className=" flex gap-3">
          <i className="mt-1 fa-solid fa-location-dot text-blue-500 mb-1"></i>
          <p className="font-medium">{event.location}</p>
        </div>
      </div>
    </div>
  );
}

export default Workshop;
