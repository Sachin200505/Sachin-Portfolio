import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const FloatingChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm Sachin's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickReplies = [
    "Tell me about Sachin",
    "What are his projects?",
    "Show me his resume",
    "How can I contact him?"
  ];

  const botResponses: { [key: string]: string } = {
    greeting: "Hello! 👋 I'm Sachin's friendly AI assistant. Ask me anything about him, his work, or this site!",
    feeling: "I'm feeling awesome — I never sleep! 🤖✨",
    sachin: "Sachin Sundar is an AI & ML Engineering student building intelligent full-stack solutions! 🧠💻",
    projects: "Sachin’s projects: 🐾 Animal Detection System, 💬 College Fees Bot, 🤖 Smart Drones, and more!",
    resume: "📄 You can find and download Sachin's resume on the Resume section. It covers skills, education, and experience.",
    skills: "⚙️ Sachin knows Python, JavaScript, React, Node.js, TensorFlow, and more AI tools!",
    contact: "📧 Contact Sachin via the Contact section or email: sachinsundar200505@gmail.com",
    experience: "💼 He’s gained experience through internships, open-source, and self-initiated projects.",
    tools: "🧰 Tools: VS Code, Git, Figma, Jupyter, MySQL, Java, Kaggle, and ChatGPT!",
    chatbot: "🤖 That's me! I'm built with React + Framer Motion to assist you here.",
    hobbies: "🎨 Sachin loves coding, reading AI articles, and exploring new tech.",
    education: "🎓 Final-year student in AI & ML Engineering at Presidency University, Bangalore.",
    location: "📍 Based in Bangalore, India 🇮🇳.",
    future: "🚀 He dreams of creating AI products that make life smarter.",
    motivation: "💡 He’s motivated by curiosity and the excitement of building real-world solutions.",
    openSource: "🌍 Sachin contributes to open-source AI and web dev projects.",
    awards: "🏆 He’s received accolades for innovative college projects.",
    internship: "🧑‍💻 Completed internships in AI/ML and web development.",
    languages: "🗣️ Speaks English, Hindi, and Kannada.",
    team: "🤝 Loves collaborating and sharing knowledge in tech communities.",
    freelance: "💼 Open to freelance opportunities in AI and full-stack dev.",
    github: "🐙 Check out Sachin’s GitHub to see his code!",
    linkedin: "🔗 Connect with him on LinkedIn for updates.",
    blog: "📝 Sometimes writes blogs to explain AI concepts.",
    certifications: "📜 Holds certifications in Machine Learning, Python, and Full-Stack Dev.",
    mentor: "🎓 Mentors juniors in coding and project building.",
    dreamJob: "🚀 Dreams of building AI solutions that solve real-world challenges.",
    inspiration: "💡 Inspired by tech leaders who build ethical AI.",
    portfolio: "🗂️ This site is his portfolio — feel free to explore!",
    design: "🎨 He values clean, intuitive design.",
    passion: "❤️ Passionate about AI, web dev, and making tech helpful!",
    timeline: "📅 His journey: college ➜ internships ➜ open-source ➜ more learning!",
    challenges: "⚡ Challenges? He sees them as learning opportunities.",
    proudest: "🎉 Proudest of building solutions that work and help.",
    goals: "🎯 Goals: Keep learning and build meaningful AI tools.",
    fun: "🤣 Fun fact: Sachin loves memes & coffee ☕.",
    downtime: "🛋️ Downtime = reading docs, exploring new APIs, learning frameworks.",
    frameworks: "⚛️ He works with React, Node.js, Express, TensorFlow, PyTorch.",
    databases: "🗄️ Uses MySQL, MongoDB, and Firebase in projects.",
    cloud: "☁️ Deploys on AWS and Azure for real-world testing.",
    testing: "🧪 Uses Jest & Postman for testing code and APIs.",
    versionControl: "🔧 Git & GitHub for clean version control.",
    ide: "💻 VS Code is his favorite editor.",
    wireframe: "🎨 Figma for wireframes and design.",
    productivity: "📒 Notion helps him stay organized.",
    funFact: "🕵️‍♂️ Fun fact: He built this chatbot to help visitors like you!",
    learning: "📚 Always learning new frameworks and AI trends.",
    favoriteProject: "🔥 Favorite project: Smart Animal Detection System!",
    hackathon: "🏃‍♂️ Participated in hackathons to sharpen skills.",
    volunteering: "🙌 Volunteered at tech communities and events.",
    network: "🌐 Believes in strong tech networking.",
    siteStack: "🛠️ This site uses React, TailwindCSS, and Framer Motion.",
    deploy: "🚢 Hosted with Vercel for fast, reliable deployment.",
    accessibility: "♿ Cares about accessibility for all users.",
    feedback: "🗣️ Your feedback is welcome to improve things!",
    hidden: "🤫 Type 'secret' to find an Easter egg!",
    secret: "🎉 You found it! Sachin loves hidden surprises too!",
    social: "📱 Find Sachin on LinkedIn, GitHub, and more.",
    summary: "✨ Curious, passionate, always building something new.",
    nextStep: "🤝 Interested in working together? Reach out!",
    thankYou: "🙏 Thanks for chatting! I’m here anytime.",
    default: "🤔 I’m not sure about that — try asking about Sachin’s skills, projects, or tools!"
  };

  const getBotResponse = (input: string): string => {
    const lower = input.toLowerCase();

    if (["hi", "hello", "hey"].some(w => lower.includes(w))) return botResponses.greeting;
    if (["how are you", "how's it going", "did you eat"].some(w => lower.includes(w))) return botResponses.feeling;
    if (["sachin"].some(w => lower.includes(w))) return botResponses.sachin;
    if (["project", "work"].some(w => lower.includes(w))) return botResponses.projects;
    if (["resume", "cv"].some(w => lower.includes(w))) return botResponses.resume;
    if (["skill", "technology", "tech stack"].some(w => lower.includes(w))) return botResponses.skills;
    if (["contact", "reach", "email"].some(w => lower.includes(w))) return botResponses.contact;
    if (["experience", "job", "timeline"].some(w => lower.includes(w))) return botResponses.experience;
    if (["tool", "software"].some(w => lower.includes(w))) return botResponses.tools;
    if (["chatbot", "assistant", "bot"].some(w => lower.includes(w))) return botResponses.chatbot;
    if (["hobby", "hobbies"].some(w => lower.includes(w))) return botResponses.hobbies;
    if (["education", "study"].some(w => lower.includes(w))) return botResponses.education;
    if (["location", "based"].some(w => lower.includes(w))) return botResponses.location;
    if (["future", "plan", "goal"].some(w => lower.includes(w))) return botResponses.future;
    if (["motivation", "inspiration"].some(w => lower.includes(w))) return botResponses.motivation;
    if (["opensource", "open source"].some(w => lower.includes(w))) return botResponses.openSource;
    if (["award", "achievement"].some(w => lower.includes(w))) return botResponses.awards;
    if (["internship", "intern"].some(w => lower.includes(w))) return botResponses.internship;
    if (["language"].some(w => lower.includes(w))) return botResponses.languages;
    if (["team"].some(w => lower.includes(w))) return botResponses.team;
    if (["freelance"].some(w => lower.includes(w))) return botResponses.freelance;
    if (["github"].some(w => lower.includes(w))) return botResponses.github;
    if (["linkedin"].some(w => lower.includes(w))) return botResponses.linkedin;
    if (["blog"].some(w => lower.includes(w))) return botResponses.blog;
    if (["certificate"].some(w => lower.includes(w))) return botResponses.certifications;
    if (["mentor"].some(w => lower.includes(w))) return botResponses.mentor;
    if (["dream"].some(w => lower.includes(w))) return botResponses.dreamJob;
    if (["portfolio"].some(w => lower.includes(w))) return botResponses.portfolio;
    if (["design"].some(w => lower.includes(w))) return botResponses.design;
    if (["passion"].some(w => lower.includes(w))) return botResponses.passion;
    if (["challenge"].some(w => lower.includes(w))) return botResponses.challenges;
    if (["goal"].some(w => lower.includes(w))) return botResponses.goals;
    if (["fun"].some(w => lower.includes(w))) return botResponses.fun;
    if (["framework"].some(w => lower.includes(w))) return botResponses.frameworks;
    if (["cloud"].some(w => lower.includes(w))) return botResponses.cloud;
    if (["secret"].some(w => lower.includes(w))) return botResponses.secret;

    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botText = getBotResponse(inputValue);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botText,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-96 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 z-50 flex flex-col overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-semibold">Sachin's AI Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`flex items-start gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}>
                      {message.sender === 'user' ? <User size={12} /> : <Bot size={12} />}
                    </div>
                    <div className={`px-3 py-2 rounded-2xl text-sm ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                    }`}>
                      {message.text}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center">
                      <Bot size={12} />
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 px-3 py-2 rounded-2xl">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChatbot;
