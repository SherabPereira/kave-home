import { useState, useEffect } from 'react';

export default function useScreenSize(size: 's' | 'm' | 'l' = 'l') {
  const [matches, setMatches] = useState(false);
  let query;

  switch(size) {
    case 's': // Mobile
      query = '(max-width: 767px)';
      break;
    case 'm': // Tablet
      query = '(min-width: 768px) and (max-width: 1023px)';
      break;
    case 'l': // Desktop
      query = '(min-width: 1024px)';
      break;
    default:
      query = '(min-width: 1024px)';
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mediaQuery.addEventListener('change', handleResize);
    
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [query]);

  return matches;
}
