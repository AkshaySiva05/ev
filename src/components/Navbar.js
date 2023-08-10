// bn
import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
function Navbar() {
    return (
        <div className='fixed w-full h-[80px] flex justify-center items-center px-4 bg-[#A8CDEA] text-dark'>{/*center,end,between*/}
            {/* menue */}
            {/* <div className='hidden'>     hidden md:*/}
            <ul className='flex'>
                <li> HOME</li >
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>PAGES</li>
                <li>BLOGS</li>
                <li>CONTACT</li>
            </ul>
            {/* </div> */}
            {/* hamburger menu */}
            <div className='hidden'>
                <FaBars />
            </div>
        </div>
    )
}

export default Navbar

