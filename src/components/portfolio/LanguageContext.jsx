import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      portfolio: 'Portfolio',
      skills: 'Skills',
      experience: 'Experiencia',
      education: 'Formación',
      references: 'Referencias',
      contact: 'Contacto'
    },
    hero: {
      title: 'Full-Stack Developer & Engineering Lead',
      subtitle: 'Especialista en Automatizaciones & Bots con IA Generativa',
      tagline: 'Construyendo sistemas inteligentes, automatizados y escalables que se sienten naturales y humanos.',
      downloadCV: 'Descargar CV',
      contact: 'Contacto'
    },
    about: {
      title: 'Sobre mí',
      intro: 'Full-Stack Developer y Engineering Lead, especializado en automatización inteligente y sistemas escalables.',
      p1: 'Actualmente trabajo como Engineering Lead, diseñando y desarrollando soluciones de automatización con IA generativa, asistentes de voz y chat, integraciones WebRTC y sistemas multi-tenant para entornos enterprise.',
      p2: 'Estoy especializado en la construcción de sistemas robustos, escalables y bien diseñados, combinando criterio técnico, atención al detalle, orientación a producto y una fuerte sensibilidad por la experiencia de usuario. He trabajado en contextos donde la fiabilidad, el rendimiento y la calidad arquitectónica son críticos, participando activamente en decisiones técnicas de alto impacto y en el desarrollo de soluciones en tiempo real.',
      p3: 'Mi forma de trabajar une ejecución técnica end-to-end con una comprensión transversal del producto y del negocio. He colaborado de forma continua con equipos de producto, operaciones, ventas y facturación, lo que me permite diseñar soluciones alineadas con objetivos reales, no solo técnicamente correctas.',
      values: {
        title: 'Valores',
        clarity: 'Claridad y eficiencia',
        automation: 'Automatización inteligente',
        precision: 'Precisión técnica',
        leadership: 'Liderar desde la empatía',
        learning: 'Aprendizaje continuo',
        quality: 'Criterio técnico en producción'
      },
      valueProposition: {
        title: 'Propuesta de Valor',
        items: [
          'Decisiones técnicas con foco en estabilidad y calidad en producción.',
          'Criterio para priorizar y reducir riesgo técnico en entregas.',
          'Soluciones integrables que facilitan adopción y operación.'
        ]
      }
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Soluciones profesionales y exploración técnica',
      categories: {
        ai: 'Proyectos Profesionales',
        fullstack: 'Proyectos Personales'
      },
      demo: 'Demo',
      viewProject: 'Ver proyecto',
      callDemo: 'Llamar demo',
      caseStudy: {
        challenge: 'Desafío',
        contribution: 'Mi Contribución',
        tech: 'Tecnologías',
        impact: 'Impacto'
      }
    },
    skills: {
      title: 'Skills',
      subtitle: 'Tecnologías y competencias'
    },
    experience: {
      title: 'Experiencia',
      subtitle: 'Trayectoria profesional',
      present: 'Actualidad'
    },
    education: {
      title: 'Formación',
      subtitle: 'Educación y certificaciones'
    },
    references: {
      title: 'Referencias y Certificaciones',
      subtitle: 'Credenciales, formación continua y testimonios',
      download: 'Descargar',
      certifications: 'Certificaciones y Formación',
      mentoring: 'Mentoría',
      recommendations: 'Cartas de Recomendación'
    },
    contact: {
      title: 'Contacto',
      subtitle: 'Hablemos de tu próximo proyecto',
      name: 'Nombre',
      email: 'Email',
      message: 'Mensaje',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      success: 'Se abrirá tu cliente de correo para enviar el mensaje.',
      error: 'Error al enviar. Inténtalo de nuevo.'
    },
    cta: {
      title: '¿Listo para trabajar juntos?',
      subtitle: 'Estoy disponible para nuevos proyectos y colaboraciones',
      button: 'Contáctame'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      portfolio: 'Portfolio',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      references: 'References',
      contact: 'Contact'
    },
    hero: {
      title: 'Full-Stack Developer & Engineering Lead',
      subtitle: 'Automations & Generative AI Bots Specialist',
      tagline: 'Building intelligent, automated and scalable systems that feel natural and human.',
      downloadCV: 'Download CV',
      contact: 'Contact'
    },
    about: {
      title: 'About me',
      intro: 'Full-Stack Developer and Engineering Lead, specialized in intelligent automation and scalable systems.',
      p1: 'I currently work as an Engineering Lead, designing and building automation solutions with generative AI, voice and chat assistants, WebRTC integrations, and multi-tenant systems for enterprise environments.',
      p2: 'I specialize in building robust, scalable, and well-designed systems, combining technical judgment, attention to detail, product orientation, and a strong sensitivity to user experience. I have worked in contexts where reliability, performance, and architectural quality are critical, actively participating in high-impact technical decisions and real-time solutions.',
      p3: 'My way of working combines end-to-end execution with a cross-functional understanding of product and business. I collaborate continuously with product, operations, sales, and billing teams to deliver solutions aligned with real goals, not just technically correct ones.',
      values: {
        title: 'Values',
        clarity: 'Clarity and efficiency',
        automation: 'Intelligent automation',
        precision: 'Technical precision',
        leadership: 'Empathetic leadership',
        learning: 'Continuous learning',
        quality: 'Production-grade technical judgment'
      },
      valueProposition: {
        title: 'Value Proposition',
        items: [
          'Technical decisions focused on production stability and quality.',
          'Prioritization with clear technical criteria to reduce delivery risk.',
          'Integrable solutions that ease adoption and operations.'
        ]
      }
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Professional solutions and technical exploration',
      categories: {
        ai: 'Professional Projects',
        fullstack: 'Personal Projects'
      },
      demo: 'Demo',
      viewProject: 'View project',
      callDemo: 'Call demo',
      caseStudy: {
        challenge: 'Challenge',
        contribution: 'My Contribution',
        tech: 'Technologies',
        impact: 'Impact'
      }
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies and competencies'
    },
    experience: {
      title: 'Experience',
      subtitle: 'Professional journey',
      present: 'Present'
    },
    education: {
      title: 'Education',
      subtitle: 'Education and certifications'
    },
    references: {
      title: 'References & Certifications',
      subtitle: 'Credentials, continuous training and testimonials',
      download: 'Download',
      certifications: 'Certifications & Training',
      mentoring: 'Mentoring',
      recommendations: 'Recommendation Letters'
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's talk about your next project",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      sending: 'Sending...',
      success: 'Your email app will open so you can send the message.',
      error: 'Error sending. Please try again.'
    },
    cta: {
      title: 'Ready to work together?',
      subtitle: "I'm available for new projects and collaborations",
      button: 'Contact me'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      portfolio: 'Portfolio',
      skills: 'Compétences',
      experience: 'Expérience',
      education: 'Formation',
      references: 'Références',
      contact: 'Contact'
    },
    hero: {
      title: 'Développeur Full-Stack & Lead Engineering',
      subtitle: 'Spécialiste en Automatisations & Bots IA Générative',
      tagline: 'Créer des systèmes intelligents, automatisés et évolutifs qui semblent naturels et humains.',
      downloadCV: 'Télécharger CV',
      contact: 'Contact'
    },
    about: {
      title: 'À propos de moi',
      intro: 'Développeur Full-Stack et Engineering Lead, spécialisé dans l\'automatisation intelligente et systèmes évolutifs.',
      p1: 'Je travaille actuellement comme Engineering Lead, en concevant et développant des solutions d\'automatisation avec IA générative, assistants vocaux et chat, intégrations WebRTC et systèmes multi-tenant pour des environnements enterprise.',
      p2: 'Je suis spécialisé dans la construction de systèmes robustes, évolutifs et bien conçus, en combinant jugement technique, attention aux détails, orientation produit et sensibilité à l\'expérience utilisateur. J\'ai évolué dans des contextes où fiabilité, performance et qualité architecturale sont critiques, en participant à des décisions techniques à fort impact et à des solutions temps réel.',
      p3: 'Ma façon de travailler combine exécution end-to-end et compréhension transversale du produit et du business. Je collabore en continu avec les équipes produit, opérations, ventes et facturation pour livrer des solutions alignées sur des objectifs réels, pas seulement techniquement correctes.',
      values: {
        title: 'Valeurs',
        clarity: 'Clarté et efficacité',
        automation: 'Automatisation intelligente',
        precision: 'Précision technique',
        leadership: 'Leadership empathique',
        learning: 'Apprentissage continu',
        quality: 'Exigence technique en production'
      },
      valueProposition: {
        title: 'Proposition de Valeur',
        items: [
          'Décisions techniques orientées stabilité et qualité en production.',
          'Priorisation avec critères techniques clairs pour réduire le risque.',
          'Solutions intégrables qui facilitent l\'adoption et l\'exploitation.'
        ]
      }
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Solutions professionnelles et exploration technique',
      categories: {
        ai: 'Projets Professionnels',
        fullstack: 'Projets Personnels'
      },
      demo: 'Démo',
      viewProject: 'Voir le projet',
      callDemo: 'Appeler démo',
      caseStudy: {
        challenge: 'Défi',
        contribution: 'Ma Contribution',
        tech: 'Technologies',
        impact: 'Impact'
      }
    },
    skills: {
      title: 'Compétences',
      subtitle: 'Technologies et expertises'
    },
    experience: {
      title: 'Expérience',
      subtitle: 'Parcours professionnel',
      present: 'Présent'
    },
    education: {
      title: 'Formation',
      subtitle: 'Éducation et certifications'
    },
    references: {
      title: 'Références et Certifications',
      subtitle: 'Credentials, formation continue et témoignages',
      download: 'Télécharger',
      certifications: 'Certifications et Formation',
      mentoring: 'Mentorat',
      recommendations: 'Lettres de Recommandation'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Parlons de votre prochain projet',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      success: "Votre client mail s'ouvrira pour envoyer le message.",
      error: 'Erreur lors de l\'envoi. Réessayez.'
    },
    cta: {
      title: 'Prêt à travailler ensemble?',
      subtitle: 'Je suis disponible pour de nouveaux projets et collaborations',
      button: 'Contactez-moi'
    }
  }
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-language') || 'es';
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
