import React from 'react';
import contactImage from '../../assets/about.png'; // Replace with your image path
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { motion, spring } from 'framer-motion';


function Contact() {
  return (
    // <motion.div className="font-poppins h-screen bg-gradient-to-b from-slate-950 via-blue-900 to-slate-950 flex justify-center items-center"
    // initial={{opacity:0, width:0,transition:{duration:1}}}
    // animate={{opacity:1, width:"100%",transition:{duration:1}}}
    // exit={{opacity:0,x:window.innerWidth,transition:{duration:1} }}>
    <motion.div className=" font-poppins  top-0 z-[-2] h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]  flex justify-center items-center"
    initial={{opacity:0, width:0,transition:{duration:1}}}
animate={{opacity:1, width:"100%",transition:{duration:1}}}
exit={{opacity:0,x:"100%",transition:{duration:1} }}
   >
      
   
      <div className="relative bg-black text-white rounded-lg shadow-lg w-4/5 max-w-6xl overflow-hidden">
        {/* Left Section */}

        
        <div className="p-10 w-2/3">
          <h1 className="text-4xl font-bold mb-4">
            Let's <span className="text-blue-800">talk</span>
          </h1>
          <div className="flex justify-start items-center gap-4  mt-10">
      {/* Facebook */}
      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black rounded-full flex items-center justify-center w-10 h-10  bg-slate-500 opacity-60 hover:opacity-100 transition duration-300"
      >
        <FaFacebookF size={30} />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black rounded-full flex items-center justify-center w-10 h-10  bg-slate-500 opacity-60 hover:opacity-100 transition duration-300"
      >
        <FaInstagram size={30} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black rounded-full flex items-center justify-center w-10 h-10  bg-slate-500 opacity-60 hover:opacity-100 transition duration-300"
      >
        <FaLinkedinIn size={30} />
      </a>
    </div>
          <p className="text-gray-400 mb-8">
          </p>
          <form className="py-0 my-1">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full  bg-gray-800 my-2 text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-gray-800 my-1 text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full bg-gray-800 my-2 text-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-black font-semibold py-3 px-8 rounded-md hover:bg-white transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="absolute -right-32 top-48 transform -translate-y-1/2">
          <img
            src={contactImage}
            alt="Contact"
            className="h-[700px]  w-auto  shadow-lg"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
