import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText } from 'lucide-react';

const Resume: React.FC = () => {
  const [showResume, setShowResume] = useState(false);

  const handleToggleResume = () => {
    setShowResume(prev => !prev);
  };

  return (
    <section id="resume" className="py-20 bg-transparent dark:bg-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Resume</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Download my complete resume or view it online
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
className="p-6 bg-gradient-to-br from-[#ffffff] via-[#f0f9ff] to-[#e0f2fe] dark:bg-slate-700 dark:bg-none dark:bg-gradient-none rounded-xl shadow hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-8">
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <FileText className="text-white" size={40} />
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  Sachin Sundar S - Resume
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  AI & ML Engineering Student | Full-Stack Developer | Innovation Enthusiast
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-purple-400">3+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-purple-400">10+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-purple-400">7.93</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">CGPA</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/assets/resume.pdf"
                  download
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300 glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download Resume
                </motion.a>

                <motion.button
                  onClick={handleToggleResume}
                  className={`px-8 py-3 border-2 ${
                    showResume
                      ? 'border-red-600 text-red-600 dark:border-red-400 dark:text-red-400'
                      : 'border-blue-600 text-blue-600 dark:border-purple-400 dark:text-purple-400'
                  } rounded-lg font-semibold flex items-center gap-2 hover:bg-opacity-80 hover:text-white transition-all duration-300 ${
                    showResume
                      ? 'hover:bg-red-600 dark:hover:bg-red-400'
                      : 'hover:bg-blue-600 dark:hover:bg-purple-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye size={20} />
                  {showResume ? 'Close Resume' : 'View Online'}
                </motion.button>
              </div>
            </div>

            {/* Resume Preview Area */}
            <div className="bg-slate-100 dark:bg-slate-700 p-8">
              {showResume ? (
                <div className="w-full h-[700px]">
                  <embed
                    src="/assets/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    type="application/pdf"
                    className="w-full h-full rounded-lg border-2 border-slate-300 dark:border-slate-600"
                  />
                </div>
              ) : (
                <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border-2 border-dashed border-slate-300 dark:border-slate-600 text-center">
                  <FileText className="mx-auto text-slate-400 mb-4" size={48} />
                  <p className="text-slate-600 dark:text-slate-400">
                    Resume preview will be displayed here
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">
                    Click "View Online" to see the full document
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
