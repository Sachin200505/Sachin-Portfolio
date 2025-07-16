import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Eye, Trash, Pin } from 'lucide-react';

const solidColorsLight = [
  'bg-red-200',
  'bg-yellow-200',
  'bg-green-200',
  'bg-blue-200',
  'bg-purple-200',
  'bg-pink-200'
];

const solidColorsDark = [
  'bg-red-800',
  'bg-yellow-800',
  'bg-green-800',
  'bg-blue-800',
  'bg-purple-800',
  'bg-pink-800'
];

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      role: 'Associate Professor, AI Department',
      review: 'Sachin is an exceptional student with a rare combination of theoretical knowledge and practical implementation skills. His animal detection project was outstanding.',
      rating: 5,
      date: '2024-01-15 14:30'
    },
  ]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    review: '',
    rating: 5
  });
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date();
    const newTestimonial = {
      id: testimonials.length + 1,
      ...formData,
      date: now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
    };
    setTestimonials([newTestimonial, ...testimonials]);
    setFormData({ name: '', role: '', review: '', rating: 5 });
    setIsFormOpen(false);
  };

  const deleteReview = (id: number) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  const renderStars = (rating: number) => (
    <div className="flex justify-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`text-3xl ${i < rating ? 'text-yellow-400 glow-star glitter-effect' : 'text-gray-300'}`}
        >
          ★
        </span>
      ))}
    </div>
  );

  const displayedTestimonials = showAllReviews ? testimonials : testimonials.slice(0, 3);

  return (
    <section id="testimonials" className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 text-gradient">Testimonials</h2>
        <button onClick={() => setIsFormOpen(true)} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded shadow-md">Add Review</button>
      </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-0">
        {displayedTestimonials.map((t, index) => (
          <motion.div
  key={t.id}
  className={`relative w-full max-w-xs sm:max-w-sm md:max-w-md h-auto p-6 shadow-2xl ${theme === 'dark' ? solidColorsDark[index % solidColorsDark.length] : solidColorsLight[index % solidColorsLight.length]} rounded-3xl transform hover:scale-105 transition-transform paper-texture`}
  whileHover={{ rotate: 2, scale: 1.05 }}
>

            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Pin size={28} className="text-red-600 drop-shadow-xl" />
            </div>

            <h4 className="font-bold mb-1 text-center text-lg text-gray-900 dark:text-white">{t.name}</h4>
            <p className="text-xs text-center text-gray-900 dark:text-white mb-1">{t.role}</p>
            <p className="text-xs text-center text-gray-900 dark:text-white mb-1">{t.date}</p>
            <div className="mb-3">{renderStars(t.rating)}</div>

            <p className="text-sm text-center italic mb-4 text-gray-900 dark:text-white">"{t.review}"</p>

            <button
              onClick={() => deleteReview(t.id)}
              className="absolute bottom-4 right-4 text-red-600 hover:text-red-800"
            >
              <Trash size={18} />
            </button>
          </motion.div>
        ))}
     </div>

<div className="text-center mt-6">
  <button
    onClick={() => setShowAllReviews(!showAllReviews)}
    className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-violet-500 hover:to-blue-500 text-white px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition duration-300 flex items-center gap-2 mx-auto"
  >
    <Eye /> {showAllReviews ? 'Show Less' : 'View All Reviews'}
  </button>
</div>


      <AnimatePresence>
        {isFormOpen && (
          <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className={`p-6 rounded-lg shadow-lg w-80 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xl font-bold mb-4">Add a Testimonial</h3>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full mb-2 p-2 border rounded bg-transparent" required />
                <input type="text" placeholder="Role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full mb-2 p-2 border rounded bg-transparent" required />
                <textarea placeholder="Review" value={formData.review} onChange={(e) => setFormData({ ...formData, review: e.target.value })} className="w-full mb-2 p-2 border rounded bg-transparent" required />
                <select value={formData.rating} onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })} className="w-full mb-4 p-2 border rounded bg-transparent">
                  {[5,4,3,2,1].map(num => <option key={num} value={num}>{num} Star{num>1 ? 's' : ''}</option>)}
                </select>
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setIsFormOpen(false)} className="px-4 py-2 border rounded">Cancel</button>
                  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Testimonials;
