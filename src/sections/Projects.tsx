import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../context/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

// Placeholder images for projects
const projectImages = [
  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
];

const Projects: React.FC = () => {
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  // Get translated project items
  const projectItems = t('projects', 'items');

  return (
    <section 
      id="projects" 
      className="py-20 bg-gray-50 dark:bg-gray-900"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={t('projects', 'title')} 
          center
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectItems.map((project: any, index: number) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={projectImages[index % projectImages.length]} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex items-center mb-4">
                  <Code size={16} className="text-blue-600 dark:text-blue-400 mr-2" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.technologies}
                  </span>
                </div>
              </div>
              
              {/* Project Footer */}
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-100 dark:border-gray-600">
                <a 
                  href="#" 
                  className="flex items-center justify-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  <span className="mr-2">{t('projects', 'viewProject')}</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;