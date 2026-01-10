import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Video } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  const { language } = useLanguage();

  // Placeholder content when no video is set
  const hasVideo = !!videoUrl;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-gradient-card border border-border/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white/80 hover:text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {hasVideo ? (
              // Video iframe (YouTube, Vimeo, etc.)
              <iframe
                src={videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Apresentação pessoal"
              />
            ) : (
              // Placeholder when no video is configured
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-background via-secondary/50 to-background">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="relative mb-6"
                >
                  {/* Animated rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  
                  <div className="relative p-6 rounded-full bg-gradient-to-br from-primary to-accent">
                    <Video className="w-12 h-12 text-white" />
                  </div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3"
                >
                  {language === 'pt' 
                    ? 'Vídeo em Breve!' 
                    : language === 'es' 
                      ? '¡Video Próximamente!' 
                      : 'Video Coming Soon!'}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground text-center max-w-md px-4"
                >
                  {language === 'pt' 
                    ? 'Estou preparando uma apresentação especial para você conhecer melhor meu trabalho e minha trajetória.'
                    : language === 'es'
                      ? 'Estoy preparando una presentación especial para que conozcas mejor mi trabajo y mi trayectoria.'
                      : 'I am preparing a special presentation for you to better know my work and journey.'}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 flex items-center gap-2 text-sm text-primary"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Play className="w-4 h-4 fill-primary" />
                  </motion.div>
                  <span className="font-medium">
                    {language === 'pt' ? 'Fique ligado!' : language === 'es' ? '¡Mantente atento!' : 'Stay tuned!'}
                  </span>
                </motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
