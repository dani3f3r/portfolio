import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

const skillCategories = [
  {
    name: { es: 'IA & Automatización', en: 'AI & Automation', fr: 'IA & Automatisation' },
    skills: ['IA Generativa', 'Bots Voz/Chat', 'STT/TTS', 'Orquestación de flujos', 'Make', 'n8n'],
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    name: { es: 'Backend & Arquitectura', en: 'Backend & Architecture', fr: 'Backend & Architecture' },
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Arquitectura de servicios', 'REST APIs', 'Escalabilidad', 'Multi-tenant'],
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    name: { es: 'Telecom & WebRTC', en: 'Telecom & WebRTC', fr: 'Télécom & WebRTC' },
    skills: ['WebRTC', 'VoIP', 'Telefonía', 'Integraciones CRM'],
    gradient: 'from-orange-500 to-red-500'
  },
  {
    name: { es: 'Liderazgo Técnico', en: 'Technical Leadership', fr: 'Leadership Technique' },
    skills: ['Gestión equipos', 'Arquitectura', 'Roadmaps', 'Negociación', 'Mentoría'],
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    name: { es: 'Frontend', en: 'Frontend', fr: 'Frontend' },
    skills: ['React', 'Angular', 'TypeScript', 'Tailwind', 'Vue', 'HTML', 'CSS'],
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    name: { es: 'Lenguajes', en: 'Languages', fr: 'Langages' },
    skills: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Java', 'C', 'C++'],
    gradient: 'from-blue-500 to-indigo-500'
  },
  {
    name: { es: 'DevOps & Herramientas', en: 'DevOps & Tools', fr: 'DevOps & Outils' },
    skills: ['Docker', 'Linux', 'Git', 'CI/CD', 'Servidores'],
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    name: { es: 'Seguridad & Compliance', en: 'Security & Compliance', fr: 'Sécurité & Conformité' },
    skills: ['Ciberseguridad', 'ISO 27001', 'ISO/IEC 42001', 'CCN', 'Seguridad TIC'],
    gradient: 'from-red-500 to-orange-500'
  }
];

export default function Skills() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className={`relative py-16 sm:py-20 lg:py-28 overflow-hidden ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
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
            {t('skills.title')}
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            {t('skills.subtitle')}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name.en}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              whileHover={{ y: -3, scale: 1.01 }}
              className={`relative p-4 sm:p-5 rounded-2xl overflow-hidden transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-zinc-800/50 hover:bg-zinc-800/70 border border-zinc-700/50'
                  : 'bg-zinc-50 hover:bg-white border border-zinc-200/50 hover:shadow-md'
              }`}
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient}`}
              />

              <h3
                className={`text-sm sm:text-base font-semibold mb-2.5 pt-0.5 ${
                  theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}
              >
                {category.name[language]}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'bg-zinc-700/50 text-zinc-300 hover:bg-zinc-700'
                        : 'bg-white text-zinc-700 hover:bg-zinc-100 shadow-sm'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}