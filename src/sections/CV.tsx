import React from 'react';
import { FileText, GraduationCap, Briefcase } from 'lucide-react';
import { timelineData } from '../data/cvData';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

// Import Lucide icons dynamically
import * as LucideIcons from 'lucide-react';

const CV: React.FC = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  // Filter timeline data by category
  const educationItems = timelineData.filter(item => item.category === 'education');
  const experienceItems = timelineData.filter(item => item.category === 'experience');

  // Dynamically get Lucide icon
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1)] || LucideIcons.Circle;
    return <Icon size={20} className="text-blue-600 dark:text-blue-400" />;
  };

  return (
    <section 
      id="cv" 
      className="py-20 bg-white dark:bg-gray-800"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('cv', 'title')} 
          center
        />
        
        <div className="max-w-4xl mx-auto">
          {/* Download CV Button */}
          <div className="flex justify-center mb-12">
            <a 
              href="#" 
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 shadow-md"
            >
              <FileText size={20} className="mr-2" />
              {t('cv', 'download')}
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <GraduationCap size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
                {t('cv', 'education')}
              </h3>
              
              <div className="space-y-12">
                {educationItems.map((item, index) => (
                  <div key={item.id} className="relative pl-8">
                    {/* Timeline line */}
                    {index < educationItems.length - 1 && (
                      <div className="absolute top-0 left-3 w-px h-full bg-blue-200 dark:bg-blue-800 transform -translate-x-1/2"></div>
                    )}
                    
                    {/* Timeline dot */}
                    <div className="absolute top-0 left-2 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 transform -translate-x-1/2"></div>
                    
                    <div className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.location}
                      </p>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {item.date}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Experience Timeline */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <Briefcase size={24} className="mr-2 text-blue-600 dark:text-blue-400" />
                {t('cv', 'experience')}
              </h3>
              
              <div className="space-y-12">
                {experienceItems.map((item, index) => (
                  <div key={item.id} className="relative pl-8">
                    {/* Timeline line */}
                    {index < experienceItems.length - 1 && (
                      <div className="absolute top-0 left-3 w-px h-full bg-blue-200 dark:bg-blue-800 transform -translate-x-1/2"></div>
                    )}
                    
                    {/* Timeline dot */}
                    <div className="absolute top-0 left-2 w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 transform -translate-x-1/2"></div>
                    
                    <div className="animate-fadeIn" style={{ animationDelay: `${index * 0.1}s` }}>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.location}
                      </p>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                        {item.date}
                      </p>
                      <p className="text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;