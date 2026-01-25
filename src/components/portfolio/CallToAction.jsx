import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

export default function CallToAction() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className={`relative py-12 lg:py-16 overflow-hidden ${
        theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10'
              : 'bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <div className={`p-3 rounded-2xl ${
              theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
            }`}>
              <Sparkles className={`w-8 h-8 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`} />
            </div>
          </div>

          <h2
            className={`text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-zinc-900'
            }`}
          >
            {t('cta.title')}
          </h2>
          <p
            className={`text-lg lg:text-xl mb-10 max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            {t('cta.subtitle')}
          </p>

          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium text-lg shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
          >
            {t('cta.button')}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}