// Define translation structure with nested objects for each section
export const translations = {
  en: {
    meta: {
      title: 'Qusai Alzaeem | Portfolio',
      description: 'Professional portfolio of Qusai Alzaeem, IT specialist and educator'
    },
    navigation: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      cv: 'CV',
      contact: 'Contact'
    },
    home: {
      greeting: 'Hello, I\'m',
      name: 'Qusai Alzaeem',
      tagline: 'IT Specialist & Educator',
      cta: 'View my work'
    },
    about: {
      title: 'About Me',
      intro: 'I am an IT specialist with experience in development and education. My passion is creating innovative solutions and sharing knowledge with others.',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      educationItems: [
        {
          degree: 'Bachelor in Applied Computer Science',
          institution: 'HAW Hamburg',
          year: '2020'
        },
        {
          degree: 'Commercial Assistant - Information Processing',
          institution: 'Vocational School',
          year: '2016'
        },
        {
          degree: 'AEVO Certificate - Certified Trainer',
          institution: 'German Chamber of Commerce',
          year: '2018'
        }
      ],
      experienceItems: [
        {
          position: 'IT Lecturer',
          company: 'Education Center',
          period: '2019 - 2020',
          description: 'Teaching IT and business courses for retraining and advanced training programs'
        },
        {
          position: 'IT Developer',
          company: 'Various Projects',
          period: '2018 - Present',
          description: 'Backend, Frontend, and DevOps development for various projects'
        },
        {
          position: 'Project Manager',
          company: 'Agile Teams',
          period: '2020 - Present',
          description: 'Scrum-based project management'
        }
      ],
      skillsItems: [
        'Full Stack Development',
        'Teaching & Education',
        'Project Management',
        'DevOps',
        'Scrum',
        'Multilingual Communication'
      ]
    },
    projects: {
      title: 'My Projects',
      viewProject: 'View Project',
      items: [
        {
          title: 'Education Portal',
          description: 'E-learning platform with interactive courses and progress tracking',
          technologies: 'React, Node.js, MongoDB'
        },
        {
          title: 'Company Management System',
          description: 'ERP solution for small businesses with inventory and finance modules',
          technologies: 'Vue.js, Express, PostgreSQL'
        },
        {
          title: 'Community Marketplace',
          description: 'Local trading platform connecting people in neighborhoods',
          technologies: 'React Native, Firebase'
        },
        {
          title: 'Data Visualization Dashboard',
          description: 'Interactive analytics dashboard for business intelligence',
          technologies: 'D3.js, Python, FastAPI'
        }
      ]
    },
    cv: {
      title: 'Curriculum Vitae',
      download: 'Download CV',
      education: 'Education',
      experience: 'Experience',
      present: 'Present'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Have a question or want to work together?',
      nameLabel: 'Your Name',
      emailLabel: 'Your Email',
      messageLabel: 'Your Message',
      submitButton: 'Send Message',
      emailPlaceholder: 'email@example.com',
      namePlaceholder: 'John Doe',
      messagePlaceholder: 'Hello, I would like to talk about...',
      success: 'Your message has been sent!',
      error: 'There was an error sending your message. Please try again.'
    },
    footer: {
      rights: 'All Rights Reserved',
      poweredBy: 'Created with React & Tailwind'
    }
  },
  de: {
    meta: {
      title: 'Qusai Alzaeem | Portfolio',
      description: 'Professionelles Portfolio von Qusai Alzaeem, IT-Spezialist und Dozent'
    },
    navigation: {
      home: 'Startseite',
      about: 'Über mich',
      projects: 'Projekte',
      cv: 'Lebenslauf',
      contact: 'Kontakt'
    },
    home: {
      greeting: 'Hallo, ich bin',
      name: 'Qusai Alzaeem',
      tagline: 'IT-Spezialist & Dozent',
      cta: 'Meine Arbeit ansehen'
    },
    about: {
      title: 'Über mich',
      intro: 'Ich bin ein IT-Spezialist mit Erfahrung in Entwicklung und Bildung. Meine Leidenschaft ist es, innovative Lösungen zu schaffen und Wissen mit anderen zu teilen.',
      education: 'Ausbildung',
      experience: 'Erfahrung',
      skills: 'Fähigkeiten',
      educationItems: [
        {
          degree: 'Bachelor in Angewandter Informatik',
          institution: 'HAW Hamburg',
          year: '2020'
        },
        {
          degree: 'Kaufmännischer Assistent - Informationsverarbeitung',
          institution: 'Berufsschule',
          year: '2016'
        },
        {
          degree: 'AEVO-Schein - Anerkannter Ausbilder',
          institution: 'Industrie- und Handelskammer',
          year: '2018'
        }
      ],
      experienceItems: [
        {
          position: 'IT-Dozent',
          company: 'Bildungszentrum',
          period: '2019 - 2020',
          description: 'Lehrtätigkeit in IT- und kaufmännischen Kursen für Umschulungen und Fortbildungen'
        },
        {
          position: 'IT-Entwickler',
          company: 'Verschiedene Projekte',
          period: '2018 - Heute',
          description: 'Backend-, Frontend- und DevOps-Entwicklung für verschiedene Projekte'
        },
        {
          position: 'Projektmanager',
          company: 'Agile Teams',
          period: '2020 - Heute',
          description: 'Scrum-basiertes Projektmanagement'
        }
      ],
      skillsItems: [
        'Full-Stack-Entwicklung',
        'Lehre & Bildung',
        'Projektmanagement',
        'DevOps',
        'Scrum',
        'Mehrsprachige Kommunikation'
      ]
    },
    projects: {
      title: 'Meine Projekte',
      viewProject: 'Projekt ansehen',
      items: [
        {
          title: 'Bildungsportal',
          description: 'E-Learning-Plattform mit interaktiven Kursen und Fortschrittsverfolgung',
          technologies: 'React, Node.js, MongoDB'
        },
        {
          title: 'Unternehmensverwaltungssystem',
          description: 'ERP-Lösung für kleine Unternehmen mit Bestands- und Finanzmodulen',
          technologies: 'Vue.js, Express, PostgreSQL'
        },
        {
          title: 'Community-Marktplatz',
          description: 'Lokale Handelsplattform, die Menschen in Nachbarschaften verbindet',
          technologies: 'React Native, Firebase'
        },
        {
          title: 'Datenvisualisierungs-Dashboard',
          description: 'Interaktives Analyse-Dashboard für Business Intelligence',
          technologies: 'D3.js, Python, FastAPI'
        }
      ]
    },
    cv: {
      title: 'Lebenslauf',
      download: 'Lebenslauf herunterladen',
      education: 'Ausbildung',
      experience: 'Berufserfahrung',
      present: 'Heute'
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Haben Sie eine Frage oder möchten Sie zusammenarbeiten?',
      nameLabel: 'Ihr Name',
      emailLabel: 'Ihre E-Mail',
      messageLabel: 'Ihre Nachricht',
      submitButton: 'Nachricht senden',
      emailPlaceholder: 'email@beispiel.de',
      namePlaceholder: 'Max Mustermann',
      messagePlaceholder: 'Hallo, ich würde gerne über... sprechen',
      success: 'Ihre Nachricht wurde gesendet!',
      error: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
    },
    footer: {
      rights: 'Alle Rechte vorbehalten',
      poweredBy: 'Erstellt mit React & Tailwind'
    }
  },
  ar: {
    meta: {
      title: 'قصي الزعيم | ملف تعريف',
      description: 'الملف التعريفي المهني لقصي الزعيم، متخصص تكنولوجيا المعلومات والمعلم'
    },
    navigation: {
      home: 'الرئيسية',
      about: 'عني',
      projects: 'المشاريع',
      cv: 'السيرة الذاتية',
      contact: 'تواصل معي'
    },
    home: {
      greeting: 'مرحباً، أنا',
      name: 'قصي الزعيم',
      tagline: 'متخصص تكنولوجيا المعلومات ومعلم',
      cta: 'استعرض أعمالي'
    },
    about: {
      title: 'عني',
      intro: 'أنا متخصص في تكنولوجيا المعلومات مع خبرة في التطوير والتعليم. شغفي هو إنشاء حلول مبتكرة ومشاركة المعرفة مع الآخرين.',
      education: 'التعليم',
      experience: 'الخبرة',
      skills: 'المهارات',
      educationItems: [
        {
          degree: 'بكالوريوس في علوم الحاسوب التطبيقية',
          institution: 'جامعة هامبورغ للعلوم التطبيقية',
          year: '2020'
        },
        {
          degree: 'مساعد تجاري - معالجة المعلومات',
          institution: 'المدرسة المهنية',
          year: '2016'
        },
        {
          degree: 'شهادة AEVO - مدرب معتمد',
          institution: 'غرفة التجارة الألمانية',
          year: '2018'
        }
      ],
      experienceItems: [
        {
          position: 'محاضر تكنولوجيا المعلومات',
          company: 'مركز تعليمي',
          period: '2019 - 2020',
          description: 'تدريس دورات تكنولوجيا المعلومات والأعمال لبرامج إعادة التدريب والتدريب المتقدم'
        },
        {
          position: 'مطور تكنولوجيا المعلومات',
          company: 'مشاريع مختلفة',
          period: '2018 - الحاضر',
          description: 'تطوير الواجهة الخلفية والأمامية والـ DevOps لمشاريع مختلفة'
        },
        {
          position: 'مدير مشروع',
          company: 'فرق أجايل',
          period: '2020 - الحاضر',
          description: 'إدارة المشاريع بناءً على سكرم'
        }
      ],
      skillsItems: [
        'تطوير الويب الشامل',
        'التعليم والتدريس',
        'إدارة المشاريع',
        'عمليات التطوير',
        'سكرم',
        'التواصل متعدد اللغات'
      ]
    },
    projects: {
      title: 'مشاريعي',
      viewProject: 'عرض المشروع',
      items: [
        {
          title: 'بوابة تعليمية',
          description: 'منصة للتعلم الإلكتروني مع دورات تفاعلية وتتبع التقدم',
          technologies: 'React, Node.js, MongoDB'
        },
        {
          title: 'نظام إدارة الشركات',
          description: 'حل تخطيط موارد المؤسسات للشركات الصغيرة مع وحدات المخزون والمالية',
          technologies: 'Vue.js, Express, PostgreSQL'
        },
        {
          title: 'سوق المجتمع',
          description: 'منصة تجارية محلية تربط الأشخاص في الأحياء',
          technologies: 'React Native, Firebase'
        },
        {
          title: 'لوحة تحكم لتصور البيانات',
          description: 'لوحة تحليلات تفاعلية لذكاء الأعمال',
          technologies: 'D3.js, Python, FastAPI'
        }
      ]
    },
    cv: {
      title: 'السيرة الذاتية',
      download: 'تحميل السيرة الذاتية',
      education: 'التعليم',
      experience: 'الخبرة العملية',
      present: 'الحاضر'
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'هل لديك سؤال أو ترغب في العمل معًا؟',
      nameLabel: 'اسمك',
      emailLabel: 'بريدك الإلكتروني',
      messageLabel: 'رسالتك',
      submitButton: 'إرسال الرسالة',
      emailPlaceholder: 'email@example.com',
      namePlaceholder: 'محمد عبدالله',
      messagePlaceholder: 'مرحبًا، أود التحدث عن...',
      success: 'تم إرسال رسالتك!',
      error: 'حدث خطأ أثناء إرسال رسالتك. الرجاء المحاولة مرة أخرى.'
    },
    footer: {
      rights: 'جميع الحقوق محفوظة',
      poweredBy: 'تم الإنشاء باستخدام React و Tailwind'
    }
  }
};

// Helper function to get text based on current language
export type TranslationKey = keyof typeof translations.en;