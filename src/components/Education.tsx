import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'B.E. in Artificial Intelligence & Machine Learning',
      institution: 'K.S.Rangasamy College of Technology-Tiruchengode.',
      duration: '2022 - 2026',
      grade: 'CGPA: 7.93',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Government Boys Higher Secondary School-Bhavani.',
      duration: '2021 - 2022',
      grade: 'Percentage: 79.3%',
    },
        {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Government Boys Higher Secondary School-Komarapalayam.',
      duration: '2019 - 2020',
      grade: 'Percentage: 74.4',
    }
  ];

  return (
    <section id="education" className="py-20 bg-transparent dark:bg-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Education</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            My academic journey in technology and innovation
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-gradient-to-br from-[#ffffff] via-[#f0f9ff] to-[#e0f2fe] dark:bg-slate-700 dark:bg-none dark:bg-gradient-none rounded-xl shadow hover:shadow-lg transition-all duration-300"
>
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <GraduationCap className="text-white" size={32} />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-purple-400 font-semibold mb-2">
                            {edu.institution}
                          </p>
                        </div>
                        
                        <div className="flex flex-col lg:items-end gap-2">
                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                            <Calendar size={16} />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold">
                            <Award size={16} />
                            <span>{edu.grade}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;