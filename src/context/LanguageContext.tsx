import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'de' | 'ar';

// Define language context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  isRTL: boolean;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define props for the provider
type LanguageProviderProps = {
  children: ReactNode;
};

// Create provider component
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Get initial language from localStorage or default to English
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'en';
  });

  // Determine if the current language is RTL
  const isRTL = language === 'ar';

  // Update localStorage whenever language changes
  useEffect(() => {
    localStorage.setItem('language', language);
    
    // Update document direction for RTL support
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Update the lang attribute
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const value = {
    language,
    setLanguage,
    isRTL,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};