'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, FileText, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative min-h-mobile min-h-[100dvh] flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-12 lg:gap-16 xl:gap-20">
          
          <div className="flex-1 w-full min-w-0 text-center lg:text-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex max-w-full items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-50 dark:bg-primary-500/10 border border-primary-200 dark:border-primary-500/20 text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium mb-5 sm:mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">{t('hero.available')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 break-words text-balance"
            >
              <span className="block text-gray-900 dark:text-white">{t('hero.name')}</span>
              <span className="block gradient-text mt-1.5 sm:mt-2">{t('hero.title')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed break-words"
            >
              {t('hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start w-full"
            >
              <a href="#projects" className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto min-w-0">
                <ArrowDown className="w-4 h-4 shrink-0" />
                <span className="truncate">{t('hero.viewProjects')}</span>
              </a>
              <a href="/cv/" className="btn-outline flex items-center justify-center gap-2 w-full sm:w-auto min-w-0">
                <FileText className="w-4 h-4 shrink-0" />
                <span className="truncate">{t('hero.viewCV')}</span>
              </a>
            </motion.div>
          </div>


          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative shrink-0 w-full max-w-[min(70%,18rem)] sm:max-w-[min(60%,22rem)] md:max-w-[min(55%,24rem)] lg:w-auto lg:max-w-[22rem] xl:max-w-[24rem]"
          >
            <div className="relative mx-auto w-full aspect-square">
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 opacity-20 blur-2xl animate-pulse-slow" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-dark-surface shadow-2xl bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30">
                <Image
                  src="/portfolio.png"
                  alt="Mohamed Allam"
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>


              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute right-[4%] bottom-[4%] sm:right-[-8%] sm:bottom-[-8%] px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl glass shadow-lg max-w-[45%]"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 shrink-0 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">React</span>
                </div>
              </motion.div>


              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-[4%] top-[4%] sm:left-[-8%] sm:top-[-8%] px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl glass shadow-lg max-w-[45%]"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 shrink-0 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 truncate">Next.js</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
