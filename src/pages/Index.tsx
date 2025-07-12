
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import ThreeScene from "@/components/ThreeScene";
import { Link } from "react-router-dom";

const Index = () => {
  const handleDownloadResume = () => {
    // Create a dummy resume download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You would replace this with actual resume file
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <PageTransition>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center lg:text-left"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-5xl lg:text-7xl font-bold mb-6"
                >
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                    Creative
                  </span>
                  <br />
                  <span className="text-white">Developer</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-xl text-gray-300 mb-8 max-w-2xl"
                >
                  I craft exceptional digital experiences with cutting-edge technology, 
                  beautiful design, and seamless user interactions.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link to="/projects">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-none text-lg px-8 py-3"
                    >
                      View My Work
                    </Button>
                  </Link>
                  
                  <Button
                    onClick={handleDownloadResume}
                    variant="outline"
                    size="lg"
                    className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-3"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex justify-center lg:justify-start space-x-6 mt-8"
                >
                  {["Github", "Linkedin", "Instagram", "Youtube"].map((platform, index) => (
                    <motion.a
                      key={platform}
                      href={
                        platform === "Github" ? "https://github.com/rimzy2002" :
                        platform === "Linkedin" ? "https://www.linkedin.com/in/mohamedrimzy09?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" :
                        "#"
                      }
                      target={platform === "Github" || platform === "Linkedin" ? "_blank" : undefined}
                      rel={platform === "Github" || platform === "Linkedin" ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-gray-400 hover:text-white transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      {platform}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl rounded-full"></div>
                <ThreeScene />
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400"
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Ready to Build Something Amazing?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8"
            >
              Let's collaborate and create exceptional digital experiences that make a difference.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-none text-lg px-8 py-3"
                >
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
