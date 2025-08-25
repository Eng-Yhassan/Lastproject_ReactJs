// src/components/AboutUs.jsx
import React from "react";
import { Link } from "react-router-dom";
import image from "../images/Leadership.jpg"


export default function AboutUs() {
  return (
    <section>
      {/* Section 1: Hero / Our Story */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white py-20 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Plan <span className="text-orange-400">Unforgettable</span> Events With Events Pro
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            From corporate gatherings to weddings, we bring your vision to life
            with creativity, passion, and precision. Let's make your event one
            to remember!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/events"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              Explore Events
            </Link>
            <Link
              to="/contact"
              className="border border-white hover:bg-white hover:text-purple-800 px-8 py-3 rounded-lg font-semibold shadow-lg transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Our Services */}
      <section className="bg-gray-50 py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt="Events Pro"
            className="rounded-2xl shadow-lg w-full h-[600px] object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Events Pro
          </h2>

          {/* Section 1: Our Story */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Story</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Events Pro was founded with the vision of creating unforgettable experiences. We specialize in organizing and managing events that leave lasting impressions for both individuals and businesses.
          </p>

          {/* Section 2: Our Services */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Services</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            From corporate conferences and product launches to weddings and private celebrations, Events Pro offers end-to-end event planning services. Our team handles everything from concept creation to flawless execution.
          </p>

          {/* Section 3: Our Mission */}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our mission is to deliver exceptional events that exceed expectations, combining creativity, precision, and professionalism to ensure every occasion is truly remarkable.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
    </section>
  );
}
