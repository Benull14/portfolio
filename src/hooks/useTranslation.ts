import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  // Function to get translated text for a given key
  const t = (section: string, key: string, ...params: any[]) => {
    try {
      // @ts-ignore - Dynamic access
      const translatedText = translations[language][section][key];
      
      // If it's an object or array, return the whole thing
      if (typeof translatedText === 'object') {
        return translatedText;
      }
      
      // If no parameters, just return the text
      if (params.length === 0) {
        return translatedText || `[${section}.${key}]`;
      }
      
      // Replace placeholders ({0}, {1}, etc.) with parameters
      return params.reduce((text, param, index) => {
        return text.replace(new RegExp(`\\{${index}\\}`, 'g'), param);
      }, translatedText);
    } catch (error) {
      // Return a fallback if translation not found
      return `[${section}.${key}]`;
    }
  };
  
  return { t };
};