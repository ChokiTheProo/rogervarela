import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Database, GraduationCap, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const skillGroups = {
  pt: [
    { title: 'Front-end', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'shadcn/ui'] },
    { title: 'Back-end e dados', items: ['Node.js', 'PHP', 'PostgreSQL', 'MySQL', 'Supabase'] },
    { title: 'Mobile', items: ['Flutter', 'Dart', 'Kotlin'] },
    { title: 'Ferramentas e IA', items: ['Git', 'GitHub', 'Lovable', 'IA Generativa (Claude, ChatGPT)', 'Low-Code', 'APIs REST', 'Webhooks'] },
    { title: 'Infra e suporte', items: ['Linux', 'Windows Server', 'Networking TCP/IP', 'ERP', 'HelpDesk N1', 'IoT (Arduino)'] },
  ],
  en: [
    { title: 'Front-end', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'shadcn/ui'] },
    { title: 'Back-end & data', items: ['Node.js', 'PHP', 'PostgreSQL', 'MySQL', 'Supabase'] },
    { title: 'Mobile', items: ['Flutter', 'Dart', 'Kotlin'] },
    { title: 'Tools & AI', items: ['Git', 'GitHub', 'Lovable', 'Generative AI (Claude, ChatGPT)', 'Low-Code', 'REST APIs', 'Webhooks'] },
    { title: 'Infra & support', items: ['Linux', 'Windows Server', 'Networking TCP/IP', 'ERP', 'HelpDesk N1', 'IoT (Arduino)'] },
  ],
  es: [
    { title: 'Front-end', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'shadcn/ui'] },
    { title: 'Back-end y datos', items: ['Node.js', 'PHP', 'PostgreSQL', 'MySQL', 'Supabase'] },
    { title: 'Mobile', items: ['Flutter', 'Dart', 'Kotlin'] },
    { title: 'Herramientas e IA', items: ['Git', 'GitHub', 'Lovable', 'IA Generativa (Claude, ChatGPT)', 'Low-Code', 'APIs REST', 'Webhooks'] },
    { title: 'Infra y soporte', items: ['Linux', 'Windows Server', 'Networking TCP/IP', 'ERP', 'HelpDesk N1', 'IoT (Arduino)'] },
  ],
};

const softSkillsWithProof = {
  pt: [
    { icon: Rocket, title: 'Execução solo', proof: 'Lancei 7 SaaS próprios em 2026, sem time.' },
    { icon: Database, title: 'Resolução técnica em ambiente real', proof: 'SQL diário em ERP fiscal na Windel desde 2025.' },
    { icon: GraduationCap, title: 'Aprendizado contínuo', proof: '1000h no Técnico em Informática + Análise e Desenvolvimento de Sistemas em curso.' },
    { icon: Target, title: 'Mentalidade de produto', proof: 'Cada projeto entregue com modelo de monetização definido (assinatura, vitalício, freemium).' },
  ],
  en: [
    { icon: Rocket, title: 'Solo execution', proof: 'Shipped 7 of my own SaaS in 2026, no team.' },
    { icon: Database, title: 'Real-world technical problem solving', proof: 'Daily SQL on a fiscal ERP at Windel since 2025.' },
    { icon: GraduationCap, title: 'Continuous learning', proof: '1000h technical degree + Systems Analysis & Development in progress.' },
    { icon: Target, title: 'Product mindset', proof: 'Every project delivered with a defined monetization model (subscription, lifetime, freemium).' },
  ],
  es: [
    { icon: Rocket, title: 'Ejecución solo', proof: 'Lancé 7 SaaS propios en 2026, sin equipo.' },
    { icon: Database, title: 'Resolución técnica en entorno real', proof: 'SQL diario en ERP fiscal en Windel desde 2025.' },
    { icon: GraduationCap, title: 'Aprendizaje continuo', proof: '1000h Técnico en Informática + Análisis y Desarrollo de Sistemas en curso.' },
    { icon: Target, title: 'Mentalidad de producto', proof: 'Cada proyecto entregado con modelo de monetización definido (suscripción, vitalicio, freemium).' },
  ],
};

const languageLabels = {
  pt: { title: 'Idiomas', native: 'Português (Nativo)', english: 'Inglês (B1 — intermediário)' },
  en: { title: 'Languages', native: 'Portuguese (Native)', english: 'English (B1 — intermediate)' },
  es: { title: 'Idiomas', native: 'Portugués (Nativo)', english: 'Inglés (B1 — intermedio)' },
};

export function SkillsSection() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isMobile = useIsMobile();

  const groups = skillGroups[language];
  const softs = softSkillsWithProof[language];
  const langs = languageLabels[language];

  return (
    <section id="skills" className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute right-0 top-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="section-title mb-4">
            <span className="text-gradient">{t('skills.title')}</span>
          </h2>
          <p className="section-subtitle mx-auto text-sm md:text-base px-2">{t('skills.subtitle')}</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Hard Skills grouped */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold text-lg md:text-xl text-foreground mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-primary" />
              {t('skills.hard')}
            </h3>

            <div className="space-y-5">
              {groups.map((group, gi) => (
                <motion.div
                  key={gi}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + gi * 0.08 }}
                >
                  <h4 className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2.5">
                    {group.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item, ii) => (
                      <span
                        key={ii}
                        className="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium bg-secondary/60 border border-border/50 text-foreground hover:border-primary/50 hover:bg-secondary/80 transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills with proof + Languages */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-heading font-semibold text-lg md:text-xl text-foreground mb-5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              {t('skills.soft')}
            </h3>

            <div className="space-y-3 mb-8">
              {softs.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-3 md:gap-4 p-4 rounded-xl bg-card/50 border border-border/40 hover:border-primary/40 hover:bg-card/70 transition-all"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md ring-1 ring-white/20">
                      <Icon className="w-5 h-5 text-white" strokeWidth={2.2} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-heading font-semibold text-sm md:text-base text-foreground mb-1">
                        {s.title}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {s.proof}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Languages */}
            <h3 className="font-heading font-semibold text-lg md:text-xl text-foreground mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              {langs.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                {langs.native}
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs md:text-sm font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                {langs.english}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
