'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { Heart, Github, Linkedin, ArrowUp } from 'lucide-react';


const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/mohamedfrontenddev-byte',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/mohamedfrontenddevdev',
    label: 'LinkedIn',
  },
];

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-gray-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto section-padding py-10 sm:py-12" style={{ paddingBottom: 'max(2.5rem, calc(2.5rem + env(safe-area-inset-bottom, 0)))' }}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Brand */}
          <div className="text-center md:text-start min-w-0 order-1">
            <h3 className="text-lg sm:text-xl font-bold gradient-text break-words">{t('footer.name')}</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 break-words">{t('footer.role')}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5 sm:gap-4 order-2">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-10 sm:h-10 rounded-xl bg-gray-100 dark:bg-dark-surface flex items-center justify-center
                           text-gray-600 dark:text-gray-400
                           hover:bg-primary-50 dark:hover:bg-primary-500/10
                           hover:text-primary-600 dark:hover:text-primary-400
                           hover:scale-110 hover:shadow-md hover:shadow-primary-500/20
                           transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 sm:w-10 sm:h-10 rounded-xl bg-gray-100 dark:bg-dark-surface flex items-center justify-center
                       text-gray-600 dark:text-gray-400
                       hover:bg-primary-50 dark:hover:bg-primary-500/10
                       hover:text-primary-600 dark:hover:text-primary-400
                       hover:scale-110 hover:shadow-md hover:shadow-primary-500/20
                       transition-all duration-300 order-3"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-7 sm:mt-8 pt-7 sm:pt-8 border-t border-gray-200 dark:border-dark-border text-center">
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 flex-wrap break-words px-2">
            <span>&copy; {new Date().getFullYear()} {t('footer.name')}. {t('footer.copyright')}</span>
            <span className="mx-1">{t('footer.madeWith')}</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 flex-shrink-0" />
          </p>
        </div>
      </div>
    </footer>
  );
}
