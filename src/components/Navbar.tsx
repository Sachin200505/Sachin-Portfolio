import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Resume', href: '#resume' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         <motion.div
  className="text-xl sm:text-2xl font-bold gradient-text"
  whileHover={{ scale: 1.05 }}
>
  <img
    src={isDark ? '/assets/logo.svg' : '/assets/logo1.svg'}
    alt="Sachin Logo"
    className="h-10 w-auto"
  />
</motion.div>



          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-purple-400 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">

            {/* Theme Toggle Animated */}
            <motion.button
              onClick={toggleTheme}
              className="p-3 rounded-full bg-gradient-to-tr from-yellow-100 via-orange-200 to-pink-200 dark:from-indigo-800 dark:via-purple-900 dark:to-blue-900 shadow-lg transition-colors relative overflow-hidden h-12 w-12 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ y: 20, rotate: -180, opacity: 0, scale: 0.5 }}
                    animate={{ y: 0, rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -20, rotate: 180, opacity: 0, scale: 0.5 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="text-yellow-400"
                  >
                    <Sun size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ y: -20, rotate: 180, opacity: 0, scale: 0.5 }}
                    animate={{ y: 0, rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 20, rotate: -180, opacity: 0, scale: 0.5 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="text-purple-300"
                  >
                    <Moon size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-full bg-slate-200 dark:bg-slate-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
