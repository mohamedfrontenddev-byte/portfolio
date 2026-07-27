'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { Code2, Monitor, Palette, User, MapPin, Mail, Phone, Github } from 'lucide-react';

const features = [
  { icon: Code2, key: 'about.cleanCode' },
  { icon: Monitor, key: 'about.responsive' },
  { icon: Palette, key: 'about.modernUI' },
  { icon: User, key: 'about.ux' },
];

const socialLinks = [
  { icon: Phone, href: 'https://wa.me/201027511205', label: 'WhatsApp', color: 'hover:text-green-500' },
  { icon: Github, href: 'https://github.com/mohamedfrontenddev-byte', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
  { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=mohamed.frontend.dev@gmail.com', label: 'Email', color: 'hover:text-red-500' },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-32 relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            {t('about.subtitle')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3 text-gray-900 dark:text-white break-words text-balance">
            {t('about.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="min-w-0"
          >
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 break-words">
              {t('about.description')}
            </p>

         
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-white dark:bg-dark-card border border-gray-100 dark:border-dark-border shadow-sm hover:shadow-md transition-shadow min-w-0"
                >
                  <div className="shrink-0 aspect-square w-9 sm:w-10 rounded-lg bg-primary-50 dark:bg-primary-500/10 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="font-medium text-sm sm:text-base text-gray-800 dark:text-gray-200 break-words min-w-0">
                    {t(feature.key)}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 sm:space-y-6 min-w-0"
          >
            <div className="glass rounded-2xl p-5 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-5 sm:mb-6 break-words">
                {t('about.connect')}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-gray-50 dark:bg-dark-surface hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-all group min-w-0 ${social.color}`}
                  >
                    <div className="shrink-0 aspect-square w-11 sm:w-12 rounded-xl bg-white dark:bg-dark-card flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm sm:text-base text-gray-800 dark:text-gray-200 truncate">
                        {social.label}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate break-all">
                        {social.href.replace(/^https?:\/\//, '').replace(/^mailto:/, '')}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
