import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
const About = () => {
  return <PageTransition>
      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Passionate developer crafting digital experiences with modern technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl rounded-lg"></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">My Journey</h2>
                  <p className="text-gray-300 mb-4">My journey into technology began with a deep curiosity about how websites and applications work, which quickly evolved into a passion for creating engaging digital experiences that solve real-world problems and enhance everyday life.</p>
                  <p className="text-gray-300 mb-4">As I explored different areas of tech, I found myself drawn to full-stack web development—where I could build both user interfaces and backend systems—giving me the power to bring complete web applications to life from start to finish.</p>
                  <p className="text-gray-300">Currently, I’m pursuing a degree in Computer System Engineering while continuously sharpening my full-stack development skills through hands-on projects, online learning, and staying up to date with the latest industry tools and trends.</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Experience</h3>
                <p className="text-gray-300">5+ years in web development</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Projects</h3>
                <p className="text-gray-300">50+ successful projects delivered</p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Clients</h3>
                <p className="text-gray-300">Happy clients worldwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>;
};
export default About;