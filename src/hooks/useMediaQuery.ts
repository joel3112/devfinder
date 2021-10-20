import { useState, useEffect } from 'react';

type UseMediaQueryHook = (mediaQuery: string) => boolean;

export const useMediaQuery: UseMediaQueryHook = (mediaQuery: string) => {
  const [matches, setMatches] = useState<boolean>(false);
  const query = mediaQuery.split('@media').reverse()[0];

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};
