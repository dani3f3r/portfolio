import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from 'lucide-react';

export const generateCV = async (language = 'es') => {
  const cvContainer = document.createElement('div');
  cvContainer.style.position = 'absolute';
  cvContainer.style.left = '-9999px';
  cvContainer.style.width = '794px'; // A4 width at 96 DPI
  cvContainer.style.background = '#ffffff';
  cvContainer.style.padding = '40px';
  cvContainer.style.fontFamily = "'Inter', sans-serif";
  
  const translations = {
    es: {
      profile: 'Perfil Profesional',
      experience: 'Experiencia Profesional',
      skills: 'Habilidades Técnicas',
      education: 'Formación',
      languages: 'Idiomas',
      present: 'Actualidad',
      native: 'Nativo',
      technical: 'Uso técnico habitual'
    },
    en: {
      profile: 'Professional Profile',
      experience: 'Professional Experience',
      skills: 'Technical Skills',
      education: 'Education',
      languages: 'Languages',
      present: 'Present',
      native: 'Native',
      technical: 'Technical proficiency'
    },
    fr: {
      profile: 'Profil Professionnel',
      experience: 'Expérience Professionnelle',
      skills: 'Compétences Techniques',
      education: 'Formation',
      languages: 'Langues',
      present: 'Actuellement',
      native: 'Natif',
      technical: 'Usage technique habituel'
    }
  };

  const t = translations[language];

  const experiences = {
    es: [
      {
        company: 'Mintt – Your Clients Connected',
        role: 'Head of AI Bot Development | Generative AI & Automation',
        period: 'Feb 2025 – Actualidad',
        bullets: [
          'Liderazgo técnico del departamento de IA, coordinando equipos y definiendo arquitecturas escalables de bots de voz/chat con WebRTC, STT/TTS y multi-tenant',
          'Colaboración transversal con ventas, soporte y operaciones para integrar soluciones con CRMs y sistemas enterprise',
          'Automatización de procesos críticos de negocio (facturación, operaciones) reduciendo tiempos y mejorando eficiencia operacional'
        ]
      },
      {
        company: 'Mintt – Your Clients Connected',
        role: 'AI Bot Developer | Generative AI & Automation',
        period: 'Jul 2024 – Ene 2025',
        bullets: [
          'Desarrollo de bots conversacionales con IA generativa integrando LLMs, STT/TTS y APIs empresariales',
          'Automatización de flujos complejos con Make y n8n para gestionar miles de interacciones diarias',
          'Integración con CRMs y sistemas de reservas para optimizar experiencia de cliente'
        ]
      },
      {
        company: 'Melit Technologies, S.L.',
        role: 'Desarrollador Web',
        period: 'Feb 2024 – Jun 2024',
        bullets: [
          'Desarrollo full-stack con Angular, JHipster y Spring Boot en aplicaciones empresariales',
          'Diseño de interfaces intuitivas y mejora de usabilidad en sistemas legacy'
        ]
      },
      {
        company: 'Vortex Dimensión Digital',
        role: 'Desarrollador Web (Prácticas)',
        period: 'Sep 2023 – Dic 2023',
        bullets: [
          'Desarrollo web con Laravel, PHP y JavaScript en proyectos reales',
          'Aprendizaje acelerado y trabajo en equipo en entorno ágil'
        ]
      }
    ],
    en: [
      {
        company: 'Mintt – Your Clients Connected',
        role: 'Head of AI Bot Development | Generative AI & Automation',
        period: 'Feb 2025 – Present',
        bullets: [
          'Technical leadership of AI department, coordinating teams and defining scalable voice/chat bot architectures with WebRTC, STT/TTS and multi-tenant systems',
          'Cross-functional collaboration with sales, support and operations to integrate solutions with CRMs and enterprise systems',
          'Automation of critical business processes (billing, operations) reducing time and improving operational efficiency'
        ]
      },
      {
        company: 'Mintt – Your Clients Connected',
        role: 'AI Bot Developer | Generative AI & Automation',
        period: 'Jul 2024 – Jan 2025',
        bullets: [
          'Development of conversational bots with generative AI integrating LLMs, STT/TTS and enterprise APIs',
          'Complex workflow automation with Make and n8n managing thousands of daily interactions',
          'Integration with CRMs and booking systems to optimize customer experience'
        ]
      },
      {
        company: 'Melit Technologies, S.L.',
        role: 'Web Developer',
        period: 'Feb 2024 – Jun 2024',
        bullets: [
          'Full-stack development with Angular, JHipster and Spring Boot in enterprise applications',
          'Design of intuitive interfaces and usability improvements in legacy systems'
        ]
      },
      {
        company: 'Vortex Dimensión Digital',
        role: 'Web Developer (Internship)',
        period: 'Sep 2023 – Dec 2023',
        bullets: [
          'Web development with Laravel, PHP and JavaScript on real projects',
          'Fast learning and teamwork in agile environment'
        ]
      }
    ],
    fr: [
      {
        company: 'Mintt – Your Clients Connected',
        role: 'Chef du Développement de Bots IA | IA Générative & Automatisation',
        period: 'Fév 2025 – Actuellement',
        bullets: [
          'Direction technique du département IA, coordination d\'équipes et définition d\'architectures scalables de bots vocaux/chat avec WebRTC, STT/TTS et multi-tenant',
          'Collaboration transversale avec ventes, support et opérations pour intégrer solutions avec CRMs et systèmes enterprise',
          'Automatisation de processus business critiques (facturation, opérations) réduisant temps et améliorant efficacité opérationnelle'
        ]
      },
      {
        company: 'Mintt – Your Clients Connected',
        role: 'Développeur de Bots IA | IA Générative & Automatisation',
        period: 'Jul 2024 – Jan 2025',
        bullets: [
          'Développement de bots conversationnels avec IA générative intégrant LLMs, STT/TTS et APIs enterprise',
          'Automatisation de flux complexes avec Make et n8n gérant milliers d\'interactions quotidiennes',
          'Intégration avec CRMs et systèmes de réservation pour optimiser expérience client'
        ]
      },
      {
        company: 'Melit Technologies, S.L.',
        role: 'Développeur Web',
        period: 'Fév 2024 – Jun 2024',
        bullets: [
          'Développement full-stack avec Angular, JHipster et Spring Boot dans applications enterprise',
          'Conception d\'interfaces intuitives et amélioration d\'usabilité dans systèmes legacy'
        ]
      },
      {
        company: 'Vortex Dimensión Digital',
        role: 'Développeur Web (Stage)',
        period: 'Sep 2023 – Déc 2023',
        bullets: [
          'Développement web avec Laravel, PHP et JavaScript sur projets réels',
          'Apprentissage accéléré et travail d\'équipe dans environnement agile'
        ]
      }
    ]
  };

  const profiles = {
    es: 'Full-Stack Engineer con especialización en IA generativa, bots conversacionales y automatización. Experiencia liderando equipos técnicos y diseñando arquitecturas escalables con WebRTC, APIs y sistemas en tiempo real. Visión transversal de producto, negocio y operaciones. Capacidad para tomar decisiones técnicas de alto impacto y colaborar con áreas no técnicas.',
    en: 'Full-Stack Engineer specialized in generative AI, conversational bots and automation. Experience leading technical teams and designing scalable architectures with WebRTC, APIs and real-time systems. Cross-functional product, business and operations vision. Ability to make high-impact technical decisions and collaborate with non-technical areas.',
    fr: 'Ingénieur Full-Stack spécialisé en IA générative, bots conversationnels et automatisation. Expérience dans la direction d\'équipes techniques et conception d\'architectures scalables avec WebRTC, APIs et systèmes temps réel. Vision transversale produit, business et opérations. Capacité à prendre décisions techniques à fort impact et collaborer avec domaines non techniques.'
  };

  cvContainer.innerHTML = `
    <div style="max-width: 794px; margin: 0 auto; background: white; color: #18181b;">
      <!-- Header -->
      <div style="display: flex; align-items: center; gap: 24px; margin-bottom: 32px; padding-bottom: 24px; border-bottom: 2px solid #3b82f6;">
        <img 
          src="https://i.ibb.co/pP7w3JC/foto.jpg" 
          alt="Daniel Fernández" 
          style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; border: 3px solid #3b82f6;"
        />
        <div style="flex: 1;">
          <h1 style="margin: 0 0 4px 0; font-size: 28px; font-weight: 700; color: #18181b;">Daniel Fernández Núñez</h1>
          <p style="margin: 0 0 12px 0; font-size: 15px; font-weight: 600; color: #3b82f6;">Full-Stack Engineer · Generative AI & Automation</p>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 11px; color: #52525b;">
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>📍</span>
              <span>Madrid, España</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>📧</span>
              <span>danifernandezjs@gmail.com</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px;">
              <span>📱</span>
              <span>+34 640 674 393</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Profile -->
      <div style="margin-bottom: 24px;">
        <h2 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 700; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.5px;">${t.profile}</h2>
        <p style="margin: 0; font-size: 11px; line-height: 1.5; color: #3f3f46;">${profiles[language]}</p>
      </div>

      <!-- Experience -->
      <div style="margin-bottom: 24px;">
        <h2 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 700; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.5px;">${t.experience}</h2>
        ${experiences[language].map((exp, idx) => `
          <div style="margin-bottom: ${idx < experiences[language].length - 1 ? '16px' : '0'};">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
              <h3 style="margin: 0; font-size: 12px; font-weight: 600; color: #18181b;">${exp.company}</h3>
              <span style="font-size: 10px; color: #71717a; white-space: nowrap;">${exp.period}</span>
            </div>
            <p style="margin: 0 0 6px 0; font-size: 11px; color: #3b82f6; font-weight: 500;">${exp.role}</p>
            <ul style="margin: 0; padding-left: 16px; font-size: 10px; line-height: 1.4; color: #52525b;">
              ${exp.bullets.map(bullet => `<li style="margin-bottom: 3px;">${bullet}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <!-- Skills -->
      <div style="margin-bottom: 24px;">
        <h2 style="margin: 0 0 10px 0; font-size: 14px; font-weight: 700; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.5px;">${t.skills}</h2>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; font-size: 10px;">
          <div>
            <p style="margin: 0 0 4px 0; font-weight: 600; color: #18181b;">Backend</p>
            <p style="margin: 0; color: #52525b; line-height: 1.4;">Node.js, TypeScript, Python, PHP, Laravel, Java, Spring, JHipster</p>
          </div>
          <div>
            <p style="margin: 0 0 4px 0; font-weight: 600; color: #18181b;">Frontend</p>
            <p style="margin: 0; color: #52525b; line-height: 1.4;">JavaScript, React, Angular, HTML, CSS</p>
          </div>
          <div>
            <p style="margin: 0 0 4px 0; font-weight: 600; color: #18181b;">Databases</p>
            <p style="margin: 0; color: #52525b; line-height: 1.4;">PostgreSQL, MySQL, MongoDB, MariaDB, Airtable</p>
          </div>
          <div>
            <p style="margin: 0 0 4px 0; font-weight: 600; color: #18181b;">AI & Automation</p>
            <p style="margin: 0; color: #52525b; line-height: 1.4;">Generative AI, Voice/Chat Bots, STT/TTS, Make, n8n</p>
          </div>
          <div>
            <p style="margin: 0 0 4px 0; font-weight: 600; color: #18181b;">Infra & Telecom</p>
            <p style="margin: 0; color: #52525b; line-height: 1.4;">WebRTC, APIs, CRMs, Multi-tenant, Servers, DNS, Google Workspace</p>
          </div>
        </div>
      </div>

      <!-- Education & Languages -->
      <div style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px;">
        <div>
          <h2 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 700; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.5px;">${t.education}</h2>
          <div style="font-size: 10px; color: #52525b; line-height: 1.5;">
            <p style="margin: 0 0 6px 0;"><strong style="color: #18181b;">Desarrollo de Aplicaciones Web (DAW)</strong></p>
            <p style="margin: 0 0 6px 0;"><strong style="color: #18181b;">Bootcamp Full-Stack</strong> – The Bridge</p>
            <p style="margin: 0;"><strong style="color: #18181b;">Bachillerato</strong></p>
          </div>
        </div>
        <div>
          <h2 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 700; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.5px;">${t.languages}</h2>
          <div style="font-size: 10px; color: #52525b; line-height: 1.5;">
            <p style="margin: 0 0 4px 0;"><strong style="color: #18181b;">Español</strong> – ${t.native}</p>
            <p style="margin: 0 0 4px 0;"><strong style="color: #18181b;">Inglés</strong> – B1 (${t.technical})</p>
            <p style="margin: 0;"><strong style="color: #18181b;">Francés</strong> – B2</p>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(cvContainer);

  try {
    const canvas = await html2canvas(cvContainer, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`Daniel_Fernandez_CV_${language.toUpperCase()}.pdf`);
  } finally {
    document.body.removeChild(cvContainer);
  }
};

export default { generateCV };