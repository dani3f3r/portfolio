import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';
const BASE_URL = import.meta.env.BASE_URL;
const CV_ES_URL = `${BASE_URL}docs/cv-daniel-fernandez-es.pdf`;
const CV_EN_URL = `${BASE_URL}docs/cv-daniel-fernandez-en.pdf`;

const PROFILE_IMAGE = `${BASE_URL}assets/profile.png`;

export default function Hero() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [downloadingES, setDownloadingES] = useState(false);
  const [downloadingEN, setDownloadingEN] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = async (lang) => {
    if (lang === 'es') setDownloadingES(true);
    else setDownloadingEN(true);
    
    try {
      const url = lang === 'es' ? CV_ES_URL : CV_EN_URL;
      const fileName = lang === 'es'
        ? 'Daniel_Fernandez-CV_ES.pdf'
        : 'Daniel_Fernandez-CV_EN.pdf';

      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error generating CV:', error);
    } finally {
      if (lang === 'es') setDownloadingES(false);
      else setDownloadingEN(false);
    }
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        theme === 'dark' ? 'bg-zinc-950' : 'bg-zinc-50'
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950'
              : 'bg-gradient-to-br from-zinc-50 via-white to-zinc-100'
          }`}
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className={`absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-500/5'
          }`}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className={`absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] rounded-full blur-3xl ${
            theme === 'dark' ? 'bg-cyan-500/10' : 'bg-cyan-500/5'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className={`relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden ${
                theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-200'
              }`}
            >
              <img
                src={PROFILE_IMAGE}
                alt="Daniel Fernández Núñez"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative ring */}
            <div
              className={`absolute -inset-2 rounded-3xl border-2 ${
                theme === 'dark' ? 'border-zinc-700/50' : 'border-zinc-300/50'
              }`}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className={`absolute -inset-4 rounded-3xl border border-dashed ${
                theme === 'dark' ? 'border-zinc-800' : 'border-zinc-300'
              }`}
            />
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4"
              >
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Daniel Fernández Núñez
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p
                className={`text-lg sm:text-xl md:text-2xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-zinc-900'
                }`}
              >
                {t('hero.title')}
              </p>
              <p
                className={`text-base sm:text-lg mb-6 ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                {t('hero.subtitle')}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
            >
              <motion.button
                onClick={() => handleDownloadCV('es')}
                disabled={downloadingES}
                whileHover={{ scale: downloadingES ? 1 : 1.02 }}
                whileTap={{ scale: downloadingES ? 1 : 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm sm:text-base font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px]"
              >
                {downloadingES ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Download className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <Download className="w-4 h-4" />
                )}
                {t('hero.downloadCV')} (ES)
              </motion.button>

              <motion.button
                onClick={() => handleDownloadCV('en')}
                disabled={downloadingEN}
                whileHover={{ scale: downloadingEN ? 1 : 1.02 }}
                whileTap={{ scale: downloadingEN ? 1 : 0.98 }}
                className={`inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium border transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px] ${
                  theme === 'dark'
                    ? 'border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600'
                    : 'border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:border-zinc-400'
                }`}
              >
                {downloadingEN ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    <Download className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <Download className="w-4 h-4" />
                )}
                {t('hero.downloadCV')} (EN)
              </motion.button>

              <motion.a
                href="https://www.linkedin.com/in/daniel-fernández-núñez-50b994185"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 sm:p-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  theme === 'dark'
                    ? 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="mailto:danifernandezjs@gmail.com"
                aria-label="Email"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 sm:p-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  theme === 'dark'
                    ? 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'
                }`}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 p-2 rounded-full ${
          theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'
        }`}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
