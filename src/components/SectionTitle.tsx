import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false 
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-24 bg-blue-600 dark:bg-blue-500 rounded mt-3 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;