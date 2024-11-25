import React from "react";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {Link,NavLink} from 'react-router-dom'


export default function Header() {
    const [menuOpen,setMenuOpen] = useState(false)

    return (
        <header className="font-poppins shadow sticky  top-0 z-50 ">
            <nav className="bg-gradient-to-r from-slate-950 via-blue-900 to-slate-950 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex  items-center">
                    <Link to="/" className="flex flex-grow justify-center">
                        <h4 className="flex text-3xl font-bold text-white items-center mr-3 h-12">Vasanth</h4>
                    </Link>
                        
                        

                        <Link
                            to="#"
                            className="text-blue-900  btn bg-white absolute right-5  focus:ring-4 focus:text-gray-400 focus:bg-transparent font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none"
                        >
                            Resume
                        </Link>


                        <nav className=" text-white flex justify-between">
                                <button
                                    className= "mr-5 relative  right-28  text-white text-3xl"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    <FontAwesomeIcon icon={faBars} />
                                </button>

                            {menuOpen && (
                                <div className="absolute top-16 right-4 h-auto w-80  text-black shadow-lg rounded-md p-4">
                                <ul className=" mt-4 flex flex-col  items-center font-medium   lg:space-x-8 lg:mt-0">
                                    <li>
                                        <NavLink
                                            to="/"
                                            className={({isActive}) =>
                                                `block py-2 pr-4 mr-2 pl-3 duration-200   border-gray-100 ${isActive ? "text-white":"text-slate-900"} lg:hover:bg-transparent  hover:text-slate-950 lg:p-0`
                                            }
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/about"
                                            className={({isActive}) =>
                                                `block py-2 pr-4 mr-2 pl-3 duration-200   border-gray-100 ${isActive ? "text-white":"text-slate-900"} lg:hover:bg-transparent  hover:text-blue-950 lg:p-0`
                                            }
                                        >
                                            About
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/contact"
                                            className={({isActive}) =>
                                                `block  py-2 pr-4 mr-2 pl-3 duration-200   border-gray-100 ${isActive ? "text-white":"text-slate-900"} lg:hover:bg-transparent  hover:text-blue-950 lg:p-0`
                                            }
                                        >
                                            Contact
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/projects"
                                            className={({isActive}) =>
                                                `block py-2 pr-4 mr-2 pl-3 duration-200   border-gray-100 ${isActive ? "text-white":"text-slate-900"} lg:hover:bg-transparent  hover:text-blue-950 lg:p-0`
                                            }
                                        >
                                            Projects
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/user"
                                            className={({isActive}) =>
                                                `block py-2 pr-4 mr-2 pl-3 duration-200   border-gray-100 ${isActive ? "text-white":"text-slate-900"} lg:hover:bg-transparent  hover:text-blue-950 lg:p-0`
                                            }
                                        >
                                            User
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/skills"
                                            className={({isActive}) =>
                                                `block py-2 pr-4 mr-2 pl-3 duration-200   border-gray-100 ${isActive ? "text-white":"text-slate-900"} lg:hover:bg-transparent  hover:text-blue-950 lg:p-0`
                                            }
                                        >
                                            Skills
                                        </NavLink>
                                    </li>
                                    </ul>
                                </div>
                            )}
                        </nav>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                       
                    </div>
                </div>
            </nav>
        </header>
    );
}


<ul className="flex flex-col mt-4 font-medium  lg:flex-row lg:space-x-8 lg:mt-0">
<li>
    <NavLink
        to="/"
        className={({isActive}) =>
            `block py-2 pr-4 mr-2 pl-3 duration-200 border-b  border-gray-100 ${isActive ? "text-red-700":"text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
    >
        Home
    </NavLink>
</li>
<li>
    <NavLink
        to="/about"
        className={({isActive}) =>
            `block py-2 pr-4 pl-3 mr-2 duration-200 border-b border-gray-100 ${isActive ? "text-red-700":"text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
    >
        About
    </NavLink>
</li>
<li>
    <NavLink
        to="/contact"
        className={({isActive}) =>
            `block py-2 pr-4 pl-3 mr-2 duration-200 border-b border-gray-100 ${isActive ? "text-red-700":"text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
    >
        Contact
    </NavLink>
</li>
<li>
    <NavLink
        to="/project"
        className={({isActive}) =>
            `block py-2 pr-4 pl-3 mr-2 duration-200 border-b border-gray-100 ${isActive ? "text-red-700":"text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
    >
        Projects
    </NavLink>
</li>
<li>
    <NavLink
        to="/user"
        className={({isActive}) =>
            `block py-2 pr-4 pl-3 mr-2 duration-200 border-b border-gray-100 ${isActive ? "text-red-700":"text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
    >
        User
    </NavLink>
</li>
<li>
    <NavLink
        to="/github"
        className={({isActive}) =>
            `block py-2 pr-4 pl-3 mr-2 duration-200 border-b border-gray-100 ${isActive ? "text-red-700":"text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
        }
    >
        Github
    </NavLink>
</li>
</ul>