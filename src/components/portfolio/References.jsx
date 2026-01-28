import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Quote, Star, Shield, Award, Users, GraduationCap } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

const certifications = [
  {
    title: {
      es: 'Cursos de Ciberseguridad - CCN',
      en: 'Cybersecurity Courses - CCN',
      fr: 'Cours de Cybersécurité - CCN'
    },
    description: {
      es: 'Formación continua en ciberseguridad a través de la plataforma Ángeles del CCN (Centro Criptológico Nacional)',
      en: 'Continuous cybersecurity training through the CCN Angels platform (National Cryptologic Center)',
      fr: 'Formation continue en cybersécurité via la plateforme Ángeles del CCN (Centre Cryptologique National)'
    },
    icon: Shield,
    color: 'blue'
  },
  {
    title: {
      es: 'Normas ISO & Seguridad de la Información',
      en: 'ISO Standards & Information Security',
      fr: 'Normes ISO et Sécurité de l\'Information'
    },
    description: {
      es: 'Conocimientos en ISO 27001, gestión de riesgos y seguridad de la información empresarial',
      en: 'Knowledge in ISO 27001, risk management and enterprise information security',
      fr: 'Connaissances en ISO 27001, gestion des risques et sécurité de l\'information d\'entreprise'
    },
    icon: Award,
    color: 'emerald'
  },
  {
    title: {
      es: 'Mentor Técnico',
      en: 'Technical Mentor',
      fr: 'Mentor Technique'
    },
    description: {
      es: '+10 alumnos formados con éxito en desarrollo web full-stack (bootcamps y FP)',
      en: '+10 students successfully trained in full-stack web development (bootcamps and VT)',
      fr: '+10 étudiants formés avec succès en développement web full-stack (bootcamps et FP)'
    },
    icon: Users,
    color: 'purple'
  },
  {
    title: {
      es: 'Telecomunicaciones',
      en: 'Telecommunications',
      fr: 'Télécommunications'
    },
    description: {
      es: 'Formación especializada en telecomunicaciones, VoIP, WebRTC y sistemas de telefonía',
      en: 'Specialized training in telecommunications, VoIP, WebRTC and telephony systems',
      fr: 'Formation spécialisée en télécommunications, VoIP, WebRTC et systèmes de téléphonie'
    },
    icon: GraduationCap,
    color: 'amber'
  }
];

const BASE_URL = import.meta.env.BASE_URL;

const documents = [
  {
    title: { 
      es: 'Carta de Presentación', 
      en: 'Cover Letter', 
      fr: 'Lettre de Motivation' 
    },
    type: 'cover',
    icon: FileText,
    downloadUrl: `${BASE_URL}docs/carta-presentacion.pdf`,
    fileName: 'Daniel_Fernandez-Carta_de_presentacion.pdf'
  },
  {
    title: { 
      es: 'Carta de Recomendación', 
      en: 'Recommendation Letter', 
      fr: 'Lettre de Recommandation' 
    },
    type: 'recommendation',
    icon: FileText,
    downloadUrl: `${BASE_URL}docs/carta-recomendacion.pdf`,
    fileName: 'Daniel_Fernandez-Carta_de_recomendacion.pdf'
  }
];

const testimonials = [
  {
    quote: {
      es: 'Gracias a Daniel entendí cómo estructurar correctamente un proyecto web completo, desde el backend hasta el despliegue. Me ayudó a mejorar mi forma de programar y a pensar en escalabilidad y buenas prácticas.',
      en: 'Thanks to Daniel I understood how to properly structure a complete web project, from backend to deployment. He helped me improve my programming and think about scalability and best practices.',
      fr: 'Grâce à Daniel j\'ai compris comment structurer correctement un projet web complet, du backend au déploiement. Il m\'a aidé à améliorer ma programmation et à penser à l\'évolutivité et aux bonnes pratiques.'
    },
    author: { es: 'Alumno DAW', en: 'DAW Student', fr: 'Étudiant DAW' },
    role: { es: 'Desarrollo de Aplicaciones Web', en: 'Web Application Development', fr: 'Développement d\'Applications Web' }
  },
  {
    quote: {
      es: 'Explica los conceptos de forma clara y aplicada a casos reales. Durante los proyectos de DAW me ayudó a desbloquear problemas técnicos y a entender por qué una solución era mejor que otra.',
      en: 'Explains concepts clearly and applied to real cases. During DAW projects he helped me unblock technical problems and understand why one solution was better than another.',
      fr: 'Explique les concepts clairement et appliqués à des cas réels. Durant les projets DAW il m\'a aidé à débloquer des problèmes techniques et à comprendre pourquoi une solution était meilleure qu\'une autre.'
    },
    author: { es: 'Alumno DAW', en: 'DAW Student', fr: 'Étudiant DAW' },
    role: { es: 'Desarrollo de Aplicaciones Web', en: 'Web Application Development', fr: 'Développement d\'Applications Web' }
  }
];

export default function References() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const colorClasses = {
    blue: { bg: theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50', text: 'text-blue-500' },
    emerald: { bg: theme === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-50', text: 'text-emerald-500' },
    purple: { bg: theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-50', text: 'text-purple-500' },
    amber: { bg: theme === 'dark' ? 'bg-amber-500/10' : 'bg-amber-50', text: 'text-amber-500' }
  };

  return (
    <section
      id="references"
      className={`relative py-16 sm:py-20 lg:py-28 overflow-hidden ${
        theme === 'dark' ? 'bg-zinc-950' : 'bg-zinc-50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl lg:text-5xl font-bold tracking-tight mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-zinc-900'
            }`}
          >
            {t('references.title')}
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            {t('references.subtitle')}
          </p>
        </motion.div>

        {/* Certifications & Training */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className={`text-xl font-semibold mb-5 ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>
            {t('references.certifications')}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              const colors = colorClasses[cert.color];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-2xl ${
                    theme === 'dark'
                      ? 'bg-zinc-900/50 border border-zinc-800/50'
                      : 'bg-white border border-zinc-200/50 shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl ${colors.bg}`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div>
                      <h4 className={`font-semibold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-zinc-900'
                      }`}>
                        {cert.title[language]}
                      </h4>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                      }`}>
                        {cert.description[language]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Recommendation Letters */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className={`text-xl font-semibold mb-5 ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>
            {t('references.recommendations')}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              
              const handleDownload = async (e) => {
                e.preventDefault();
                try {
                  const response = await fetch(doc.downloadUrl);
                  const blob = await response.blob();
                  const url = window.URL.createObjectURL(blob);
                  const link = document.createElement('a');
                  link.href = url;
                  link.download = doc.fileName;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  window.URL.revokeObjectURL(url);
                } catch (error) {
                  console.error('Error downloading file:', error);
                  window.open(doc.downloadUrl, '_blank');
                }
              };
              
              return (
                <motion.button
                  key={index}
                  onClick={handleDownload}
                  whileHover={{ y: -4 }}
                  className={`w-full text-left flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                    theme === 'dark'
                      ? 'bg-zinc-900/50 border border-zinc-800/50 hover:border-blue-500/50'
                      : 'bg-white border border-zinc-200/50 hover:border-blue-500/50 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className={`p-3 rounded-xl ${
                    theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50'
                  }`}>
                    <Icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-medium ${
                      theme === 'dark' ? 'text-white' : 'text-zinc-900'
                    }`}>
                      {doc.title[language]}
                    </h4>
                  </div>
                  <Download className={`w-5 h-5 ${
                    theme === 'dark' ? 'text-zinc-600' : 'text-zinc-400'
                  }`} />
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div>
          <h3 className={`text-xl font-semibold mb-5 ${
            theme === 'dark' ? 'text-white' : 'text-zinc-900'
          }`}>
            {t('references.mentoring')}
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-5 rounded-2xl ${
                  theme === 'dark'
                    ? 'bg-zinc-900/50 border border-zinc-800/50'
                    : 'bg-white border border-zinc-200/50 shadow-sm'
                }`}
              >
                <Quote
                  className={`w-8 h-8 mb-3 ${
                    theme === 'dark' ? 'text-zinc-700' : 'text-zinc-200'
                  }`}
                />
                <p
                  className={`text-sm leading-relaxed mb-4 ${
                    theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                  }`}
                >
                  "{testimonial.quote[language]}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-100'
                    }`}
                  >
                    <Star className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <p
                      className={`font-medium text-sm ${
                        theme === 'dark' ? 'text-white' : 'text-zinc-900'
                      }`}
                    >
                      {typeof testimonial.author === 'string' ? testimonial.author : testimonial.author[language]}
                    </p>
                    <p
                      className={`text-xs ${
                        theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'
                      }`}
                    >
                      {testimonial.role[language]}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
