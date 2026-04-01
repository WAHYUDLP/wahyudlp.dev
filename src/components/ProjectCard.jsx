import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { fadeInUp } from '../constants/animations';

export default function ProjectCard({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  let category = 'Project';
  let badgeColor = 'bg-slate-700 text-slate-300';

  if (project.tech.includes('Deep Learning') || project.tech.includes('AI')) {
    category = 'AI Research';
    badgeColor = 'bg-cyan-900/50 text-cyan-300 border-cyan-700';
  } else if (project.tech.includes('Android') || project.tech.includes('Kotlin')) {
    category = 'Mobile App';
    badgeColor = 'bg-green-900/50 text-green-300 border-green-700';
  } else if (project.tech.includes('UI/UX') || project.tech.includes('Figma')) {
    category = 'UI/UX Design';
    badgeColor = 'bg-rose-900/50 text-rose-300 border-rose-700';
  } else if (project.tech.includes('Laravel') || project.tech.includes('React') || project.tech.includes('Web')) {
    category = 'Web App';
    badgeColor = 'bg-blue-900/50 text-blue-300 border-blue-700';
  } else if (project.tech.includes('Kubernetes') || project.tech.includes('5G Core')) {
    category = 'Infrastructure';
    badgeColor = 'bg-orange-900/50 text-orange-300 border-orange-700';
  }

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <motion.div
      layout
      variants={fadeInUp}
      whileHover={{ y: -8 }}
      className="flex flex-col h-full bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700/50 group hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
    >
      <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img
          src={project.images[currentIndex]}
          alt={project.title}
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-transform duration-700 ease-out"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />

        <div className="hidden absolute inset-0 flex-col items-center justify-center text-slate-400 bg-slate-800">
          <span className="text-4xl mb-2">Image</span>
          <span className="text-[10px] uppercase tracking-widest opacity-50">No Preview</span>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80"></div>

        <div className={`absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md shadow-sm ${badgeColor}`}>
          {category}
        </div>

        {project.images.length > 1 && (
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="bg-black/40 hover:bg-black/70 text-white p-1.5 rounded-full backdrop-blur-sm transition-colors">{'<-'}</button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="bg-black/40 hover:bg-black/70 text-white p-1.5 rounded-full backdrop-blur-sm transition-colors">{'->'}</button>
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-bold text-slate-800 dark:text-white text-lg mb-2 leading-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t, i) => (
            <span key={i} className="text-[9px] font-bold uppercase tracking-wide px-2 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded border border-slate-200 dark:border-slate-600">
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="text-[9px] font-bold px-2 py-1 text-slate-400">+{project.tech.length - 4}</span>
          )}
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow line-clamp-3">
          {project.desc}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50 flex gap-3">
          <div className="flex-grow">
            {['live', 'paper', 'prototype'].includes(project.demoType) && project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full h-10 bg-primary hover:bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-md shadow-blue-500/20 transition-all hover:-translate-y-0.5"
              >
                {project.demoType === 'paper' && 'Read Paper'}
                {project.demoType === 'prototype' && 'Prototype Preview Only'}
                {project.demoType === 'live' && 'Live Demo'}
                <FaExternalLinkAlt size={10} />
              </a>
            )}

            {(!project.link || !['live', 'paper', 'prototype'].includes(project.demoType)) && (
              <div
                title="Project tersedia sebagai dokumentasi, prototype, atau local build"
                className="flex items-center justify-center gap-2 w-full h-10 border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider rounded-lg bg-slate-50 dark:bg-slate-800/50 cursor-not-allowed"
              >
                {project.demoType === 'apk' && 'APK Available (Request Only)'}
                {project.demoType === 'research' && 'Research / Simulation'}
                {project.demoType === 'local' && 'Local Build'}
                {project.demoType === 'inactive' && 'Deployment Inactive'}
              </div>
            )}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 text-slate-600 dark:text-slate-400 hover:text-white bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-800 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600 rounded-lg transition-all"
              title="View Source Code"
            >
              <FaGithub size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
