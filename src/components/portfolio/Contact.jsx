import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from './LanguageContext';
import { useTheme } from './ThemeContext';

export default function Contact() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    
    // Honeypot anti-spam
    if (formData.company) {
      setLoading(false);
      setStatus('success');
      setFormData({ name: '', email: '', message: '', company: '' });
      return;
    }
    
    try {
      const subject = encodeURIComponent(`Nuevo contacto desde portfolio – ${formData.name}`);
      const body = encodeURIComponent(
        `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
      );
      window.location.href = `mailto:danifernandezjs@gmail.com?subject=${subject}&body=${body}`;
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '', company: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };



  return (
    <section
      id="contact"
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
            {t('contact.title')}
          </h2>
          <p
            className={`text-lg lg:text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          >
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Form - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  placeholder={t('contact.name')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-zinc-800/50 border-zinc-700 focus:border-blue-500 text-white placeholder:text-zinc-500'
                      : 'bg-zinc-50 border-zinc-200 focus:border-blue-500 text-zinc-900 placeholder:text-zinc-400'
                  }`}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={t('contact.email')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className={`h-12 rounded-xl border-2 transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-zinc-800/50 border-zinc-700 focus:border-blue-500 text-white placeholder:text-zinc-500'
                      : 'bg-zinc-50 border-zinc-200 focus:border-blue-500 text-zinc-900 placeholder:text-zinc-400'
                  }`}
                />
              </div>
              <div>
                <Textarea
                  placeholder={t('contact.message')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className={`rounded-xl border-2 transition-all duration-300 resize-none ${
                    theme === 'dark'
                      ? 'bg-zinc-800/50 border-zinc-700 focus:border-blue-500 text-white placeholder:text-zinc-500'
                      : 'bg-zinc-50 border-zinc-200 focus:border-blue-500 text-zinc-900 placeholder:text-zinc-400'
                  }`}
                />
              </div>

              {/* Honeypot anti-spam */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                tabIndex="-1"
                autoComplete="off"
                style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                aria-hidden="true"
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.div>
                    {t('contact.sending')}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    {t('contact.send')}
                  </span>
                )}
              </Button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-emerald-500 justify-center"
                >
                  <CheckCircle className="w-5 h-5" />
                  {t('contact.success')}
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-500 justify-center text-sm"
                >
                  <AlertCircle className="w-5 h-5" />
                  {language === 'es' ? 'Error al enviar. Intenta de nuevo.' : language === 'fr' ? 'Erreur d\'envoi. Réessayez.' : 'Error sending. Try again.'}
                </motion.div>
              )}

              {/* Alternative contact methods */}
              <p className={`text-center text-sm pt-2 ${
                theme === 'dark' ? 'text-zinc-500' : 'text-zinc-500'
              }`}>
                {language === 'es' ? 'También puedes conectar conmigo en ' : language === 'fr' ? 'Vous pouvez aussi me connecter sur ' : 'You can also connect on '}
                <a 
                  href="https://www.linkedin.com/in/daniel-fernández-núñez-50b994185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition-colors ${
                    theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  LinkedIn
                </a>
                .
              </p>
            </form>
          </motion.div>
      </div>
    </section>
  );
}
