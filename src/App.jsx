import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaReact, FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaArrowRight, FaPython } from 'react-icons/fa';

import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import { fadeInUp } from './constants/animations';
import { skills, categories, experiences, blogs, allProjects } from './data/portfolioData';

function App() {
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleSkills, setVisibleSkills] = useState(12);
  const [visibleProjects, setVisibleProjects] = useState(3);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((skill) => skill.type === activeCategory);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  const toggleSkills = () => {
    if (visibleSkills < filteredSkills.length) {
      setVisibleSkills(filteredSkills.length);
    } else {
      setVisibleSkills(12);
    }
  };

  const toggleProjects = () => {
    if (visibleProjects < allProjects.length) {
      setVisibleProjects((prev) => prev + 3);
    } else {
      setVisibleProjects(3);

      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="font-sans text-slate-600 antialiased dark:bg-slate-900 dark:text-slate-300 transition-colors duration-300 selection:bg-primary selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-[0%]"
        style={{ scaleX }}
      />

      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 shadow-md backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="#home" className="text-2xl font-extrabold text-primary tracking-tighter">
              WD<span className="text-slate-900 dark:text-white">.</span>
            </a>

            <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-800">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wide text-green-700 dark:text-green-300">Available for Work</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {['Home', 'Skills', 'Experience', 'Portfolio', 'Writings', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-base font-medium text-slate-600 hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-white relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}

            <div className="flex items-center gap-3 ml-4">
              <span className={`text-lg ${theme === 'light' ? 'text-yellow-500' : 'text-slate-400'}`}>☀</span>
              <div onClick={toggleTheme} className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300'}`}>
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${theme === 'dark' ? 'translate-x-6' : 'translate-x-0'}`}></div>
              </div>
              <span className={`text-lg ${theme === 'dark' ? 'text-blue-400' : 'text-slate-400'}`}>🌙</span>
            </div>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-2xl text-slate-800 dark:text-white">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-800 shadow-xl border-t dark:border-slate-700">
              <div className="flex flex-col p-6 gap-6 text-center">
                {['Home', 'Skills', 'Experience', 'Portfolio', 'Writings', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-800 dark:text-white hover:text-primary">
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section id="home" className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden dark:bg-slate-900">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-sm font-bold mb-6 border border-blue-100 dark:border-blue-800"
            >
              🚀 Open to Work & Collaboration
            </motion.span>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              Bridging Robust Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                with Advanced AI.
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Hi, I&apos;m <span className="font-bold text-slate-900 dark:text-white">Wahyu</span>. A 6th-semester CS student specializing in <span className="text-blue-600 font-semibold">Software Engineering</span> & <span className="text-cyan-600 font-semibold">Artificial Intelligence</span> at Universitas Brawijaya.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="#portfolio" className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all">
                Explore Projects
              </a>
              <a href="https://drive.google.com/file/d/1ThzU073tCyAaC65YWMILNbSyHfaFnznM/view?usp=drive_link" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 text-slate-700 dark:text-white rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center gap-2">
                <FaEnvelope className="text-sm" /> View CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-blue-200 to-cyan-200 dark:from-blue-600/50 dark:to-cyan-600/50 rounded-full blur-[60px] -z-10 animate-pulse"></div>

            <div className="absolute top-10 right-0 lg:right-10 opacity-30 dark:opacity-50 pointer-events-none select-none hidden lg:block font-mono text-sm text-blue-900/50 dark:text-blue-200/50 rotate-12 z-0">
              <pre className="font-bold">{`
class Engineer {
  constructor() {
    this.name = "Wahyu";
    this.skills = ["AI", "Web", "Infra"];
  }
    constructor2() {
    this.name = "Wahyu";
    this.skills = ["AI", "Web", "Application"];
  }
  solveProblem() {
    return "Solution Found!";
  }
}
              `}</pre>
            </div>

            <div className="relative">
              <img
                src="/Profil.JPG"
                alt="Profile"
                className="w-64 h-64 lg:w-[400px] lg:h-[400px] object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl relative z-10 transition-all duration-300 dark:shadow-[0_0_40px_rgba(59,130,246,0.6)]"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute -left-4 top-10 z-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/50 dark:border-slate-700/50 flex items-center gap-2"
              >
                <div className="bg-blue-100 p-2 rounded-full"><FaPython className="text-blue-600 text-xl" /></div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200 pr-2">AI Engineer</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                className="absolute -right-8 bottom-10 z-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white/50 dark:border-slate-700/50 flex items-center gap-2"
              >
                <div className="bg-cyan-100 p-2 rounded-full"><FaReact className="text-cyan-600 text-xl" /></div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-200 pr-2">Web Developer</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="py-10 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 overflow-hidden flex">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: [0, -1035] }}
          transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center gap-2 text-slate-400 dark:text-slate-500 font-bold text-xl opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <span className="text-3xl">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Tech Stack & Tools</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Technologies and tools I use to develop AI-driven systems and modern web applications.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleSkills(12);
                }}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-300 border ${activeCategory === category
                  ? 'bg-primary text-white border-primary shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 max-w-6xl mx-auto mb-10"
          >
            <AnimatePresence>
              {filteredSkills.slice(0, visibleSkills).map((skill, idx) => (
                <SkillCard key={idx} {...skill} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredSkills.length > 12 && (
            <div className="text-center">
              <button onClick={toggleSkills} className="text-sm font-semibold text-primary hover:text-blue-700 underline underline-offset-4 transition-colors">
                {visibleSkills < filteredSkills.length
                  ? `Show More Skills (${filteredSkills.length - visibleSkills} hidden)`
                  : 'Show Less Skills ↑'}
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="experience" className="py-24 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="text-primary">⚡</span> Experience
              </h3>
              <div className="space-y-10 border-l-2 border-slate-200 dark:border-slate-700 pl-8 ml-2">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-primary dark:bg-slate-900 transition-colors group-hover:bg-primary"></span>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white">{exp.role}</h4>
                    <p className="text-primary font-medium mb-1">{exp.org}</p>
                    <span className="text-sm text-slate-400 mb-3 block">{exp.year}</span>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="text-primary">🎓</span> Education
              </h3>

              <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>

                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white">Universitas Brawijaya</h4>
                    <p className="text-primary font-medium">Bachelor of Informatics Engineering</p>
                  </div>
                  <span className="hidden sm:block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-bold rounded-full border border-blue-100 dark:border-blue-800">
                    6th Semester
                  </span>
                </div>

                <p className="text-sm text-slate-400 mb-6 flex items-center gap-2">
                  <span>2023 - Present</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>Malang, Indonesia</span>
                </p>

                <h5 className="font-semibold text-slate-700 dark:text-slate-300 mb-4 text-sm uppercase tracking-wider">
                  Key Coursework
                </h5>

                <div className="flex flex-wrap gap-2">
                  {[
                    'Software Engineering',
                    'Artificial Intelligence',
                    'Machine Learning',
                    'Web Development',
                    'Cloud Computing',
                    'System Analysis',
                    'Data Structures',
                  ].map((course, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-600 hover:border-primary hover:text-primary transition-colors cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
              <p className="text-slate-500">A selection of projects ranging from web apps to simple games.</p>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm font-medium text-slate-400"
            >
              Showing {Math.min(visibleProjects, allProjects.length)} of {allProjects.length} Projects
            </motion.span>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            <AnimatePresence mode="popLayout">
              {allProjects.slice(0, visibleProjects).map((item, index) => (
                <ProjectCard key={index} project={item} />
              ))}
            </AnimatePresence>
          </motion.div>

          {allProjects.length > 3 && (
            <div className="text-center">
              <button
                onClick={toggleProjects}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 dark:bg-slate-800 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-full hover:bg-slate-50 transition-all shadow-sm"
              >
                {visibleProjects < allProjects.length
                  ? <>Load More Projects <FaArrowRight size={14} /></>
                  : <>Show Less Projects ↑</>}
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="writings" className="relative py-24 overflow-hidden dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 lg:sticky lg:top-24"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-bold mb-4 border border-blue-100 dark:border-blue-800">
                <span>✍️</span> RESEARCH & THOUGHTS
              </div>

              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                Selected <br /> Writings
              </h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                A collection of research papers and essays documenting my academic journey in Blockchain, IoT, and Social Linguistics.
              </p>

              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </motion.div>

            <div className="lg:w-2/3 flex flex-col gap-4 w-full">
              {blogs.map((blog, idx) => (
                <motion.a
                  key={idx}
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="group flex items-center gap-6 p-5 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/40 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300"
                >
                  <div className={`hidden sm:flex flex-shrink-0 w-12 h-12 items-center justify-center rounded-lg border ${blog.color} bg-opacity-10 dark:bg-opacity-10`}>
                    {blog.icon}
                  </div>

                  <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors truncate pr-4">
                        {blog.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400 whitespace-nowrap flex-shrink-0 mt-1">
                        {blog.date}
                      </span>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-1 mb-2">
                      {blog.desc}
                    </p>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                        {blog.category}
                      </span>
                      <span className="text-xs font-semibold text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                        Read Paper <FaArrowRight size={10} />
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-800/30">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-left"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Available for new opportunities</span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                Got a wild idea? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Let&apos;s build it.
                </span>
              </h2>

              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                I&apos;m currently looking for new challenges in <span className="text-slate-900 dark:text-white font-semibold">Software Engineering</span> and <span className="text-slate-900 dark:text-white font-semibold">AI Development</span>. Whether you have a question or just want to say hi, my inbox is always open.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              <a
                href="mailto:wahyudwilaksanaputri@gmail.com"
                className="group relative w-full p-8 rounded-3xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 overflow-hidden shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1"
                onClick={(e) => {
                  if (!/Mobi|Android/i.test(navigator.userAgent)) {
                    e.preventDefault();
                    window.open(
                      'https://mail.google.com/mail/?view=cm&to=wahyudwilaksanaputri@gmail.com',
                      '_blank',
                    );
                  }
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 dark:bg-black/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl transition-transform group-hover:scale-150 duration-700"></div>

                <div className="relative z-10 flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Shoot me an email</h3>
                    <p className="text-slate-400 dark:text-slate-500 text-sm">wahyudwilaksanaputri@gmail.com</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 dark:bg-black/10 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <FaArrowRight size={20} />
                  </div>
                </div>
              </a>

              <div className="grid grid-cols-3 gap-4">
                <a href="https://github.com/WAHYUDLP" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-black dark:hover:border-white hover:shadow-lg transition-all group">
                  <FaGithub size={28} className="text-slate-400 group-hover:text-black dark:group-hover:text-white transition-colors mb-2" />
                  <span className="text-xs font-bold text-slate-500">GitHub</span>
                </a>

                <a href="https://www.linkedin.com/in/wahyudwilaksanaputri/" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-[#0077b5] hover:shadow-lg transition-all group">
                  <FaLinkedin size={28} className="text-slate-400 group-hover:text-[#0077b5] transition-colors mb-2" />
                  <span className="text-xs font-bold text-slate-500">LinkedIn</span>
                </a>

                <a href="https://instagram.com/wahyu.ptri" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:border-[#E1306C] hover:shadow-lg transition-all group">
                  <FaInstagram size={28} className="text-slate-400 group-hover:text-[#E1306C] transition-colors mb-2" />
                  <span className="text-xs font-bold text-slate-500">Instagram</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-500 text-sm dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <p>&copy; {new Date().getFullYear()} Wahyu Dwi Laksana Putri. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
