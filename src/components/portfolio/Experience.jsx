import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronRight, ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

const experiences = [
  {
    title: { es: 'Head of AI Bot Development / Engineering Lead', en: 'Head of AI Bot Development / Engineering Lead', fr: 'Head of AI Bot Development / Engineering Lead' },
    company: 'Mintt Cloud Technology',
    period: { es: 'Feb. 2025 - Actualidad', en: 'Feb. 2025 - Present', fr: 'Fév. 2025 - Présent' },
    description: {
      es: [
        'Lidero el área de automatización e IA aplicada, con responsabilidad sobre diseño, arquitectura y calidad de soluciones en producción',
        'Defino y evoluciono sistemas de bots conversacionales (voz y chat) integrados en flujos empresariales complejos',
        'Coordino técnicamente proyectos críticos, asegurando fiabilidad, escalabilidad y experiencia de usuario',
        'Tomo decisiones arquitectónicas y técnicas con impacto directo en producto y operaciones',
        'Colaboro estratégicamente con ventas, marketing y proveedores en proyectos enterprise'
      ],
      en: [
        'Lead the automation and applied AI area, with responsibility for design, architecture and production solution quality',
        'Define and evolve conversational bot systems (voice and chat) integrated into complex business flows',
        'Coordinate technical aspects of critical projects, ensuring reliability, scalability and user experience',
        'Make architectural and technical decisions with direct impact on product and operations',
        'Collaborate strategically with sales, marketing and vendors on enterprise projects'
      ],
      fr: [
        'Dirige le domaine automatisation et IA appliquée, avec responsabilité sur conception, architecture et qualité des solutions en production',
        'Définis et fais évoluer systèmes de bots conversationnels (voix et chat) intégrés dans flux d\'entreprise complexes',
        'Coordonne techniquement projets critiques, assurant fiabilité, évolutivité et expérience utilisateur',
        'Prends décisions architecturales et techniques avec impact direct sur produit et opérations',
        'Collabore stratégiquement avec ventes, marketing et fournisseurs sur projets enterprise'
      ]
    },
    details: {
      responsibilities: {
        es: ['Liderazgo técnico y gestión de equipo', 'Arquitectura y diseño de sistemas escalables', 'Definición de roadmaps técnicos', 'Coordinación con stakeholders y proveedores'],
        en: ['Technical leadership and team management', 'Architecture and scalable system design', 'Technical roadmap definition', 'Stakeholder and vendor coordination'],
        fr: ['Leadership technique et gestion d\'équipe', 'Architecture et conception de systèmes évolutifs', 'Définition de roadmaps techniques', 'Coordination avec stakeholders et fournisseurs']
      }
    },
    current: true
  },
  {
    title: { es: 'AI Bot Developer', en: 'AI Bot Developer', fr: 'AI Bot Developer' },
    company: 'Mintt Cloud Technology',
    period: { es: 'Jul. 2024 - Ene. 2025', en: 'Jul. 2024 - Jan. 2025', fr: 'Juil. 2024 - Jan. 2025' },
    description: {
      es: [
        'Desarrollo e implemento bots conversacionales con IA generativa para clientes enterprise',
        'Automatizo procesos empresariales y flujos de trabajo complejos',
        'Integro con sistemas existentes (CRM, telefonía, bases de datos) y trabajo en producción',
        'Diseño arquitecturas técnicas y valido viabilidad de soluciones'
      ],
      en: [
        'Develop and implement conversational bots with generative AI for enterprise clients',
        'Automate business processes and complex workflows',
        'Integrate with existing systems (CRM, telephony, databases) and work in production',
        'Design technical architectures and validate solution feasibility'
      ],
      fr: [
        'Développe et implémente bots conversationnels avec IA générative pour clients enterprise',
        'Automatise processus d\'entreprise et flux de travail complexes',
        'Intègre avec systèmes existants (CRM, téléphonie, bases de données) et travaille en production',
        'Conçois architectures techniques et valide faisabilité de solutions'
      ]
    },
    details: {
      responsibilities: {
        es: ['Desarrollo full-stack de soluciones con IA', 'Automatización e integraciones', 'Arquitectura técnica y diseño de sistemas', 'Trabajo directo en producción'],
        en: ['Full-stack development of AI solutions', 'Automation and integrations', 'Technical architecture and system design', 'Direct production work'],
        fr: ['Développement full-stack de solutions IA', 'Automatisation et intégrations', 'Architecture technique et conception de systèmes', 'Travail direct en production']
      }
    }
  },
  {
    title: { es: 'Profesor de Programación', en: 'Programming Instructor', fr: 'Professeur de Programmation' },
    company: 'Freelance',
    period: { es: 'Jun. 2022 - Actualidad', en: 'Jun. 2022 - Present', fr: 'Juin 2022 - Présent' },
    description: {
      es: [
        'Formo técnicamente en desarrollo web full-stack a estudiantes de bootcamps y formación profesional',
        'Comunico claramente conceptos técnicos complejos y adapto a distintos niveles de experiencia',
        'Mentorizo y acompaño proyectos reales hasta producción'
      ],
      en: [
        'Provide technical training in full-stack web development for bootcamp and vocational training students',
        'Communicate complex technical concepts clearly and adapt to different experience levels',
        'Mentor and accompany real projects to production'
      ],
      fr: [
        'Forme techniquement en développement web full-stack étudiants de bootcamps et formation professionnelle',
        'Communique clairement concepts techniques complexes et adapte à différents niveaux d\'expérience',
        'Mentorise et accompagne projets réels jusqu\'en production'
      ]
    }
  },
  {
    title: { es: 'Desarrollador Web', en: 'Web Developer', fr: 'Développeur Web' },
    company: 'Melit Technologies, S.L.',
    period: { es: 'Feb. 2024 - Jun. 2024', en: 'Feb. 2024 - Jun. 2024', fr: 'Fév. 2024 - Juin 2024' },
    description: {
      es: [
        'Desarrollo aplicaciones web profesionales con Angular y Spring Boot en proyectos empresariales',
        'Optimizo rendimiento frontend y backend',
        'Implemento interfaces funcionales y experiencia de usuario'
      ],
      en: [
        'Develop professional web applications with Angular and Spring Boot on enterprise projects',
        'Optimize frontend and backend performance',
        'Implement functional interfaces and user experience'
      ],
      fr: [
        'Développe applications web professionnelles avec Angular et Spring Boot sur projets enterprise',
        'Optimise performances frontend et backend',
        'Implémente interfaces fonctionnelles et expérience utilisateur'
      ]
    },
    details: {
      responsibilities: {
        es: ['Desarrollo full-stack en proyectos enterprise', 'Optimización de rendimiento', 'Implementación de UX/UI funcional'],
        en: ['Full-stack development on enterprise projects', 'Performance optimization', 'Functional UX/UI implementation'],
        fr: ['Développement full-stack sur projets enterprise', 'Optimisation de performances', 'Implémentation UX/UI fonctionnelle']
      }
    }
  },
  {
    title: { es: 'Desarrollador Web (Prácticas)', en: 'Web Developer (Internship)', fr: 'Développeur Web (Stage)' },
    company: 'Vortex Dimensión Digital',
    period: { es: 'Sept. 2023 - Dic. 2023', en: 'Sept. 2023 - Dec. 2023', fr: 'Sept. 2023 - Déc. 2023' },
    description: {
      es: [
        'Desarrollo aplicaciones web full-stack en proyectos reales durante formación profesional',
        'Realizo primeras integraciones con APIs y gestión de datos'
      ],
      en: [
        'Develop full-stack web applications on real projects during vocational training',
        'Perform first API integrations and data management'
      ],
      fr: [
        'Développe applications web full-stack sur projets réels durant formation professionnelle',
        'Réalise premières intégrations API et gestion de données'
      ]
    },
    details: {
      responsibilities: {
        es: ['Desarrollo web en entorno profesional', 'Aprendizaje práctico de arquitectura full-stack'],
        en: ['Web development in professional environment', 'Practical learning of full-stack architecture'],
        fr: ['Développement web en environnement professionnel', 'Apprentissage pratique d\'architecture full-stack']
      }
    }
  }
];

export default function Experience() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [expandedExp, setExpandedExp] = useState({});

  return (
    <section
      id="experience"
      className={`relative py-16 sm:py-20 lg:py-28 overflow-hidden ${
        theme === 'dark' ? 'bg-zinc-950' : 'bg-zinc-50'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
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
            {t('experience.title')}
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            {t('experience.subtitle')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div
            className={`absolute left-8 top-0 bottom-0 w-px ${
              theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'
            } hidden sm:block`}
          />

          {/* Items */}
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative sm:pl-20"
              >
                {/* Dot */}
                <div
                  className={`absolute left-6 top-2 w-5 h-5 rounded-full border-4 hidden sm:block ${
                    exp.current
                      ? 'bg-blue-500 border-blue-500/20 shadow-lg shadow-blue-500/50 ring-4 ring-blue-500/10'
                      : theme === 'dark'
                      ? 'bg-zinc-700 border-zinc-800'
                      : 'bg-zinc-300 border-zinc-200'
                  }`}
                />

                {/* Card */}
                <div
                  className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-zinc-900/50 border border-zinc-800/50 hover:border-zinc-700/50'
                      : 'bg-white border border-zinc-200/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3
                        className={`text-lg sm:text-xl font-bold mb-1 ${
                          theme === 'dark' ? 'text-white' : 'text-zinc-900'
                        }`}
                      >
                        {exp.title[language]}
                      </h3>
                      <p
                        className={`text-sm font-medium ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap ${
                        exp.current
                          ? 'bg-blue-500/10 text-blue-500'
                          : theme === 'dark'
                          ? 'bg-zinc-800 text-zinc-400'
                          : 'bg-zinc-100 text-zinc-600'
                      }`}
                    >
                      {exp.period[language]}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description[language].map((item, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2 text-sm ${
                          theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                        }`}
                      >
                        <ChevronRight className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Expandible details */}
                  {exp.details && (
                    <>
                      <button
                        onClick={() => setExpandedExp(prev => ({ ...prev, [index]: !prev[index] }))}
                        className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                          theme === 'dark'
                            ? 'text-zinc-400 hover:text-zinc-200'
                            : 'text-zinc-600 hover:text-zinc-900'
                        }`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            expandedExp[index] ? 'rotate-180' : ''
                          }`}
                        />
                        {language === 'es' ? 'Ver detalles' : language === 'fr' ? 'Voir détails' : 'View details'}
                      </button>

                      <AnimatePresence>
                        {expandedExp[index] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className={`mt-4 p-4 rounded-xl space-y-3 ${
                              theme === 'dark' ? 'bg-zinc-800/30' : 'bg-zinc-50'
                            }`}>
                              {/* Responsibilities */}
                              <div>
                                <p className={`text-xs font-semibold mb-2 ${
                                  theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                                }`}>
                                  {language === 'es' ? 'Responsabilidades Clave' : language === 'fr' ? 'Responsabilités Clés' : 'Key Responsibilities'}
                                </p>
                                <ul className="space-y-1">
                                  {exp.details.responsibilities[language].map((resp, i) => (
                                    <li
                                      key={i}
                                      className={`text-xs flex items-start gap-2 ${
                                        theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                                      }`}
                                    >
                                      <span className="text-blue-500 mt-0.5">•</span>
                                      {resp}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}