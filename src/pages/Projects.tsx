
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Student Budget & Expense Tracker",
      description: "Modern e-commerce solution with React, Node.js, and MongoDB",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      tech: ["React", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "ICU Patient Monitoring System",
      description: "Empowering ICU care with a Java-based system for real-time patient tracking, data management, and intelligent reporting",
      image: "/lovable-uploads/cc2605f6-b905-4ded-a72d-badaab7db0ae.png",
      tech: ["Java Swing", "MySQL", "JDBC", "OOP"],
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
                transition={{ duration: 0.6, delay: index * 0.2 }}
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
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                      onClick={() => window.open('https://github.com/rimzy2002', '_blank')}
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
