import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const About = () => {
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
              transition={{ duration:  type: "write", "file_path": "src/pages/Skills.tsx", "content": "import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 70 },
        { name: "Java", level: 65 },
        { name: "C / C++", level: 60 },
        { name: "PHP", level: 70 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 70 },
        { name: "Redux", level: 75 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 75 },
        { name: "HTML5 / CSS3", level: 90 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 80 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 65 }
      ]
    },
    {
      title: "Tools, Cloud & AI",
      skills: [
        { name: "Git / GitHub", level: 85 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 60 },
        { name: "REST APIs", level: 80 },
        { name: "Postman", level: 80 },
        { name: "Cursor AI", level: 85 },
        { name: "Gemini API", level: 70 }
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="relative z-10 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              My Skills
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
              >
                <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {category.title}
                </h2>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                          className="bg-gradient-to-r from-purple-500 to-cyan-500 h-2 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coding Profiles Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Coding Profiles
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {["GitHub", "LeetCode", "CodePen", "Stack Overflow"].map((platform, index) => (
                <motion.a
                  key={platform}
                  href={platform === "LeetCode" ? "https://leetcode.com/u/rmmrimzi/" : "#"}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay:  (index * 0.1) }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="text-white font-semibold">{platform}</div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
