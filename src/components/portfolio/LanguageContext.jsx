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
      p1: 'Trabajo en sistemas digitales donde los requisitos cambian rápido y las decisiones técnicas impactan a usuarios, operaciones y negocio. Suelo enfrentar retos de integración, automatización y experiencia conversacional en entornos reales.',
      p2: 'Cuido la ejecución de principio a fin sin perder el foco: bajo a detalle cuando hace falta y sé priorizar cuando el tiempo aprieta. Mantengo entregas consistentes en contextos exigentes.',
      p3: 'Me muevo bien entre equipos y dominios distintos, facilitando acuerdos técnicos y manteniendo un flujo de trabajo sano. Busco soluciones claras, sostenibles y alineadas con el producto.',
      values: {
        title: 'Valores',
        clarity: 'Claridad y eficiencia',
        automation: 'Automatización inteligente',
        precision: 'Precisión técnica',
        leadership: 'Liderar desde la empatía',
        learning: 'Aprendizaje continuo'
      },
      valueProposition: {
        title: 'Propuesta de Valor',
        items: [
          'Diseño y entrega de soluciones end-to-end con foco en integración.',
          'Automatización de procesos para reducir fricción operativa.',
          'Experiencias conversacionales útiles y conectadas a sistemas reales.'
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
      p1: 'I am a Full-Stack Developer and Engineering Lead, specialized in intelligent automation and building robust, scalable, and well-thought-out systems. My approach combines technical judgment, attention to detail, and a strong product and user experience orientation.',
      p2: 'I have worked in environments where reliability, performance, and technical design quality are fundamental, participating in architecture-level decision-making and building complex real-time solutions.',
      p3: 'I currently lead the development team at Mintt Cloud Technology, where I design and develop automation solutions with generative AI, voice and chat bots, WebRTC integrations, and multi-tenant systems for enterprise clients.',
      values: {
        title: 'Values',
        clarity: 'Clarity and efficiency',
        automation: 'Intelligent automation',
        precision: 'Technical precision',
        leadership: 'Empathetic leadership',
        learning: 'Continuous learning'
      },
      valueProposition: {
        title: 'Value Proposition',
        items: [
          'Full-Stack + Automation: End-to-end development focused on operational efficiency',
          'Applied Generative AI: Voice and chat bots with advanced NLP and natural experience',
          'Technical Leadership: Team management, scalable architecture and strategic decision-making',
          '360° Vision: From code to vendor negotiation and roadmap definition'
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
      p1: 'Je suis Développeur Full-Stack et Engineering Lead, spécialisé dans l\'automatisation intelligente et la construction de systèmes robustes, évolutifs et bien pensés. Mon approche combine jugement technique, attention aux détails et une forte orientation produit et expérience utilisateur.',
      p2: 'J\'ai travaillé dans des environnements où la fiabilité, la performance et la qualité de la conception technique sont fondamentales, participant à la prise de décisions au niveau de l\'architecture et à la construction de solutions complexes en temps réel.',
      p3: 'Actuellement, je dirige l\'équipe de développement chez Mintt Cloud Technology, où je conçois et développe des solutions d\'automatisation avec IA générative, bots vocaux et chat, intégrations WebRTC et systèmes multi-tenant pour clients enterprise.',
      values: {
        title: 'Valeurs',
        clarity: 'Clarté et efficacité',
        automation: 'Automatisation intelligente',
        precision: 'Précision technique',
        leadership: 'Leadership empathique',
        learning: 'Apprentissage continu'
      },
      valueProposition: {
        title: 'Proposition de Valeur',
        items: [
          'Full-Stack + Automatisation: Développement end-to-end axé sur l\'efficacité opérationnelle',
          'IA Générative Appliquée: Bots vocaux et chat avec NLP avancé et expérience naturelle',
          'Leadership Technique: Gestion d\'équipes, architecture évolutive et prise de décisions stratégiques',
          'Vision 360°: Du code à la négociation fournisseurs et définition de roadmaps'
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
