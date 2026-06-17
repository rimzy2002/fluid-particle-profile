
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Internship & Skill Tracker",
      description: "A centralized career management platform with N-Tier architecture, normalized MySQL schema, Gemini API integration for resume parsing, and CI/CD pipelines via GitHub Actions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&auto=format&q=80",
      tech: ["React", "Node.js", "Express", "MySQL", "Docker", "Gemini API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Student Budget & Expense Tracker",
      description: "Manage student spending easily using Express backend and React frontend.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&auto=format&q=80",
      tech: ["HTML5", "CSS", "JavaScript", "React"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop&auto=format&q=80",
      tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "ICU Smart Monitoring and Alert System",
      description: "A healthcare monitoring system integrating hardware sensors with software interfaces for ICU patient management, with role-based access and secure patient data management.",
      image: "/lovable-uploads/cc2605f6-b905-4ded-a72d-badaab7db0ae.png",
      tech: ["Java Swing", "MySQL", "Hardware Sensors", "OOP"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "KnowledgeHub Online Book Shopping Platform",
      description: "A full-stack e-commerce platform for book purchasing with authentication, product management, shopping cart, and responsive design.",
      image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=250&fit=crop&auto=format&q=80",
      tech: ["PHP", "MySQL", "XAMPP"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Student Registration System",
      description: "A CRUD-based web application for student record management with form validation and optimized user workflows.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop&auto=format&q=80",
      tech: ["PHP", "MySQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "Meditation-APP",
      description: "Your path to mindfulness and inner peace with guided meditation, breathing exercises, and journaling features.",
      image: "/lovable-uploads/meditation-app.png",
      tech: ["TypeScript", "CSS", "JavaScript", "HTML"],
      liveUrl: "https://mental-health-check.netlify.app/",
      githubUrl: "https://github.com/rimzy2002/Meditation-APP/tree/main"
    },
    {
      id: 8,
      title: "Portfolio Website",
      description: "A responsive personal portfolio website showcasing academic and software development projects, deployed on GitHub Pages.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=250&fit=crop&auto=format&q=80",
      tech: ["HTML", "CSS", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <PageTransition>
      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Showcasing my latest work and creative solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                }}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 transform-gpu perspective-1000"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                </div>

                <div className="relative p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
