'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/translations';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const { language, t } = useLanguage();
  const isRtl = language === 'ar';

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-32 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            {t('projects.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 text-gray-900 dark:text-white break-words text-balance">
            {t('projects.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative glass-strong rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 min-w-0"
            >
             

              <div className="relative w-full aspect-[4/3] xs:aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={language === 'ar' ? project.titleAr : project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* View Project hint */}
                <div
                  className={`absolute top-3 ${
                    isRtl ? 'left-3' : 'right-3'
                  } flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 text-gray-900 dark:bg-dark-card/90 dark:text-white backdrop-blur opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300 max-w-[80%]`}
                >
                  <span className="truncate">{t('projectDetail.viewProject')}</span>
                  <ArrowUpRight className="w-3 h-3 shrink-0" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 relative z-10 pointer-events-none">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors break-words text-balance">
                  {language === 'ar' ? project.titleAr : project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 break-words">
                  {language === 'ar' ? project.descriptionAr : project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-500/20 break-words"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-medium bg-gray-100 dark:bg-dark-surface text-gray-600 dark:text-gray-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Buttons (must stay above the stretched card link) */}
                <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 pointer-events-auto relative z-20">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-primary-600 text-white text-xs sm:text-sm font-medium hover:bg-primary-700 transition-colors min-w-0"
                  >
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="truncate">{t('projects.liveDemo')}</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-gray-200 dark:border-dark-border text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors min-w-0"
                  >
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span className="truncate">{t('projects.github')}</span>
                  </a>
                </div>
              </div>

            
              <Link
                href={`/projects/${project.id}/`}
                aria-label={language === 'ar' ? project.titleAr : project.title}
                className="absolute inset-0 z-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-dark-bg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

