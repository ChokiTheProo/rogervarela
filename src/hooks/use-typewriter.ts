import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  loop?: boolean;
}

export function useTypewriter({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  loop = true,
}: UseTypewriterOptions) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[currentWordIndex];
    
    if (isWaiting) return;

    if (!isDeleting) {
      // Typing
      if (currentText.length < currentWord.length) {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      } else {
        // Finished typing, wait before deleting
        setIsWaiting(true);
        setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        setCurrentText(currentText.substring(0, currentText.length - 1));
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        if (loop || currentWordIndex < words.length - 1) {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }
  }, [currentText, currentWordIndex, isDeleting, isWaiting, words, delayBetweenWords, loop]);

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typeSpeed, deleteSpeed]);

  // Reset when words change (e.g., language change)
  useEffect(() => {
    setCurrentWordIndex(0);
    setCurrentText('');
    setIsDeleting(false);
    setIsWaiting(false);
  }, [words]);

  return {
    text: currentText,
    isTyping: !isDeleting && currentText.length < words[currentWordIndex]?.length,
    isDeleting,
    currentWordIndex,
  };
}
