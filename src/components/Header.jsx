import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const HandleIsOpen = () => {
        setIsOpen(!isOpen)  // toggle gareynaya
    }

    return (
        <div>

            {/* Desktop View */}
            <div className='flex bg-primaryColor text-textColor px-10 py-6 justify-between items-center'>
                <NavLink to="/">
                    <h1 className='font-bold text-4xl'>Event Pro</h1>
                </NavLink>
                <div className='flex gap-10 items-center'>
                    <ul className='hidden sm:flex gap-10 text-2xl font-semibold'>
                        <NavLink to="/"><li> Home </li></NavLink>
                        <NavLink to="/about"><li> About </li></NavLink>
                        <NavLink to="/events"><li> Events </li></NavLink>
                        <NavLink to="/contact"><li> Contact Us </li></NavLink>
                    </ul>

                    {/* Icons */}
                    <i 
                      onClick={HandleIsOpen} 
                      className={`fa-solid ${isOpen ? "fa-x" : "fa-bars"} text-3xl sm:hidden cursor-pointer`}
                    ></i>
                </div>
            </div>

            {/* Mobile View */}
            <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
                <ul className='flex flex-col bg-blue-400 justify-center items-center py-4 absolute w-full text-white gap-10 text-2xl font-semibold'>
                    <NavLink to="/" onClick={() => setIsOpen(false)}><li> Home </li></NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)}><li> About </li></NavLink>
                    <NavLink to="/events" onClick={() => setIsOpen(false)}><li> Events </li></NavLink>
                    <NavLink to="/contact" onClick={() => setIsOpen(false)}><li> Contact Us </li></NavLink>
                </ul>
            </div>

        </div>
    )
}
