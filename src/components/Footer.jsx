import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white px-6 py-10 mt-10">
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand/Logo */}
        <div>
          <h1 className="text-3xl font-bold">Event Pro</h1>
          <p className="mt-3 text-sm">
            Bringing people together through memorable events.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            <NavLink to="/" className="hover:text-gray-200">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-gray-200">
              About
            </NavLink>
            <NavLink to="/events" className="hover:text-gray-200">
              Events
            </NavLink>
            <NavLink to="/contact" className="hover:text-gray-200">
              Contact Us
            </NavLink>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p>Email: info@eventpro.com</p>
          <p>Phone: +252 61 4765817</p>
          <p>Address: Mogadishu, Somalia</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-500 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Event Pro. All Rights Reserved.
      </div>
    </footer>
  );
}
