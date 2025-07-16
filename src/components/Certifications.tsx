import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'IBM Full Stack Software Developer 💻',
      platform: 'Coursera · IBM Skills Network',
      date: 'September 2024',
      skills: [
        'HTML', 'CSS', 'JavaScript',
        'Git', 'Node.js', 'React',
        'Cloud Native', 'DevOps',
        'CI/CD', 'Containers', 'Docker',
        'Kubernetes', 'OpenShift', 'Python',
        'SQL', 'NoSQL', 'Django', 'Microservices',
        'Serverless', 'Application Security'
      ],
      verifyLink: 'https://coursera.org/verify/professional-cert/CTV9LHZO86JX',
      preview: '/assets/fullStack.pdf'
    },
    {
      title: 'Microsoft UX Design 🎨',
      platform: 'Coursera · Microsoft',
      date: 'September 2024',
      skills: [
        'UI/UX Design',
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design',
        'Accessibility',
        'Design Thinking',
        'Information Architecture',
        'Collaboration',
        'AI Tools for UX'
      ],
      verifyLink: 'https://coursera.org/verify/professional-cert/LWKN26068WRP',
      preview: '/certificates/ux.pdf'
    },
    {
  title: 'Getting Started with Git and GitHub 🚀',
  platform: 'Coursera · IBM',
  date: 'September 2024',
  skills: ['Git', 'GitHub', 'Version Control', 'Open Source Collaboration'],
  verifyLink: 'https://coursera.org/verify/YQJ0LJ47DUHR',
  preview: '/assets/git.pdf'
},
    {
  title: 'Introduction to Generative AI 🤖',
  platform: 'Coursera · Google Cloud',
  date: 'April 2024',
  skills: ['Generative AI', 'AI Fundamentals', 'Google Cloud AI Tools'],
  verifyLink: 'https://coursera.org/verify/9FAMUAE4VUWE',
  preview: '/assets/genAI.pdf'
}

  ];

  return (
    <section id="certifications" className="py-20 bg-transparent dark:bg-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Certifications</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Professional certifications validating my technical expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="relative p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#f0f9ff] to-[#e0f2fe] dark:bg-slate-700 dark:bg-none"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Award icon top right */}
              <div className="absolute top-4 right-4">
                <div className="w-10 h-10 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center">
                  <Award className="text-yellow-500" size={20} />
                </div>
              </div>

              <div className="p-4 pt-6">
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">
                  {cert.title}
                </h3>

                <p className="text-blue-600 dark:text-purple-400 font-semibold mb-2">
                  {cert.platform}
                </p>

                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                  Completed: {cert.date}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={cert.verifyLink}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    Verify
                  </motion.a>

                  <motion.a
                    href={cert.preview !== '#' ? cert.preview : undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    👀 View
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
