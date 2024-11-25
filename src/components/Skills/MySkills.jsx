import React from 'react'

function Skills() {
    const Myskills = [
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      ];
    
  return (
    <div 
    className='font-poppins  h-screen bg-gradient-to-b flex items-center justify-center from-slate-950 via-blue-900 to-slate-950'
    initial={{opacity:0, width:0,transition:{duration:1}}}
    animate={{opacity:1, width:"100%",transition:{duration:1}}}
    exit={{opacity:0,x:window.innerWidth,transition:{duration:1} }}>
         <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">What I Do</h1>
        <p className="text-gray-300 mt-4 max-w-2xl">
          I am a MERN Stack Developer with expertise in creating high-performance web applications. I enjoy solving problems and staying updated with emerging technologies.
        </p>
      </div>

      {/* Skills Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  p-7   gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800 p-8 rounded-lg shadow-lg hover:scale-105 transition-transform"
          >
            <img src={skill.icon} alt={skill.name} className="h-16 w-16 mb-4" />
            <h3 className="text-lg font-semibold text-yellow-400">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Myskills