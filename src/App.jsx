import Card from './components/Card';
import ThemeBtn from './components/ThemeBtn';
import { ThemeContextProvider } from './contexts/theme';
import { useEffect, useState } from 'react';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light');
  };

  const darkTheme = () => {
    setThemeMode('dark');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className='flex flex-wrap min-h-screen items-center dark:bg-sky-950 dark:border-sky-950'>
        <div className='w-full'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            <ThemeBtn />
          </div>
          <div className='w-full max-w-sm mx-auto'>
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
