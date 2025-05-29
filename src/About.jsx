import React, { useState, useEffect } from 'react';
import harunahimg from "../public/images/haruna_githubdpblack.png"
const About = () => {
  const [yearsCount, setYearsCount] = useState(0);
  const [reposCount, setReposCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  // Counter animation function
  const animateCounter = (target, setter, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(counter);
      } else {
        setter(Math.floor(start));
      }
    }, 16);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      animateCounter(5, setYearsCount, 2000);
      animateCounter(15, setReposCount, 2000);
      animateCounter(30, setProjectsCount, 2200);
      animateCounter(10, setClientsCount, 1000);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-black shadow-2xl">
                <img 
                src={harunahimg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-black rounded-full"></div>
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-black rounded-full"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* About Text */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-black">
                I'm a Full Stack Web Developer
              </h3>
              <p className="text-lg text-black leading-relaxed">
                I'm a passionate web developer with expertise in modern technologies 
                including <span className="font-semibold">React.js</span>, <span className="font-semibold">Node.js</span>, 
                <span className="font-semibold"> JavaScript</span>, <span className="font-semibold">TypeScript</span>, 
                and <span className="font-semibold">Postgres</span>. I love creating dynamic, 
                responsive web applications that deliver exceptional user experiences.
              </p>
              <p className="text-lg text-black leading-relaxed">
                My journey in web development has been driven by curiosity and a desire 
                to solve complex problems through clean, efficient code. I specialize in 
                full-stack development, from crafting intuitive user interfaces to building 
                robust backend systems.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-xl font-bold text-black mb-4">Technologies I Work With:</h4>
              <div className="flex flex-wrap gap-3">
                {['React.js', 'Node.js', 'JavaScript', 'TypeScript', 'Postgres', 'Express.js', 'Tailwind CSS', 'Git'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                {yearsCount}+
              </div>
              <p className="text-lg text-black font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                {reposCount}+
              </div>
              <p className="text-lg text-black font-medium">Repositories</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                {projectsCount}+
              </div>
              <p className="text-lg text-black font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                {clientsCount}+
              </div>
              <p className="text-lg text-black font-medium">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;