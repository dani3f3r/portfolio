import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useTheme } from './ThemeContext';

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 border-t ${
        theme === 'dark'
          ? 'bg-zinc-950 border-zinc-800'
          : 'bg-zinc-50 border-zinc-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-sm ${
              theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'
            }`}
          >
            © {currentYear} Daniel Fernández Núñez
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`flex items-center gap-1 text-sm ${
              theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'
            }`}
          >
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Spain
          </motion.p>
        </div>
      </div>
    </footer>
  );
}