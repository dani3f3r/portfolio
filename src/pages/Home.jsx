import React, { useEffect } from 'react';
import { LanguageProvider } from '@/components/portfolio/LanguageContext';
import { ThemeProvider, useTheme } from '@/components/portfolio/ThemeContext';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Portfolio from '@/components/portfolio/Portfolio';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import Education from '@/components/portfolio/Education';
import References from '@/components/portfolio/References';
import Contact from '@/components/portfolio/Contact';
import CallToAction from '@/components/portfolio/CallToAction';
import Footer from '@/components/portfolio/Footer';

function PortfolioContent() {
  const { theme } = useTheme();

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div
      className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
        theme === 'dark' ? 'bg-zinc-950' : 'bg-white'
      }`}
      style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}
    >
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Experience />
        <Education />
        <References />
        <Contact />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}