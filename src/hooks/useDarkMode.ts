import { useState, useEffect } from 'react';

type UseDarkMode = [
  darkMode: boolean,
  handleDarkMode: () => void,
];

type UseDarkModeHook = () => UseDarkMode;

export const useDarkMode: UseDarkModeHook = () => {
  const [darkMode, setDarkMode] = useState<boolean>(JSON.parse(localStorage.getItem('darkMode') as string));

  useEffect(() => {
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  const handleDarkMode = () => setDarkMode((prev) => !prev);

  return [darkMode, handleDarkMode];
};
