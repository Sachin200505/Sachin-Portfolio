import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, Brain, Zap, Trophy, BookOpen, Lightbulb } from 'lucide-react';

const TechJourney: React.FC = () => {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const journeyData = [
    {
      year: '2022',
      title: 'First Year - Foundation',
      icon: BookOpen,
      color: 'from-green-500 to-emerald-500',
      achievements: [
        'Started B.E. in AI & ML Engineering',
        'Learned programming fundamentals',
        'Built first calculator app'
      ],
      skills: ['HTML', 'CSS', 'JavaScript'],
      projects: 1
    },
    {
      year: '2023',
      title: 'Second Year - Exploration',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      achievements: [
        'Mastered web development',
        'Created First Interactive Portfolio Website',
        'Started learning Artificial Intelligence'
      ],
      skills: ['HTML/CSS', 'JavaScript', 'React Basics', 'Git/GitHub', 'Data Structures'],
      projects: 5
    },
    {
      year: '2024',
      title: 'Third Year - Specialization',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      achievements: [
        'Developed Animal Detection System',
        'Built Telegram automation bot',
        'Completed ML specialization',
        'Internship at tech startup'
      ],
      skills: ['Machine Learning', 'TensorFlow', 'OpenCV', 'Node.js', 'MongoDB'],
      projects: 8
    },
    {
      year: '2025',
      title: 'Fourth Year - Innovation',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      achievements: [
        'Leading final year project',
        'Mentoring junior students',
        'Contributing to open source',
        'Preparing for placements'
      ],
      skills: ['Advanced AI/ML', 'System Design', 'Leadership', 'Research','Problem Solving'],
      projects: 12
    }
  ];

  const toolsData = [
  { name: 'VS Code', icon: '💻', category: 'Editor', tooltip: 'Primary code editor for all development' },
  { name: 'Git', icon: '🔧', category: 'Version Control', tooltip: 'Source code management and collaboration' },
  { name: 'Figma', icon: '🎨', category: 'Design', tooltip: 'UI/UX design and prototyping' },
  { name: 'MySQL', icon: '🐬', category: 'Database', tooltip: 'Relational database management system' },
  { name: 'Java', icon: '☕', category: 'Backend', tooltip: 'Object-oriented programming language' },
  { name: 'Jupyter', icon: '📓', category: 'ML', tooltip: 'Data science and machine learning' },
  { name: 'ChatGPT', icon: '🧠', category: 'AI Tool', tooltip: 'Conversational AI and coding assistant' },
  { name: 'Kaggle', icon: '📊', category: 'Data Science', tooltip: 'Online platform for ML competitions and datasets' }

];


  return (
    <section className="py-20 bg-transparent dark:bg-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">Tech Journey Timeline</h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300">
            My evolution from a curious beginner to an Full Stack Developer
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-blue-500 via-purple-500 to-orange-500 rounded-full" />

          <div className="space-y-8 sm:space-y-12">
            {journeyData.map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } flex-col sm:flex-row`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredYear(index)}
                onMouseLeave={() => setHoveredYear(null)}
              >
                {/* Timeline Node */}
                <div className="hidden sm:block absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
  <motion.div
    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg`}
    whileHover={{ scale: 1.2 }}
    animate={{ scale: hoveredYear === index ? 1.2 : 1 }}
  >
    <item.icon className="text-white" size={24} />
  </motion.div>
</div>


                {/* Content Card */}
<div className={`w-full sm:w-5/12 ml-4 sm:ml-0 ${index % 2 === 0 ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'}`}>
                  <motion.div
className="p-6 bg-gradient-to-br from-[#ffffff] via-[#f0f9ff] to-[#e0f2fe] dark:bg-slate-700 dark:bg-none dark:bg-gradient-none rounded-xl shadow hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-200">
                        {item.year}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <Trophy size={16} />
                        <span>{item.projects} Projects</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-blue-600 dark:text-purple-400 mb-4">
                      {item.title}
                    </h4>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Skills Acquired:</h5>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
className="px-2 py-1 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-4">
            Tools I Use Daily
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            My favorite tools and technologies that power my development workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
          {toolsData.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="text-3xl sm:text-4xl mb-2">{tool.icon}</div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                  {tool.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {tool.category}
                </p>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 dark:bg-slate-700 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                {tool.tooltip}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechJourney;