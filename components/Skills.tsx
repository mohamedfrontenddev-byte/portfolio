'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import {
  Code2,
  FileCode2,
  Braces,
  Atom,
  SquareStack,
  Wind,
  GitBranch,
  Github,
  Rocket,
  Figma,
  Smartphone,
  Plug,
  Zap,
  Monitor,

} from 'lucide-react';
import { SiMui } from 'react-icons/si';

const skillCategories = [
  {
    title: 'skills.frontend',
    titleAr: 'واجهة أمامية',
    skills: [
      { name: 'HTML', icon: FileCode2, color: 'text-orange-500' },
      { name: 'CSS', icon: Code2, color: 'text-blue-500' },
      { name: 'JavaScript', icon: Braces, color: 'text-yellow-500' },
       { name: 'TypeScript', icon: Braces, color: 'text-yellow-500' },
      { name: 'React', icon: Atom, color: 'text-cyan-400' },
      { name: 'Next.js', icon: SquareStack, color: 'text-gray-800 dark:text-gray-200' },
      { name: ' Bootstrap', icon: Wind, color: 'text-sky-400' },
      { name: 'Tailwind CSS', icon: Code2, color: 'text-blue-500' },
    ],
  },
  {
    title: 'skills.tools',
    titleAr: 'أدوات',
    skills: [
      { name: 'Git', icon: GitBranch, color: 'text-orange-600' },
      { name: 'GitHub', icon: Github, color: 'text-gray-800 dark:text-white' },
      { name: 'Vercel', icon: Rocket, color: 'text-black dark:text-white' },
      { name: 'Figma', icon: Figma, color: 'text-purple-500' },
       { name: 'visual studio code', icon: SiMui, color: 'text-orange-600' },
    ],
  },
  {
    title: 'skills.concepts',
    titleAr: 'مفاهيم',
    skills: [
      { name: 'Responsive Design', icon: Smartphone, color: 'text-green-500' },
      { name: 'API Integration', icon: Plug, color: 'text-indigo-500' },
      { name: 'Performance Optimization', icon: Zap, color: 'text-amber-500' },
    ],
  },
];

export default function Skills() {
  const { language, t } = useLanguage();

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-32 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            {t('skills.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 text-gray-900 dark:text-white break-words text-balance">
            {t('skills.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong rounded-2xl p-5 sm:p-6 hover:shadow-xl transition-shadow min-w-0"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-5 sm:mb-6 flex items-center gap-2 min-w-0">
                <div className="shrink-0 w-7 sm:w-8 h-1 rounded-full bg-gradient-to-r from-primary-500 to-purple-500" />
                <span className="break-words min-w-0">
                  {language === 'ar' ? category.titleAr : t(category.title)}
                </span>
              </h3>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white dark:bg-dark-surface border border-gray-100 dark:border-dark-border hover:border-primary-200 dark:hover:border-primary-500/30 transition-all cursor-default group min-w-0"
                  >
                    <div className={`shrink-0 aspect-square w-8 sm:w-9 rounded-lg bg-gray-50 dark:bg-dark-card flex items-center justify-center ${skill.color} group-hover:scale-110 transition-transform`}>
                      <skill.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 break-words min-w-0">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
