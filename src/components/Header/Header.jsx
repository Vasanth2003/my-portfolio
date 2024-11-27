import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import Resume from '../../assets/Resume.pdf'



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="font-poppins shadow sticky top-0 z-50 overflow-visible">
      <nav className="w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] px-8  py-1">
        <div className="flex items-center">
          <Link to="/" className="flex pl-5">
            <h4 className="text-5xl  font-bold font-signatute text-white">Vasanth</h4>
          </Link>
          <a href={Resume} download
            className="text-white btn bg-transparent absolute right-5  focus:text-white  text-xl px-4 lg:px-5 py-2 lg:py-2.5 "
          
          >
            
        <FontAwesomeIcon className="text-white pr-3 " icon={faDownload} />         
          
                Resume
           
        
          </a>
          <div className="relative ">
            <button
              className="text-white text-3xl  transition-all duration-500 ease-in-out p-4 group absolute top-[300px] -left-24"
              onMouseEnter={() => setMenuOpen(true)}  onClick={()=>setMenuOpen(false)}
            >
            <div className="flex items-center relative justify-center w-14 h-14 bg-black rounded-full top-7 -left-3"> </div>

              <div className="w-8 h-8 relative">
         
              <h2 className="absolute text-xl bottom-16 -left-4"> Menu</h2>
              
              {menuOpen ? 
  <div className="relative w-8 h-8">
    <span className="absolute block w-full h-[2px] bg-white rounded transform rotate-45 origin-center transition-all duration-500 ease-in-out"></span>
    <span className="absolute block w-full h-[2px] bg-white rounded transform -rotate-45 origin-center transition-all duration-500 ease-in-out"></span>
  </div>
:
  <div className="relative w-8 h-8">
    <span className="absolute block w-full h-[2px] bg-white rounded transform rotate-0 origin-center transition-all duration-500 ease-in-out"></span>
    <span className="absolute block w-full h-[2px] bg-white rounded transform rotate-90 origin-center transition-all duration-500 ease-in-out"></span>
  </div>
}

              </div>
            </button>

            {menuOpen && (
              <motion.div
                className="absolute top-56 -left-8 bg-black text-white rounded-lg shadow-lg p-4 transition-all duration-500 ease-in-out"
                onMouseLeave={() => setMenuOpen(false)}
              >
                <ul className="space-y-4 text-center">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `block py-2 px-4 duration-200 rounded-lg ${
                          isActive
                            ? "bg-gray-700 text-white"
                            : "hover:bg-gray-700 hover:text-white"
                        }`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `block py-2 px-4 duration-200 rounded-lg ${
                          isActive
                            ? "bg-gray-700 text-white"
                            : "hover:bg-gray-700 hover:text-white"
                        }`
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `block py-2 px-4 duration-200 rounded-lg ${
                          isActive
                            ? "bg-gray-700 text-white"
                            : "hover:bg-gray-700 hover:text-white"
                        }`
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/projects"
                      className={({ isActive }) =>
                        `block py-2 px-4 duration-200 rounded-lg ${
                          isActive
                            ? "bg-gray-700 text-white"
                            : "hover:bg-gray-700 hover:text-white"
                        }`
                      }
                    >
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/skills"
                      className={({ isActive }) =>
                        `block py-2 px-4 duration-200 rounded-lg ${
                          isActive
                            ? "bg-gray-700 text-white"
                            : "hover:bg-gray-700 hover:text-white"
                        }`
                      }
                    >
                      Skills
                    </NavLink>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}