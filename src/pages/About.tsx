import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";

const About = () => {
  useScrollNavigation("/", "/projects");


  return (
    <PageTransition>
      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Software Engineering Undergraduate — AI & Full Stack Developer
            </p>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 mb-12"
          >
            <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
              <BookOpen className="text-purple-400" size={24} />
              Professional Summary
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Computer Systems Engineering undergraduate with a strong foundation in Full Stack Web Development (MERN) 
              and database architecture. Proven experience building scalable web applications, integrating APIs, and optimizing 
              database performance. Skilled in bridging software development with hardware integrations and deploying robust, 
              responsive user interfaces. Passionate about transitioning into AI engineering and actively seeking opportunities 
              to leverage modern frameworks and cloud technologies to solve complex architectural challenges.
            </p>
          </motion.div>

          {/* Education & Experience Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <GraduationCap className="text-cyan-400" size={24} />
                Education
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-cyan-500/50 pl-4">
                  <h3 className="text-lg font-semibold text-white">BSc (Hons) Computer Systems Engineering | 2023 – 2027</h3>
                  <p className="text-purple-400">NSBM Green University (UGC Approved)</p>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <Briefcase className="text-purple-400" size={24} />
                Experience
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-purple-500/50 pl-4">
                  <h3 className="text-lg font-semibold text-white">Front-End Development Intern</h3>
                  <p className="text-cyan-400">ILT Software (Pvt) Ltd</p>
                  <p className="text-gray-500 text-sm mt-1">July 2025 – October 2025</p>
                  <ul className="text-gray-300 text-sm mt-3 space-y-2 list-disc list-inside">
                    <li>Engineered and maintained responsive web interfaces, translating UI/UX designs into functional code.</li>
                    <li>Collaborated with senior developers to troubleshoot frontend bugs and optimize application load times.</li>
                    <li>Managed version control and codebase tracking using Git and GitHub.</li>
                    <li>Enforced software development best practices and strict coding standards.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          >
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              <Award className="text-yellow-400" size={24} />
              Certifications & Professional Development
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-gray-700/30 rounded-xl p-4 border border-gray-600">
                <h3 className="text-white font-semibold">IITM-Pravartak Full Stack Development with AI Tools</h3>
                <p className="text-gray-400 text-sm">GUVI & HCL — In Progress</p>
              </div>
              <div className="bg-gray-700/30 rounded-xl p-4 border border-gray-600">
                <h3 className="text-white font-semibold">Unix Tutorial for Beginners</h3>
                <p className="text-gray-400 text-sm">Udemy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
