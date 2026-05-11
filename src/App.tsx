import { useState, useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ContrastProvider } from "@/contexts/ContrastContext";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AnimatedRoutes } from "@/components/AnimatedRoutes";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

// Create query client outside component to prevent recreation
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading once the window has finished loading; fast cap at 800ms
    const cap = setTimeout(() => setIsLoading(false), 800);
    const onLoad = () => {
      clearTimeout(cap);
      setIsLoading(false);
    };
    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad, { once: true });
    }
    return () => {
      clearTimeout(cap);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <ContrastProvider>
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            <TooltipProvider delayDuration={100}>
              <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen key="loading" />}
              </AnimatePresence>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <AnimatedRoutes />
                <FloatingWhatsApp />
              </BrowserRouter>
            </TooltipProvider>
          </LanguageProvider>
        </QueryClientProvider>
      </ContrastProvider>
    </ThemeProvider>
  );
};

export default App;
