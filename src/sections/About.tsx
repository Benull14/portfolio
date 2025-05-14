import React from 'react';
import { Award, BookOpen, Code, Star } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

const About: React.FC = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  // Get translated data
  const educationItems = t('about', 'educationItems');
  const experienceItems = t('about', 'experienceItems');
  const skillsItems = t('about', 'skillsItems');

  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-800"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('about', 'title')} 
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center">
            {t('about', 'intro')}
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education & Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <BookOpen size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
                {t('about', 'education')}
              </h3>
              
              <div className="space-y-6">
                {educationItems.map((item: any, index: number) => (
                  <div 
                    key={index} 
                    className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 animate-fadeInLeft"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                      {item.degree}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.institution}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500">
                      {item.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Code size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
                {t('about', 'experience')}
              </h3>
              
              <div className="space-y-6">
                {experienceItems.map((item: any, index: number) => (
                  <div 
                    key={index} 
                    className="border-l-4 border-blue-600 dark:border-blue-400 pl-4 animate-fadeInRight"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                      {item.position}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.company}
                    </p>
                    <p className="text-gray-500 dark:text-gray-500">
                      {item.period}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <Star size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
              {t('about', 'skills')}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skillsItems.map((skill: string, index: number) => (
                <div 
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-lg flex items-center animate-fadeIn"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Award size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-gray-800 dark:text-gray-200">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;