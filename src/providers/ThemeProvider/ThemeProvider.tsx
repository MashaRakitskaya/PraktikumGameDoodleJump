import React, { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {}
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const getCacheTheme = async () => {
    const cacheStorage = await caches.open('isDarkTheme');

    const cachedResponse = await cacheStorage.match('http://localhost:3000');
    const isDarkThemeChache = await cachedResponse?.json();

    if (isDarkThemeChache) {
      setDarkTheme(isDarkThemeChache.isDarkTheme);
    }
  };

  const addDataIntoCache = (cacheName: string, url: string, response: any) => {
    const data = new Response(JSON.stringify(response));

    if ('caches' in window) {
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
      });
    }
  };

  const toggleTheme = () => {
    setDarkTheme(!isDarkTheme);
    addDataIntoCache('isDarkTheme', 'http://localhost:3000', {
      isDarkTheme: !isDarkTheme
    });
  };

  useEffect(() => {
    getCacheTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
