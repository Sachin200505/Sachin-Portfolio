import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Automated Animal Detection System',
      description: 'ML-powered system that detects and classifies animals in real-time using computer vision. Built with TensorFlow and OpenCV, leveraging a custom-trained deep learning model. Achieves 94% accuracy on live webcam input for real-time animal identification.',
      image: '/assets/animal.png',
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'Numpy'],
      github: 'https://github.com/Sachin200505/Automated-Animal-Identification-Using-Machine-Learning',
      category: 'AI/ML'
    },
    {
      title: 'College Fees Telegram Bot',
      description: 'AI-powered Telegram bot that provides detailed student fee structures including tuition, hostel, and pending fees. Automatically logs user interactions and responds intelligently to valid input.',
      image: '/assets/fees.jpg',
      techStack: ['Python', 'Telegram API', 'SQLite', 'Logging'],
      github: 'https://github.com/Sachin200505/Fees_Details_Bot',
      category: 'Automation'
    },
    {
      title: 'Tourism Management System',
      description: 'A comprehensive system designed to streamline and automate the management of tour packages, bookings, customer inquiries, and destination details.',
      image: '/assets/travel.jpg',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Git'],
      github: 'https://github.com/Sachin200505/Tourism-Management-System',
      category: 'Tourism'
    },
    {
      title: 'Autonomous Search and Rescue Drone',
      description: 'AI-powered drone system designed for real-time search and rescue operations in disaster-hit or remote areas.',
      image: '/assets/drone.avif',
      techStack: ['Python', 'tensorflow', 'OpenCV', 'GPS', 'Arduino','raspberry-pi','Drone kit'],
      github: 'https://github.com/Sachin200505/Autonomous-Search-and-Rescue-Drone',
      category: 'Autonomous Drone'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-transparent dark:bg-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Innovative solutions showcasing my technical expertise and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="p-6 bg-gradient-to-br from-[#ffffff] via-[#f0f9ff] to-[#e0f2fe] dark:bg-slate-700 dark:bg-none dark:bg-gradient-none rounded-xl shadow hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
className="px-3 py-1 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
<motion.a
  href={project.github}
  className="
    relative inline-flex items-center gap-2 
    px-6 py-3 rounded-xl text-sm font-bold text-white 
    bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600
    shadow-md shadow-violet-500/30 border border-transparent
    transition-all duration-300 ease-in-out 
    hover:shadow-lg hover:shadow-violet-500/50 
    hover:scale-105 active:scale-95
  "
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <span className="relative z-10 flex items-center gap-2">
    <Github size={16} />
    Code
  </span>
</motion.a>


                </div>
              </div>
            </motion.div>
          ))}
        </div>
 {/* Floating Water Wave GitHub Button */}
         {/* Floating Water Wave GitHub Button */}
    <div className="mt-16 flex justify-center">
  <motion.a
    href="https://github.com/Sachin200505?tab=repositories"
    target="_blank"
    rel="noopener noreferrer"
    className="relative overflow-hidden px-8 py-4 rounded-xl text-black font-bold text-lg flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Github size={24} />
    View More Projects on GitHub

    {/* Real wave fill */}
    <div className="wave-wrapper pointer-events-none">
      <svg
        className="wave-svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" />
      </svg>
    </div>
  </motion.a>
</div>

      </div>
    </section>
  );
};

export default Projects;
