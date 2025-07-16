import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_9rpnyas',
      'template_31b3xqi',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'B2yQ0UEgz3EBR2Mox'
    )
    .then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    })
    .catch((error) => {
      console.error('FAILED...', error);
      setIsSubmitting(false);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sachinsundar200505@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sachinsundar200505@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7695958854',
      href: 'tel:+917695958854'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Komarapalayam, Namakkal, Tamil Nadu, India',
      href: 'https://maps.app.goo.gl/45B8DboRH2zghmjd7'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/Sachin200505'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sachin-sundar-s/'
    },
    {
      icon: MessageCircle,
      name: 'Telegram',
      href: 'https://t.me/+917695958854'
    },
    {
      icon: Mail,
      name: 'Email',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sachinsundar200505@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-transparent dark:bg-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Have a project in mind? Let's work together to bring your ideas to life!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
className="p-6 bg-gradient-to-br from-[#ffffff] via-[#f0f9ff] to-[#e0f2fe] dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-xl shadow hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
              Send Me a Message
            </h3>

            {isSubmitted && (
              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                animate={{
                  scale: [0.5, 1.2, 1],
                  opacity: 1,
                  rotate: [-10, 0, 0],
                }}
                transition={{ type: 'spring', stiffness: 200, damping: 10, duration: 0.8 }}
                className="relative overflow-hidden p-8 bg-gradient-to-br from-green-600 via-green-500 to-green-400 dark:bg-green-700 rounded-xl shadow-xl text-center text-white font-semibold text-lg mb-6"
              >
                {/* Confetti Dots */}
                <motion.div
                  className="absolute top-0 left-1/2 w-2 h-2 bg-yellow-300 rounded-full"
                  animate={{ y: [-10, -40], opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: 0 }}
                />
                <motion.div
                  className="absolute top-0 right-1/2 w-2 h-2 bg-pink-300 rounded-full"
                  animate={{ y: [-10, -40], x: [0, 20], opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }}
                />
                <motion.div
                  className="absolute top-0 left-1/3 w-2 h-2 bg-purple-300 rounded-full"
                  animate={{ y: [-10, -40], x: [0, -20], opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }}
                />

                🎉 Thank you for your message!<br /> I'll get back to you soon!
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                    placeholder="youremail@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 resize-none"
                  placeholder="Tell me about your project or question..."
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200">{info.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="p-3 bg-white/30 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-slate-700 dark:text-slate-300 border border-white/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6">
              <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">Let's Build Something Amazing Together!</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                I'm always excited to work on innovative projects and collaborate with like-minded individuals.
                Whether it's a web application, AI solution, or automation project, let's turn your ideas into reality!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
