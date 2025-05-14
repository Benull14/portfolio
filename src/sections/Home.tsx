import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const Home: React.FC = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  // Placeholder URL - replace with actual photo
  const placeholderImage = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-grid-slate-200/60 dark:bg-grid-slate-700/30 bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,50%,black)] dark:[mask-image:linear-gradient(to_bottom,transparent,30%,black)]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            <div className="animate-fadeIn">
              <p className="text-xl text-blue-600 dark:text-blue-400 font-medium mb-2">
                {t('home', 'greeting')}
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                {t('home', 'name')}
              </h1>
              <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8">
                {t('home', 'tagline')}
              </p>
              <a 
                href="#projects" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                {t('home', 'cta')}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl animate-fadeInUp">
              <img 
                src={placeholderImage} 
                alt="Qusai Alzaeem" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 dark:text-gray-400">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Home;