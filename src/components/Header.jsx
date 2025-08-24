import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
    return (
        <div className='flex bg-primaryColor text-textColor px-10 py-6 justify-between items-center '>
            <NavLink to="/">
                <h1 className='font-bold text-4xl'>Event Pro</h1>
            </NavLink>
            <div className='flex gap-10 items-center'>
                <ul className='flex gap-10 text-2xl font-semibold'>
                    <NavLink to="/">
                        <li> Home </li>
                    </NavLink>
                    <NavLink to="/about">
                        <li> About </li>
                    </NavLink>
                    <NavLink to="/events">
                        <li> Events </li>
                    </NavLink>
                    <NavLink to="/contact">
                        <li> Contact Us </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}
