import { motion } from 'framer-motion';

export default function SkillCard({ name, icon }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-primary transition-all flex flex-col items-center justify-center gap-2"
    >
      <div className="text-3xl">{icon}</div>
      <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 text-center">{name}</span>
    </motion.div>
  );
}
