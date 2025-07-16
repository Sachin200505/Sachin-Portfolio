import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Sachin200505', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sachin-sundar-s/', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://t.me/+917695958854', label: 'Telegram' },
{ icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sachinsundar200505@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-slate-700 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
<img
  src="/assets/logo.svg"
  alt="Sachin Logo"
  className="h-10 w-auto mb-4"
/>
            <p className="text-slate-400 mb-6 leading-relaxed">
              AI & ML Engineering Student passionate about creating innovative solutions 
              that bridge technology and real-world problems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-3 text-slate-400">
              <p>📧 sachinsundar200505@gmail.com</p>
              <p>📱 +91 7695958854</p>
              <p>📍 Komarapalayam, Namakkal, Tamil Nadu, India</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-slate-800 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 flex items-center justify-center gap-2">
            Made with <Heart className="text-red-500" size={16} /> by Sachin Sundar
          </p>
          <p className="text-sm text-slate-500 mt-2">
            © 2025 Sachin Sundar. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;