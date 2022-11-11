import React, { createContext, useEffect, useState } from 'react';
import { useFetchUserQuery } from '../../services/auth';
import { fetchUpdateUserTheme } from '../../utils/api/api';

export const ThemeContext = createContext({
  clientTheme: 'light',
  toggleTheme: () => {}
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const themeLight = 'light';
  const themeDark = 'dark';
  const [isTheme, setTheme] = useState<string>(themeLight);
  const { data: user } = useFetchUserQuery();

  const getCacheTheme = async () => {
    const cacheStorage = await caches.open('isTheme');

    const cachedResponse = await cacheStorage.match('http://localhost:3000');
    const themeChache = await cachedResponse?.json();

    if (themeChache) {
      setTheme(themeChache.nameTheme);
    }
  };

  const addThemeToCache = ({
    cacheName,
    url,
    response
  }: {
    cacheName: string;
    url: string;
    response: any;
  }) => {
    const data = new Response(JSON.stringify(response));

    if ('caches' in window) {
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
      });
    }
  };

  const setThemeAndAddThemeToCache = (theme: string) => {
    setTheme(theme);
    addThemeToCache({
      cacheName: 'isTheme',
      url: 'http://localhost:3000',
      response: { nameTheme: theme }
    });
  };

  const toggleTheme = () => {
    if (isTheme === themeLight) {
      setThemeAndAddThemeToCache(themeDark);
      user && fetchUpdateUserTheme({ userId: user.id, theme: themeDark });
    } else {
      setThemeAndAddThemeToCache(themeLight);
      user && fetchUpdateUserTheme({ userId: user.id, theme: themeLight });
    }
  };

  useEffect(() => {
    getCacheTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ clientTheme: isTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
