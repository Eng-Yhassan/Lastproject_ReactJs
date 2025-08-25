import React from "react";
import { Link } from "react-router-dom"; // Waa in aad import garaysaa

export default function ContactUs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white py-20 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Plan <span className="text-orange-400">Unforgettable</span> Events With Us
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

      {/* Contact Form Section */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h2>
          <p className="text-center text-gray-500 mb-8">
            We’d love to hear from you! Fill out the form below and we’ll get back
            to you as soon as possible.
          </p>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
