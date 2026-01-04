import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ContrastContextType {
  highContrast: boolean;
  toggleContrast: () => void;
}

const ContrastContext = createContext<ContrastContextType | undefined>(undefined);

export function ContrastProvider({ children }: { children: ReactNode }) {
  const [highContrast, setHighContrast] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('high-contrast') === 'true';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) {
      root.classList.add('high-contrast');
      localStorage.setItem('high-contrast', 'true');
    } else {
      root.classList.remove('high-contrast');
      localStorage.setItem('high-contrast', 'false');
    }
  }, [highContrast]);

  const toggleContrast = () => setHighContrast(prev => !prev);

  return (
    <ContrastContext.Provider value={{ highContrast, toggleContrast }}>
      {children}
    </ContrastContext.Provider>
  );
}

export function useContrast() {
  const context = useContext(ContrastContext);
  if (!context) {
    throw new Error('useContrast must be used within a ContrastProvider');
  }
  return context;
}
