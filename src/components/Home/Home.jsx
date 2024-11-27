import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import vasanth from '../../assets/vasanth.png';

// Loading Spinner Component
function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

function Home() {
  // const [loading, setLoading] = useState(true);

  // // Simulate loading process (for demo purposes)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false); // Simulate loading completion after 2 seconds
  //   }, 2000);
  // }, []);

  // // If still loading, show the loading spinner
  // if (loading) {
  //   return <Loading />;
//  }

  return (
    <motion.div 
      className="top-0 z-[-2] h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]  "
      initial={{ opacity: 0, width: 0, transition: { duration: 1 } }}
      animate={{ opacity: 1, width: "100%", transition: { duration: 1 } }}
      exit={{ opacity: 0, x: "100%", transition: { duration: 1 } }}
    >
      <div className='flex flex-col p-10'>
        <div className='w-[500px] h-[500px] absolute -bottom-32 -left-72 bg-white opacity-25 -z-1 rounded-full'></div>

        <motion.img 
          className='flex flex-col  w-[650px] h-auto z-10 absolute left-40 -bottom-20' 
          src={vasanth}
          initial={{x:-100,opacity:0, transition:{duration:3}}}
          animate={{x:0,opacity:1, transition:{duration:1.2}}}
          exit={{x:-100, mode:"tween"}}
         
        />

        {/* Main Text Animation */}
        <div className="absolute left-[400px] h-[500px] w-auto">
          <h1 className="font-bold text-5xl font-outline-2 text-transparent bg-clip-text bg-transparent">
            <span className="block relative -left-[22px]">Bridging</span>
            <span className="block relative -left-[20px]">gaps</span>
            <span className="block  relative -left-[10px]">between</span>
            <span className="block relative left-[80px]">imagination</span>
            <span className="block relative left-[100px]">and</span>
            <span className="block relative left-[120px]">technology.</span>
          </h1>
        </div>

        {/* Additional Text and Typewriter Effect */}
        <div className='absolute top-80 right-20'>
          <h1 className='text-white text-5xl'>
            <span className='font-bold text-blue-300'>Hello,</span> 
            <span className='font-bold'>I'm Pon Vasanth</span>
          </h1>

          <div className="flex items-center justify-center font-doto text-white">
            <div className="text-4xl font-bold flex">
              <span className="mr-2">I love to </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                <Typewriter
                  options={{
                    strings: ["Code", "Create", "Explore"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 100,
                  }}
                />
              </span>
            </div>
          </div>

          <div className='text-white mt-3 absolute left-12 text-xl font-bold'>
            MERN | Redux | Framer Motion | TailWind CSS
          </div>

       
        </div>

        {/* React Logo */}
        <div>
          <img
            src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
            alt="React Logo"
            className="h-96 -z-1 absolute right-16 opacity-15 w-auto animate-rotate transition-slow"
          />
        </div>

        {/* Additional Logos */}
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
            alt="JS Logo"
            className="h-60 absolute bottom-3 right-9 opacity-20 w-auto"
          />
        </div>

        <div>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp"
            alt="MongoDB Logo"
            className="h-44 absolute top-[450px] right-[550px] opacity-30 w-auto"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;