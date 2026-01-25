import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Code, 
  Phone, 
  ExternalLink, 
  Sparkles,
  MessageSquare,
  Globe,
  Database,
  Layers,
  Building2,
  Target,
  Wrench,
  TrendingUp,
  User,
  ChevronDown,
  Wine
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

const projects = {
  ai: [
    {
      id: 'voice-bodega',
      title: 'AI Voice Bot - Bodega Rueda',
      subtitle: 'Wine Industry Voice Automation',
      company: 'Mintt Cloud Technology',
      description: {
        es: 'Bot de voz con IA generativa para atención telefónica automatizada. Gestión completa de consultas sobre productos, disponibilidad y servicios.',
        en: 'Generative AI voice bot for automated phone service. Complete query management about products, availability and services.',
        fr: 'Bot vocal avec IA générative pour service téléphonique automatisé. Gestion complète des demandes sur produits, disponibilité et services.'
      },
      caseStudy: {
        challenge: {
          es: 'Alta demanda telefónica sin capacidad para atender todas las consultas durante campañas comerciales',
          en: 'High phone demand without capacity to handle all queries during commercial campaigns',
          fr: 'Forte demande téléphonique sans capacité de gérer toutes les demandes durant les campagnes commerciales'
        },
        contribution: {
          es: 'Diseño de lógica conversacional, automatización de consultas recurrentes, integración con APIs para información en tiempo real y gestión de experiencia de usuario',
          en: 'Conversational logic design, recurring query automation, API integration for real-time information and user experience management',
          fr: 'Conception de logique conversationnelle, automatisation des demandes récurrentes, intégration API pour informations temps réel et gestion de l\'expérience utilisateur'
        },
        tech: ['Voice AI', 'APIs', 'Automation', 'Real-time'],
        impact: {
          es: 'Atención 24/7, reducción del 70% en carga operativa y mejora significativa en experiencia del cliente',
          en: '24/7 service, 70% operational load reduction and significant customer experience improvement',
          fr: 'Service 24/7, réduction de 70% de la charge opérationnelle et amélioration significative de l\'expérience client'
        }
      },
      demo: '+34 967 853 738',
      demoType: 'phone',
      tags: ['Voice AI', 'Automation', 'APIs'],
      icon: Wine,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 'voice-restaurant',
      title: 'AI Voice Reservation Bot',
      subtitle: 'Restaurant Automation System',
      company: 'Mintt Cloud Technology',
      description: {
        es: 'Bot de voz con IA generativa para gestión automatizada de reservas. Confirmación en menos de un minuto, integración con libro de reservas y panel de administración.',
        en: 'Generative AI voice bot for automated reservation management. Confirmation in under one minute, booking system integration and admin dashboard.',
        fr: 'Bot vocal avec IA générative pour gestion automatisée des réservations. Confirmation en moins d\'une minute, intégration système de réservation et tableau de bord admin.'
      },
      caseStudy: {
        challenge: {
          es: 'Pérdida de reservas por llamadas no atendidas y tiempos excesivos de gestión manual',
          en: 'Lost reservations due to unanswered calls and excessive manual management time',
          fr: 'Perte de réservations due aux appels non répondus et temps excessif de gestion manuelle'
        },
        contribution: {
          es: 'Diseño de arquitectura del sistema de reservas, desarrollo de lógica conversacional, automatización del flujo completo e integración con libro de reservas (demo funcional)',
          en: 'Reservation system architecture design, conversational logic development, complete flow automation and booking system integration (functional demo)',
          fr: 'Conception d\'architecture du système de réservations, développement de logique conversationnelle, automatisation du flux complet et intégration système de réservation (démo fonctionnelle)'
        },
        tech: ['Voice AI', 'Automation', 'APIs', 'Real-time'],
        impact: {
          es: 'Reservas gestionadas en menos de 1 minuto, 95% de llamadas atendidas automáticamente y reducción del 70% en tiempo de gestión',
          en: 'Reservations managed in under 1 minute, 95% of calls handled automatically and 70% reduction in management time',
          fr: 'Réservations gérées en moins d\'1 minute, 95% des appels traités automatiquement et réduction de 70% du temps de gestion'
        }
      },
      demo: '+34 987 626 122',
      demoType: 'phone',
      tags: ['Voice AI', 'Automation', 'Real-time'],
      icon: Phone,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'voice-ayuntamiento',
      title: 'AI Voice Bot - Citizen Service',
      subtitle: 'Ayuntamiento de Arroyomolinos',
      company: 'Mintt Cloud Technology',
      description: {
        es: 'Atención ciudadana automatizada con gestión de consultas sobre documentación, servicios públicos y recogida estructurada de datos vía web.',
        en: 'Automated citizen service with query management about documentation, public services and structured web data collection.',
        fr: 'Service citoyen automatisé avec gestion des demandes sur documentation, services publics et collecte de données structurées via web.'
      },
      caseStudy: {
        challenge: {
          es: 'Alto volumen de consultas ciudadanas saturaba la centralita con tiempos de espera superiores a 10 minutos',
          en: 'High volume of citizen queries saturated the switchboard with wait times exceeding 10 minutes',
          fr: 'Volume élevé de demandes citoyennes saturait le standard avec temps d\'attente dépassant 10 minutes'
        },
        contribution: {
          es: 'Desarrollo de lógica conversacional para consultas frecuentes, automatización de recogida de datos con formularios web y flujos de APIs para consultar información municipal',
          en: 'Conversational logic development for frequent queries, web form data collection automation and API flows to query municipal information',
          fr: 'Développement de logique conversationnelle pour demandes fréquentes, automatisation de collecte de données via formulaires web et flux API pour consulter informations municipales'
        },
        tech: ['Voice AI', 'APIs', 'Automation', 'Data Management'],
        impact: {
          es: 'Reducción del 60% en tiempo de espera, atención 24/7 y gestión automatizada de consultas recurrentes',
          en: '60% wait time reduction, 24/7 service and automated recurring query management',
          fr: 'Réduction de 60% du temps d\'attente, service 24/7 et gestion automatisée des demandes récurrentes'
        }
      },
      demo: '+34 919 33 28 28',
      demoType: 'phone',
      tags: ['Government', 'Voice AI', 'APIs'],
      icon: MessageSquare,
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'chatbot-sprinter',
      title: 'Chatbot de Incidencias',
      subtitle: 'Sprinter - Retail Chain',
      company: 'Mintt Cloud Technology',
      description: {
        es: 'Gestor automatizado de incidencias con recogida estructurada de datos, clasificación y derivación. Reducción de tiempos de resolución.',
        en: 'Automated incident manager with structured data collection, classification and routing. Resolution time reduction.',
        fr: 'Gestionnaire automatisé d\'incidents avec collecte de données structurées, classification et routage. Réduction des temps de résolution.'
      },
      caseStudy: {
        challenge: {
          es: 'Gestión manual de incidencias con tiempos de resolución largos y pérdida de información',
          en: 'Manual incident management with long resolution times and information loss',
          fr: 'Gestion manuelle des incidents avec longs temps de résolution et perte d\'informations'
        },
        contribution: {
          es: 'Desarrollo de lógica de clasificación automática, automatización de recogida de datos estructurados y sistema de derivación inteligente',
          en: 'Automatic classification logic development, structured data collection automation and intelligent routing system',
          fr: 'Développement de logique de classification automatique, automatisation de collecte de données structurées et système de routage intelligent'
        },
        tech: ['Chat AI', 'Automation', 'Data Management', 'APIs'],
        impact: {
          es: 'Resolución de incidencias 3x más rápida y eliminación de pérdida de información crítica',
          en: '3x faster incident resolution and elimination of critical information loss',
          fr: 'Résolution des incidents 3x plus rapide et élimination de la perte d\'informations critiques'
        }
      },
      demo: 'https://dani3f3r.github.io/chatbot-demo-sprinter/sprinter.html',
      demoType: 'link',
      tags: ['Chat AI', 'Automation', 'Data'],
      icon: Bot,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 'webrtc-centralita',
      title: 'Arquitectura Multicanal',
      subtitle: 'Demo Funcional',
      company: 'Mintt Cloud Technology',
      description: {
        es: 'Arquitectura multicanal que orquesta bots de voz y chat con lógica compartida. Gestiona reservas, incidencias y atención desde una capa web unificada, combinando interacción web y voz en tiempo real. Demuestra decisiones de arquitectura y orquestación de sistemas, validando técnicamente la viabilidad de flujos multicanal complejos.',
        en: 'Multichannel architecture orchestrating voice and chat bots with shared logic. Manages reservations, incidents and service from a unified web layer, combining web and voice interaction in real-time. Demonstrates architecture decisions and system orchestration, technically validating the viability of complex multichannel flows.',
        fr: 'Architecture multicanal orchestrant bots vocaux et chat avec logique partagée. Gère réservations, incidents et service depuis une couche web unifiée, combinant interaction web et vocale en temps réel. Démontre décisions d\'architecture et orchestration de systèmes, validant techniquement la viabilité de flux multicanaux complexes.'
      },
      caseStudy: {
        challenge: {
          es: 'Integrar múltiples canales de comunicación bajo una arquitectura coherente en tiempo real',
          en: 'Integrate multiple communication channels under a coherent real-time architecture',
          fr: 'Intégrer plusieurs canaux de communication sous une architecture cohérente en temps réel'
        },
        contribution: {
          es: 'Diseño de arquitectura multicanal con lógica centralizada, orquestación de bots de voz y chat, gestión unificada de datos y sincronización en tiempo real',
          en: 'Multichannel architecture design with centralized logic, voice and chat bot orchestration, unified data management and real-time synchronization',
          fr: 'Conception d\'architecture multicanal avec logique centralisée, orchestration de bots vocaux et chat, gestion unifiée des données et synchronisation temps réel'
        },
        tech: ['Multichannel', 'Real-time', 'Orchestration', 'APIs'],
        impact: {
          es: 'Arquitectura funcional que demostró capacidades de integración compleja y cerró múltiples clientes enterprise',
          en: 'Functional architecture demonstrating complex integration capabilities and closing multiple enterprise clients',
          fr: 'Architecture fonctionnelle démontrant capacités d\'intégration complexe et concluant plusieurs clients entreprise'
        }
      },
      demo: 'https://dani3f3r.github.io/chatbot-demo-sprinter/',
      demoType: 'link',
      tags: ['Architecture', 'Real-time', 'Orchestration'],
      icon: Phone,
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'other-projects',
      title: 'Experiencia Adicional',
      subtitle: 'Web, Automatización & Datos',
      description: {
        es: 'Parte fundamental de la trayectoria profesional: desarrollo de aplicaciones web full-stack, automatizaciones complejas, gateways de integración, gestión de bases de datos y APIs en distintos contextos empresariales. Experiencia transversal más allá de IA, reflejando capacidad técnica full-stack en proyectos reales.',
        en: 'Fundamental part of professional trajectory: full-stack web application development, complex automations, integration gateways, database management and APIs across different business contexts. Cross-functional experience beyond AI, reflecting full-stack technical capability in real projects.',
        fr: 'Partie fondamentale de la trajectoire professionnelle: développement d\'applications web full-stack, automatisations complexes, passerelles d\'intégration, gestion de bases de données et APIs dans différents contextes d\'entreprise. Expérience transversale au-delà de l\'IA, reflétant capacité technique full-stack dans projets réels.'
      },
      tags: ['Full-stack', 'Automation', 'APIs', 'Data'],
      icon: Sparkles,
      gradient: 'from-amber-500 to-orange-500'
    }
  ],
  fullstack: [
    {
      id: 'brewfinder',
      title: 'BrewFinder',
      subtitle: 'Beer Data Explorer',
      personal: true,
      description: {
        es: 'Proyecto de aprendizaje: consumo de API pública de cervezas, normalización de datos y presentación clara.',
        en: 'Learning project: public beer API consumption, data normalization and clear presentation.',
        fr: 'Projet d\'apprentissage: consommation d\'API publique de bières, normalisation de données et présentation claire.'
      },
      caseStudy: {
        what: {
          es: '🎯 Por qué: Aprender a consumir y estructurar datos de APIs públicas complejas',
          en: '🎯 Why: Learn to consume and structure data from complex public APIs',
          fr: '🎯 Pourquoi: Apprendre à consommer et structurer les données d\'APIs publiques complexes'
        },
        features: {
          es: ['Consumo y normalización de datos desde API pública', 'Presentación clara de información (nombre, tipo, región, características)', 'Integración de mapas para visualización geográfica'],
          en: ['Data consumption and normalization from public API', 'Clear information presentation (name, type, region, characteristics)', 'Map integration for geographic visualization'],
          fr: ['Consommation et normalisation de données depuis API publique', 'Présentation claire d\'informations (nom, type, région, caractéristiques)', 'Intégration de cartes pour visualisation géographique']
        },
        learnings: {
          es: ['Consumo y normalización de APIs externas', 'Criterio para estructurar y presentar datos complejos', 'Integración de librerías de mapas en aplicaciones web'],
          en: ['External API consumption and normalization', 'Judgment to structure and present complex data', 'Map library integration in web applications'],
          fr: ['Consommation et normalisation d\'APIs externes', 'Jugement pour structurer et présenter données complexes', 'Intégration de bibliothèques de cartes dans applications web']
        }
      },
      tags: ['Learning', 'API', 'Data'],
      icon: Globe,
      gradient: 'from-amber-500 to-orange-500'
    },
    {
      id: 'pokeworld',
      title: 'PokeWorld',
      subtitle: 'Pokémon Data Explorer',
      personal: true,
      description: {
        es: 'Proyecto de aprendizaje: consumo de API pública con +1000 entradas, normalización de grandes volúmenes de datos y construcción de interfaz.',
        en: 'Learning project: public API consumption with +1000 entries, large data volume normalization and interface building.',
        fr: 'Projet d\'apprentissage: consommation d\'API publique avec +1000 entrées, normalisation de grands volumes de données et construction d\'interface.'
      },
      caseStudy: {
        what: {
          es: '🎯 Por qué: Trabajar con grandes volúmenes de datos y optimizar rendimiento frontend',
          en: '🎯 Why: Work with large data volumes and optimize frontend performance',
          fr: '🎯 Pourquoi: Travailler avec de grands volumes de données et optimiser les performances frontend'
        },
        features: {
          es: ['Consumo y normalización de datos masivos desde API pública', 'Presentación estructurada de información compleja (tipos, stats, habilidades)', 'Sistema de filtros y búsqueda para navegación eficiente'],
          en: ['Massive data consumption and normalization from public API', 'Structured presentation of complex information (types, stats, abilities)', 'Filter and search system for efficient navigation'],
          fr: ['Consommation et normalisation de données massives depuis API publique', 'Présentation structurée d\'informations complexes (types, stats, capacités)', 'Système de filtres et recherche pour navigation efficace']
        },
        learnings: {
          es: ['Gestión y transformación de grandes volúmenes de datos', 'Optimización de rendimiento en aplicaciones frontend', 'Criterio para diseñar estructuras de datos eficientes'],
          en: ['Large data volume management and transformation', 'Performance optimization in frontend applications', 'Judgment to design efficient data structures'],
          fr: ['Gestion et transformation de grands volumes de données', 'Optimisation de performances dans applications frontend', 'Jugement pour concevoir structures de données efficaces']
        }
      },
      tags: ['Learning', 'API', 'Data'],
      icon: Database,
      gradient: 'from-yellow-500 to-red-500'
    },
    {
      id: 'rmverse',
      title: 'RMVerse',
      subtitle: 'Character Data Explorer',
      personal: true,
      description: {
        es: 'Proyecto de aprendizaje: consumo de API pública, gestión de estado con filtros múltiples y renderizado condicional.',
        en: 'Learning project: public API consumption, state management with multiple filters and conditional rendering.',
        fr: 'Projet d\'apprentissage: consommation d\'API publique, gestion d\'état avec filtres multiples et rendu conditionnel.'
      },
      caseStudy: {
        what: {
          es: '🎯 Por qué: Practicar gestión avanzada de estado y renderizado condicional en frontend',
          en: '🎯 Why: Practice advanced state management and conditional rendering in frontend',
          fr: '🎯 Pourquoi: Pratiquer la gestion d\'état avancée et le rendu conditionnel en frontend'
        },
        features: {
          es: ['Consumo de datos desde API pública con múltiples atributos', 'Sistema de filtros combinados (nombre, especie, estado)', 'Renderizado condicional según características de los datos'],
          en: ['Data consumption from public API with multiple attributes', 'Combined filter system (name, species, status)', 'Conditional rendering based on data characteristics'],
          fr: ['Consommation de données depuis API publique avec attributs multiples', 'Système de filtres combinés (nom, espèce, statut)', 'Rendu conditionnel selon caractéristiques des données']
        },
        learnings: {
          es: ['Gestión de estado complejo con filtros múltiples', 'Renderizado condicional según lógica de negocio', 'Diseño de componentes reutilizables y escalables'],
          en: ['Complex state management with multiple filters', 'Conditional rendering based on business logic', 'Reusable and scalable component design'],
          fr: ['Gestion d\'état complexe avec filtres multiples', 'Rendu conditionnel selon logique métier', 'Conception de composants réutilisables et évolutifs']
        }
      },
      tags: ['Learning', 'API', 'State'],
      icon: Code,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 'effitask',
      title: 'EffiTask',
      subtitle: 'Business Management App',
      personal: true,
      description: {
        es: 'Aplicación completa de gestión empresarial: organización de tareas, empleados y procesos con lógica de negocio y gestión de datos. Proyecto personal de aprendizaje full-stack.',
        en: 'Complete business management application: task, employee and process organization with business logic and data management. Personal full-stack learning project.',
        fr: 'Application complète de gestion d\'entreprise: organisation de tâches, employés et processus avec logique métier et gestion de données. Projet personnel d\'apprentissage full-stack.'
      },
      caseStudy: {
        what: {
          es: '🎯 Por qué: Construir una aplicación completa end-to-end con lógica de negocio real',
          en: '🎯 Why: Build a complete end-to-end application with real business logic',
          fr: '🎯 Pourquoi: Construire une application complète end-to-end avec logique métier réelle'
        },
        features: {
          es: ['Gestión completa de tareas, proyectos y empleados', 'Lógica de negocio para asignaciones y seguimiento', 'Automatización de procesos y flujos de trabajo'],
          en: ['Complete task, project and employee management', 'Business logic for assignments and tracking', 'Process and workflow automation'],
          fr: ['Gestion complète de tâches, projets et employés', 'Logique métier pour affectations et suivi', 'Automatisation de processus et flux de travail']
        },
        learnings: {
          es: ['Arquitectura full-stack completa con separación frontend/backend', 'Implementación de lógica de negocio compleja', 'Gestión de datos, relaciones y automatización de procesos'],
          en: ['Complete full-stack architecture with frontend/backend separation', 'Complex business logic implementation', 'Data management, relationships and process automation'],
          fr: ['Architecture full-stack complète avec séparation frontend/backend', 'Implémentation de logique métier complexe', 'Gestion de données, relations et automatisation de processus']
        }
      },
      tags: ['Full-stack', 'Business Logic', 'Data'],
      icon: Layers,
      gradient: 'from-indigo-500 to-purple-500'
    }
  ]
};

export default function Portfolio() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState('ai');
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <section
      id="portfolio"
      className={`relative py-16 sm:py-20 lg:py-28 overflow-hidden ${
        theme === 'dark' ? 'bg-zinc-950' : 'bg-zinc-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-zinc-900'
            }`}
          >
            {t('portfolio.title')}
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-2xl mx-auto mb-10 ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            {t('portfolio.subtitle')}
          </p>

          {/* Category Tabs */}
          <div
            className={`inline-flex p-1 rounded-2xl ${
              theme === 'dark' ? 'bg-zinc-800/50' : 'bg-zinc-200/50'
            }`}
          >
            <button
              onClick={() => setActiveCategory('ai')}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === 'ai'
                  ? 'text-white'
                  : theme === 'dark'
                  ? 'text-zinc-400 hover:text-zinc-200'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {activeCategory === 'ai' && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Bot className="w-4 h-4" />
                {t('portfolio.categories.ai')}
              </span>
            </button>
            <button
              onClick={() => setActiveCategory('fullstack')}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === 'fullstack'
                  ? 'text-white'
                  : theme === 'dark'
                  ? 'text-zinc-400 hover:text-zinc-200'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {activeCategory === 'fullstack' && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Code className="w-4 h-4" />
                {t('portfolio.categories.fullstack')}
              </span>
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-5"
          >
            {projects[activeCategory].map((project, index) => {
              const Icon = project.icon;
              const isExpanded = expandedProjects[project.id];
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`group relative rounded-2xl transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50 hover:bg-zinc-900/70'
                      : 'bg-white border border-zinc-200/50 hover:border-zinc-300/50 hover:shadow-lg'
                  }`}
                >
                  <div className="p-4 sm:p-5">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${project.gradient} mb-3.5`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Content */}
                    <h3
                      className={`text-base sm:text-lg md:text-xl font-bold mb-1.5 leading-tight ${
                        theme === 'dark' ? 'text-white' : 'text-zinc-900'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm font-medium mb-3 ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`}
                    >
                      {project.subtitle}
                    </p>
                    {project.company && (
                      <div className="flex items-center gap-1.5 mb-3">
                        <Building2 className="w-3 h-3 text-cyan-500" />
                        <span className={`text-xs font-medium ${
                          theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                        }`}>
                          {project.company}
                        </span>
                      </div>
                    )}
                    {project.personal && (
                      <div className="flex items-center gap-1.5 mb-3">
                        <User className="w-3 h-3 text-purple-500" />
                        <span className={`text-xs font-medium ${
                          theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                        }`}>
                          {language === 'es' ? 'Proyecto Personal' : language === 'fr' ? 'Projet Personnel' : 'Personal Project'}
                        </span>
                      </div>
                    )}
                    <p
                      className={`text-sm leading-relaxed mb-4 ${
                        theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                      }`}
                    >
                      {project.description[language]}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 text-xs font-medium rounded-lg ${
                            theme === 'dark'
                              ? 'bg-zinc-800 text-zinc-300'
                              : 'bg-zinc-100 text-zinc-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Case Study - Expandible */}
                    {project.caseStudy && (
                      <>
                        <button
                          onClick={() => toggleProject(project.id)}
                          className={`flex items-center gap-2 text-sm font-medium mb-3 transition-colors min-h-[36px] ${
                            theme === 'dark'
                              ? 'text-zinc-400 hover:text-zinc-200'
                              : 'text-zinc-600 hover:text-zinc-900'
                          }`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                          {language === 'es' ? 'Ver detalles' : language === 'fr' ? 'Voir détails' : 'View details'}
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className={`mb-3 sm:mb-4 p-3 sm:p-3.5 rounded-xl space-y-2 sm:space-y-2.5 ${
                                theme === 'dark' ? 'bg-zinc-800/50' : 'bg-zinc-50'
                              }`}>
                                {/* Professional projects */}
                                {project.caseStudy.challenge && (
                                  <>
                                    <div className="flex items-start gap-2">
                                      <Target className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                        theme === 'dark' ? 'text-red-400' : 'text-red-500'
                                      }`} />
                                      <div className="flex-1 min-w-0">
                                        <p className={`text-xs font-semibold mb-1 ${
                                          theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                                        }`}>{t('portfolio.caseStudy.challenge')}</p>
                                        <p className={`text-xs leading-relaxed ${
                                          theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                                        }`}>{project.caseStudy.challenge[language]}</p>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <Wrench className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                        theme === 'dark' ? 'text-blue-400' : 'text-blue-500'
                                      }`} />
                                      <div className="flex-1 min-w-0">
                                        <p className={`text-xs font-semibold mb-1 ${
                                          theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                                        }`}>{t('portfolio.caseStudy.contribution')}</p>
                                        <p className={`text-xs leading-relaxed ${
                                          theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                                        }`}>{project.caseStudy.contribution[language]}</p>
                                      </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                      <TrendingUp className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                        theme === 'dark' ? 'text-emerald-400' : 'text-emerald-500'
                                      }`} />
                                      <div className="flex-1 min-w-0">
                                        <p className={`text-xs font-semibold mb-1 ${
                                          theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                                        }`}>{t('portfolio.caseStudy.impact')}</p>
                                        <p className={`text-xs leading-relaxed ${
                                          theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                                        }`}>{project.caseStudy.impact[language]}</p>
                                      </div>
                                    </div>
                                  </>
                                )}
                                
                                {/* Personal projects */}
                                {project.caseStudy.what && (
                                  <>
                                    <div className="mb-2.5">
                                      <p className={`text-xs leading-relaxed ${
                                        theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                                      }`}>{project.caseStudy.what[language]}</p>
                                    </div>

                                    {project.caseStudy.features && (
                                      <div className="mb-2.5">
                                        <p className={`text-xs font-semibold mb-1.5 ${
                                          theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                                        }`}>
                                          {language === 'es' ? '⚙️ Qué hace' : language === 'fr' ? '⚙️ Ce qu\'il fait' : '⚙️ What it does'}
                                        </p>
                                        <ul className="space-y-1.5">
                                          {project.caseStudy.features[language].map((feat, i) => (
                                            <li key={i} className={`text-xs flex items-start gap-2 leading-relaxed ${
                                              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                                            }`}>
                                              <span className="text-blue-500 mt-0.5 flex-shrink-0">•</span>
                                              <span className="flex-1">{feat}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}

                                    {project.caseStudy.learnings && (
                                      <div>
                                        <p className={`text-xs font-semibold mb-1.5 ${
                                          theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                                        }`}>
                                          {language === 'es' ? '🚀 Qué demuestra' : language === 'fr' ? '🚀 Ce qu\'il démontre' : '🚀 What it demonstrates'}
                                        </p>
                                        <ul className="space-y-1.5">
                                          {project.caseStudy.learnings[language].map((learn, i) => (
                                            <li key={i} className={`text-xs flex items-start gap-2 leading-relaxed ${
                                              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                                            }`}>
                                              <span className="text-emerald-500 mt-0.5 flex-shrink-0">•</span>
                                              <span className="flex-1">{learn}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </>
                                )}
                                
                                {project.caseStudy.tech && (
                                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-dashed border-zinc-200 dark:border-zinc-700">
                                    {project.caseStudy.tech.map((tech) => (
                                      <span
                                        key={tech}
                                        className={`px-2 py-0.5 text-xs rounded-full ${
                                          theme === 'dark'
                                            ? 'bg-zinc-700 text-zinc-300'
                                            : 'bg-zinc-200 text-zinc-700'
                                        }`}
                                      >
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}

                    {/* Demo & Links - Only for professional projects */}
                    {!project.personal && (project.demo || project.demoUrl) && (
                      <div className="pt-3 border-t border-dashed border-zinc-200 dark:border-zinc-700">
                        {project.demoType === 'phone' ? (
                          <a
                            href={`tel:${project.demo.replace(/\s/g, '')}`}
                            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all min-h-[44px] ${
                              theme === 'dark'
                                ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                                : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                            }`}
                          >
                            <Phone className="w-4 h-4" />
                            {t('portfolio.callDemo')}
                          </a>
                        ) : (
                          <a
                            href={project.demo || project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all min-h-[44px] ${
                              theme === 'dark'
                                ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'
                                : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                            }`}
                          >
                            <ExternalLink className="w-4 h-4" />
                            {language === 'es' ? 'Ver demo' : language === 'fr' ? 'Voir démo' : 'View demo'}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}