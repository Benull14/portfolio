import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo/Name */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {isRTL ? 'قصي الزعيم' : 'Qusai Alzaeem'}
            </h3>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a 
              href="#" 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:example@example.com" 
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {currentYear} Qusai Alzaeem. {t('footer', 'rights')}
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-500 text-sm">
          {t('footer', 'poweredBy')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;