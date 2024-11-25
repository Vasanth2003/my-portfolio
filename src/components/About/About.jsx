import React,{useState,useEffect} from 'react';
import about from '../../assets/about.png';
import { motion, spring } from 'framer-motion';

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

function About() {
  // const [loading, setLoading] = useState(true);

  // // Simulate loading process (for demo purposes)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false); // Simulate loading completion after 2 seconds
  //   }, 2000);
  // }, []);
  // if(loading){
  //   return <Loading/>
  // }
  return (
    // <motion.div className="font-poppins h-screen bg-gradient-to-b from-slate-950 via-blue-900 to-slate-950 flex justify-center items-center"
    // initial={{opacity:0, width:0,x:0,transition:{duration:1}}}
    // animate={{opacity:1, width:"100%",transition:{duration:1}}}
    // exit={{opacity:0,x:"100%",transition:{duration:1} }}>
       <motion.div className=" font-poppins   flex justify-center items-center z-[-2] h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
        initial={{opacity:0, width:0,transition:{duration:1}}}
    animate={{opacity:1, width:"100%",transition:{duration:1}}}
    exit={{opacity:0,x:"100%",transition:{duration:1} }}
       >
    <h1 className='absolute flex top-44 justify-center -m-[100px] text-5xl items-center text-white font-doto'>About Me</h1>

     <div className="flex flex-row items-center gap-10">
       

        <div className="text-white  max-w-lg">
          <h1 className="text-5xl font-bold">I'm an Engineer  </h1>
          <p className="text-lg mb-3">
            I’m an <span className="text-blue-400 font-semibold">Engineer</span> with expertise in software development, specializing in creating efficient, user-focused web applications using modern technologies. Passionate about solving real-world problems and driving innovation through code.
          </p>
         

        </div>
       
       
        <div className="flex absolute -top-64  justify-center left-0 ">
          {/* <motion.img
            src={about}
            alt="About"
            className="h-auto w-[800px] opacity-30 -z-0  object-cover"
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:1}}}
            exit={{opacity:0,transition:{duration:1} }}

          /> */}
      </div>

        
        <div className="text-white  max-w-lg">
          <h1 className="text-3xl font-bold">I'm a MERN Stack Developer & Trainer</h1>
          <p className="text-lg mb-3">
            I’m a <span className="text-blue-400 font-semibold">MERN Stack Developer</span> with a knack for creating seamless, high-performance web applications.  
            With experience in building dynamic user interfaces and scalable back-end solutions, I’m all about crafting meaningful digital experiences.
          </p>
          <h2 className="text-2xl font-semibold mb-3" >What I Do</h2>
          <ul className="text-lg space-y-9 leading-9">
          <li>
            <span className="font-semibold text-blue-300">Web Development:</span> Expertise in React, Next.js, Node.js, and Tailwind CSS.
          </li>
          <li>
            <span className="font-semibold text-blue-300">Mentorship:</span> Empowering students and professionals by sharing knowledge and best practices.
          </li>
          <li>
            <span className="font-semibold text-blue-300">Innovation:</span> Continuously exploring emerging technologies to stay ahead in the ever-evolving tech landscape.
          </li>
        </ul>

        </div>
      </div>
    </motion.div>
  );
}

export default About;
