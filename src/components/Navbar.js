import React, { useState } from 'react';
import logo from '/home/akshay/first/ev/src/assets/LOGO.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand/logo (Add your own logo here) */}
                    <div className="flex-shrink-0">
                        <a href="#" className="">
                            {/* <img className='p-2 w-[12rem]' src={logo} /> */}
                            {/* mobile */}
                            <img className='block md:hidden w-32 mx-auto' src={logo} />
                            {/* Desktop */}
                            <img className="hidden md:block w-48 mx-auto" src={logo} />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="text-dark hover:text-gray-300 focus:outline-none"
                        >
                            ☰
                        </button>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex space-x-4">
                        <a href="#" className="text-dark hover:text-gray-300">
                            HOME
                        </a>
                        <a href="#" className="text-dark hover:text-gray-300 uppercase">
                            About
                        </a>
                        <a href="#" className="text-dark hover:text-gray-300">
                            SERVICES
                        </a><a href="#" className="text-dark hover:text-gray-300">
                            PAGES
                        </a><a href="#" className="text-dark hover:text-gray-300">
                            BLOGS
                        </a><a href="#" className="text-dark hover:text-gray-300">
                            CONTACT
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-6 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="text-dark block hover:text-gray-300">
                            HOME
                        </a>
                        <a href="#" className="text-dark block hover:text-gray-300">
                            ABOUT
                        </a>
                        <a href="#" className="text-dark block hover:text-gray-300">
                            SERVICES
                        </a><a href="#" className="text-dark block hover:text-gray-300">
                            PAGES
                        </a><a href="#" className="text-dark block hover:text-gray-300">
                            BLOGS
                        </a>
                        <a href="#" className="text-dark block hover:text-gray-300">
                            CONTACT
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;