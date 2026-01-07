import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const FloatingWhatsApp = () => {
  const { language } = useLanguage();

  const tooltip = {
    pt: 'Falar no WhatsApp',
    en: 'Chat on WhatsApp',
    es: 'Hablar por WhatsApp'
  };

  return (
    <motion.a
      href="https://wa.me/5554991710543"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Tooltip - hidden on mobile */}
      <span className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-background/95 backdrop-blur-sm border border-border text-foreground text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
        {tooltip[language]}
      </span>

      {/* Pulse rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]/30"
        animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]/20"
        animate={{ scale: [1, 1.8, 1.8], opacity: [0.3, 0, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />

      {/* Button */}
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-shadow duration-300">
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/25 to-transparent"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <MessageCircle className="w-8 h-8 text-white drop-shadow-md" />
        </motion.div>
      </div>
    </motion.a>
  );
};
