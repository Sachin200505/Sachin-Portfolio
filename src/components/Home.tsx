import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Download, Mail, Github, Linkedin } from 'lucide-react';

const FloatingShape: React.FC = () => {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8b5cf6"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

const Home: React.FC = () => {
  return (
<section id="home" className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* 3D Background */}
<div className="absolute inset-0 opacity-20 overflow-hidden">
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} enablePan={false} enableRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 3, 5]} />
            <FloatingShape />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
  className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center lg:text-left"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.8 }}
>
  <span className="block text-4xl sm:text-5xl lg:text-6xl">
  <span className="gradient-text">Hi, I'm Sachin</span>{' '}
  <span role="img" aria-label="wave" className="text-black dark:text-white">
    👋
  </span>
</span>

</motion.h1>


            
            <motion.p
              className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              AI & ML Engineering Student passionate about{' '}
              <span className="text-blue-600 dark:text-purple-400 font-semibold">
                Full-Stack Development
              </span>,{' '}
              <span className="text-blue-600 dark:text-purple-400 font-semibold">
                Intelligent Systems
              </span>, and{' '}
              <span className="text-blue-600 dark:text-purple-400 font-semibold">
                Automation
              </span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
  href="/assets/resume.pdf"
  download="resume.pdf"
  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300 glow"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <Download size={20} />
  Download CV
</motion.a>



              
              <motion.a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:border-purple-400 dark:text-purple-400 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {[
                { icon: Github, href: 'https://github.com/Sachin200505', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/sachin-sundar-s/', label: 'LinkedIn' },
{ icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sachinsundar200505@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-purple-400"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
<div className="absolute inset-8 bg-gradient-to-r from-sky-300 to-[#0f172a] dark:bg-slate-800 rounded-full flex items-center justify-center text-6xl">
                🚀
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;