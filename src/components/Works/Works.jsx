import React from 'react'
import { motion, spring } from 'framer-motion';

import vasanth from '../../assets/vasanth.png'

function Works() {
  const cardData=[
    {
      title:"AI-Summarizer",
      tech:"React JS",
      image:vasanth,
      link:"https://github.com/Vasanth2003/AI-Summarizer",

      description:"Discover 1200+ Contact Page designs on Dribbble. Your resource to discover and connect with designers worldwide."
    },
    {
      title:"Cargo Container Application",
      tech:"MERN",
      image:vasanth,
      link:"https://github.com/Vasanth2003/Cargo-Container-App",

      description:"Discover 1200+ Contact Page designs on Dribbble. Your resource to discover and connect with designers worldwide."
    },
    {
      title:"Chat App",
      tech:"Node JS",
      image:vasanth,
      link:"https://github.com/Vasanth2003/Node-JS-Chat-App",

      description:"Discover 1200+ Contact Page designs on Dribbble. Your resource to discover and connect with designers worldwide."
    },
    {
      title:"Student Management System",
      tech:"MERN",
      image:vasanth,
      link:"https://github.com/Vasanth2003/Student_management_system",

      description:"Discover 1200+ Contact Page designs on Dribbble. Your resource to discover and connect with designers worldwide."
    },
    {
      title:"Hotel Admin Page",
      tech:"React JS, Tailwind CSS",
      image:vasanth,
      link:"https://github.com/Vasanth2003/Hotel-Admin-Page-using-Tailwind-CSS",
      description:"Discover 1200+ Contact Page designs on Dribbble. Your resource to discover and connect with designers worldwide."
    }

  ]

  function Card({ title, description,link,tech,image }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:bg-transparent hover:text-white hover:shadow-xl transition duration-300">
        
        
        {/* <img
          src={image}
          alt={title}
          className="rounded-t-lg w-full h-40 object-cover"
        /> */}
        <a href={link} target='_blank'>
        <h3 className="text-xl font-semibold mt-4">{title}</h3>
        <h4 className=' '>{tech}</h4>
        <p className="text-gray-600  mt-2">{description}</p>
        </a>
      </div>
    );
  }

  function CardList() {
    return (
      <div className="p-8 min-h-screen">
        <h2 className="text-3xl font-bold text-white text-center mb-2 ">
          My Projects
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2  gap-5">
          {cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              tech={card.tech}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
      </div>
    );
  }
  return (
    <motion.div className=" font-poppins  top-0 z-[-2] h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]  flex justify-center items-center"
   initial={{ opacity: 0, height: "0%", y: "-100%", transition: { duration: 1 } }}
animate={{ opacity: 1, height: "100%", y: "0%", transition: { duration: 1 } }}
exit={{ opacity: 0, y: "100%", transition: { duration: 1 } }}>

        <CardList/>
    </motion.div>
  )
}

export default Works