import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

const languages = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' }
];

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'portfolio', label: t('nav.portfolio') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'education', label: t('nav.education') },
    { id: 'references', label: t('nav.references') },
    { id: 'contact', label: t('nav.contact') }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? theme === 'dark'
              ? 'bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-800/50'
              : 'bg-white/80 backdrop-blur-xl border-b border-zinc-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? 'py-0' : 'py-1'
        }`}>
          <div className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-12 lg:h-14' : 'h-16 lg:h-18'
          }`}>
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              className={`text-2xl font-bold tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-zinc-900'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                DF
              </span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    theme === 'dark'
                      ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* Language Selector */}
              <div className="relative">
                <motion.button
                  onClick={() => setLangMenuOpen(!langMenuOpen)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    theme === 'dark'
                      ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{language.toUpperCase()}</span>
                </motion.button>

                <AnimatePresence>
                  {langMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute right-0 mt-2 py-2 rounded-xl shadow-xl border ${
                        theme === 'dark'
                          ? 'bg-zinc-900 border-zinc-800'
                          : 'bg-white border-zinc-200'
                      }`}
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLangMenuOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-sm font-medium text-left transition-colors ${
                            language === lang.code
                              ? 'text-blue-500'
                              : theme === 'dark'
                              ? 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                              : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50'
                          }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`p-2.5 rounded-full transition-all duration-300 ${
                  theme === 'dark'
                    ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden p-2.5 rounded-full transition-all duration-300 ${
                  theme === 'dark'
                    ? 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                    : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute right-0 top-0 bottom-0 w-80 max-w-full p-6 pt-24 ${
                theme === 'dark' ? 'bg-zinc-900' : 'bg-white'
              }`}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-3 text-left text-lg font-medium rounded-xl transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-zinc-300 hover:text-white hover:bg-zinc-800'
                        : 'text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}