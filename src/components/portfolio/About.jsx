import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Target, Heart, BookOpen, CheckCircle, Rocket, Shield } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

const valueIcons = {
  clarity: Sparkles,
  automation: Zap,
  precision: Target,
  leadership: Heart,
  learning: BookOpen,
  quality: Shield
};

export default function About() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const values = ['clarity', 'automation', 'precision', 'leadership', 'learning', 'quality'];
  const valuePropositionItems = t('about.valueProposition.items') || [];

  return (
    <section
      id="about"
      className={`relative py-20 lg:py-28 overflow-hidden ${
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
            className={`text-4xl lg:text-5xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-zinc-900'
            }`}
          >
            {t('about.title')}
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-2 space-y-5"
          >
            <p
              className={`text-base lg:text-lg leading-relaxed ${
                theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
              }`}
            >
              {t('about.p1')}
            </p>
            <p
              className={`text-base lg:text-lg leading-relaxed ${
                theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
              }`}
            >
              {t('about.p2')}
            </p>
            <p
              className={`text-base lg:text-lg leading-relaxed ${
                theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
              }`}
            >
              {t('about.p3')}
            </p>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`mt-6 p-4 sm:p-5 rounded-2xl border ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20' 
                  : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <Rocket className={`w-4 h-4 sm:w-5 sm:h-5 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                <h3 className={`text-sm sm:text-base font-semibold ${theme === 'dark' ? 'text-white' : 'text-zinc-900'}`}>
                  {t('about.valueProposition.title')}
                </h3>
              </div>
              <div className="space-y-2">
                {Array.isArray(valuePropositionItems) && valuePropositionItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                    }`} />
                    <span className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'}`}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`p-6 rounded-2xl border ${
              theme === 'dark' 
                ? 'bg-zinc-800/30 border-zinc-700/50' 
                : 'bg-zinc-50/80 border-zinc-200/50'
            }`}
          >
            <h3
              className={`text-xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}
            >
              {t('about.values.title')}
            </h3>
            <div className="space-y-4">
              {values.map((value, index) => {
                const Icon = valueIcons[value];
                return (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div
                      className={`p-2.5 rounded-xl ${
                        theme === 'dark' ? 'bg-zinc-700/50' : 'bg-white'
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`}
                      />
                    </div>
                    <span
                      className={`font-medium ${
                        theme === 'dark' ? 'text-zinc-300' : 'text-zinc-700'
                      }`}
                    >
                      {t(`about.values.${value}`)}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
