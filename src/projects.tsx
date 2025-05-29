// import newswebsite  from '/images/newswebiste.png'
// import newswebsite  from '/images/newswebiste.png'
// import derimaticweb  from '/images/derimaticweb.png'
// import fantasy_gadets  from '/images/fantasy_gadets.png'
// import internet  from '/images/internetinternet.png'

import { useNavigate } from 'react-router-dom'


import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Graphic Desing Agency",
      description:"Logos, layouts, and a little bit of magic. I conjure up designs that make your brand unforgettable. Need visuals that slap harder than a typo in Comic Sans? You're in the right enchanted corner of the internet.",
      image:'../public/images/Marieconceptproject.png',
      technologies: ["Html", "CSS", "Javascript"],
      category: "Web Development",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Real Estate Website",
      description:"From polished property listings to seamless user journeys, this site turns browsers into buyers. I design real estate experiences that feel less like paperwork and more like",
      image:"../public/images/realestate_website.png",
      technologies: ["React.js", "Tailwindcss", "node.js"],
      category: "Web Development",
      liveUrl: "https://elite-estates-proj.netlify.app/",
      githubUrl: "https://github.com/devharunah/Realestatewebsite",
    },
    {
      id: 3,
      title: "Labour Day social media Flayer",
      description:"Grunge textures, industrial font, tools, calloused hands, steel and denim vibes. Throw in a hard hat or two if you're feeling spicy.",
      image:"../public/images/labourday_flayer.jpg",
      technologies: ["Figma", "Adobe Illustrator", "Brand Strategy"],
      category: "design",
      liveUrl: "file:///C:/Users/HP/Desktop/MYPROJECTS/Harunah-portfolio/public/images/labourday_flayer.jpg",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Crpyto News site",
      description:"Stay ahead of the block. We bring you real-time crypto news, market insights, and chain-shattering updates—minus the fluff. Whether it’s Bitcoin booms or Web3 wonders, we keep your feed sharp, fast, and always plugged in.",
      image:"../public/images/newswebiste.png",
      technologies: ["Figma", "Adobe Illustrator", "Brand Strategy"],
      category: "Web Development",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold text-primary">
            Featured <span className="text-accent">Projects</span> & Designs
          </h3>
          <p className="text-lg text-muted-foreground">
            A showcase of my development projects and design work that demonstrates
            my ability to create both functional and beautiful digital solutions.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex gap-2 p-1 bg-muted rounded-lg flex-wrap">
            {["all", "Web Development", "design"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 bg-black text-white rounded-md text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-card border rounded-lg overflow-hidden shadow-sm group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={project.liveUrl}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30"
                  >
                    <ExternalLink size={16} className="text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30"
                  >
                    <Github size={16} className="text-white" />
                  </a>
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-xl font-semibold mb-1">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/devharunah"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
