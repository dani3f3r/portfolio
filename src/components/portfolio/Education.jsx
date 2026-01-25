import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Shield, BookOpen } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

const educationItems = [
  {
    title: { 
      es: 'Técnico Superior en Desarrollo de Aplicaciones Web', 
      en: 'Higher Technician in Web Application Development', 
      fr: 'Technicien Supérieur en Développement d\'Applications Web' 
    },
    institution: { es: 'Formación Profesional', en: 'Vocational Training', fr: 'Formation Professionnelle' },
    period: '2021 - 2023',
    icon: GraduationCap,
    type: 'degree'
  },
  {
    title: { 
      es: 'Bootcamp Full-Stack', 
      en: 'Full-Stack Bootcamp', 
      fr: 'Bootcamp Full-Stack' 
    },
    institution: { es: 'The Bridge', en: 'The Bridge', fr: 'The Bridge' },
    period: '2020',
    icon: Award,
    type: 'bootcamp'
  },
  {
    title: { 
      es: 'Ciberseguridad & Seguridad TIC', 
      en: 'Cybersecurity & ICT Security', 
      fr: 'Cybersécurité & Sécurité TIC' 
    },
    institution: { 
      es: 'Centro Criptológico Nacional (CCN)', 
      en: 'National Cryptologic Center (CCN)', 
      fr: 'Centre Cryptologique National (CCN)' 
    },
    period: { es: '2025 - Actualidad', en: '2025 - Present', fr: '2025 - Présent' },
    icon: Shield,
    type: 'certification'
  },
  {
    title: { 
      es: 'Formación complementaria', 
      en: 'Complementary Training', 
      fr: 'Formation Complémentaire' 
    },
    institution: { 
      es: 'IA generativa aplicada, ISO 27001, ISO/IEC 42001, Ciberseguridad, Telecomunicaciones', 
      en: 'Applied Generative AI, ISO 27001, ISO/IEC 42001, Cybersecurity, Telecommunications', 
      fr: 'IA générative appliquée, ISO 27001, ISO/IEC 42001, Cybersécurité, Télécommunications' 
    },
    period: { es: '2023 - Actualidad', en: '2023 - Present', fr: '2023 - Présent' },
    icon: BookOpen,
    type: 'certification'
  }
];

export default function Education() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  return (
    <section
      id="education"
      className={`relative py-16 sm:py-20 lg:py-28 overflow-hidden ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
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
            {t('education.title')}
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            {t('education.subtitle')}
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {educationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`relative p-5 rounded-2xl transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600/50'
                    : 'bg-zinc-50 border border-zinc-200/50 hover:shadow-lg hover:bg-white'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl ${
                      item.type === 'degree'
                        ? 'bg-blue-500/10 text-blue-500'
                        : item.type === 'bootcamp'
                        ? 'bg-purple-500/10 text-purple-500'
                        : 'bg-emerald-500/10 text-emerald-500'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-bold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-zinc-900'
                      }`}
                    >
                      {item.title[language]}
                    </h3>
                    <p
                      className={`text-sm mb-2 ${
                        theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                      }`}
                    >
                      {item.institution[language]}
                    </p>
                    <span
                      className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        theme === 'dark'
                          ? 'bg-zinc-700/50 text-zinc-300'
                          : 'bg-zinc-200/50 text-zinc-600'
                      }`}
                    >
                      {typeof item.period === 'string' ? item.period : item.period[language]}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}