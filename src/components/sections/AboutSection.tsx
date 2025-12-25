import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { BookOpen, Target, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ImageZoom } from '@/components/ui/image-zoom';

const highlights = [
  { icon: BookOpen, titleKey: 'about.highlight1.title', descKey: 'about.highlight1.desc' },
  { icon: Target, titleKey: 'about.highlight2.title', descKey: 'about.highlight2.desc' },
  { icon: Users, titleKey: 'about.highlight3.title', descKey: 'about.highlight3.desc' },
];

export function AboutSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="section-title mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gradient">{t('about.title')}</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px' }}
          >
            <motion.div 
              className="relative w-80 h-80 mx-auto"
              animate={{
                rotateY: mousePosition.x,
                rotateX: -mousePosition.y,
              }}
              transition={{ type: 'spring', stiffness: 100, damping: 15 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* 3D Shadow Layers */}
              <motion.div 
                className="absolute inset-0 bg-gradient-primary rounded-2xl"
                style={{ transform: 'translateZ(-60px) rotateZ(12deg)', opacity: 0.1 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-primary rounded-2xl"
                style={{ transform: 'translateZ(-40px) rotateZ(8deg)', opacity: 0.15 }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-primary rounded-2xl"
                style={{ transform: 'translateZ(-20px) rotateZ(4deg)', opacity: 0.2 }}
              />
              
              {/* Main Image Container */}
              <div 
                className="absolute inset-0 bg-gradient-card rounded-2xl border border-border overflow-hidden"
                style={{ 
                  transform: 'translateZ(0px)',
                  boxShadow: '0 25px 50px -12px hsl(var(--primary) / 0.25)'
                }}
              >
                <ImageZoom
                  src="https://avatars.githubusercontent.com/u/119018632?v=4"
                  alt="Roger Varela"
                  className="w-full h-full"
                />
              </div>
              
              {/* Floating Glow Effects */}
              <motion.div 
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/30 rounded-full blur-2xl"
                style={{ transform: 'translateZ(30px)' }}
              />
              <motion.div 
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl"
                style={{ transform: 'translateZ(30px)' }}
              />

              {/* Floating Particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: `${-10 + i * 25}%`,
                    transform: 'translateZ(40px)',
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    x: [-5, 5, -5],
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              {t('about.description')}
            </motion.p>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, rotateX: -15 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 10,
                    boxShadow: '0 10px 40px -10px hsl(var(--primary) / 0.3)'
                  }}
                  className="flex gap-4 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                  style={{ perspective: '1000px' }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center"
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t(item.descKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
