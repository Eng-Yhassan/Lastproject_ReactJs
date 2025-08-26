import { useParams } from "react-router-dom";
import Database from "../Data";

function Workshop() {
  const { id } = useParams();
  const event = Database.find((e) => e.id === parseInt(id));

  if (!event) return <h2 className="text-center mt-10 text-red-500">Workshop not found!</h2>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-indigo-800">{event.name}</h2>
      <img src={event.image} alt={event.name} className="w-full h-60 object-cover rounded-xl my-4"/>
      <p className="text-gray-700 mb-2"><strong>Date:</strong> {event.date}</p>
      <p className="text-gray-700 mb-2"><strong>Location:</strong> {event.location}</p>
      <p className="text-gray-600">{event.title}</p>
    </div>
  );
}

export default Workshop;
