import { useGlobalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

type ColorSchemas = 'dark' | 'light';

export const useTheme = () => {
  const router = useRouter();
  const { colorScheme: globalColorScheme }: { colorScheme: ColorSchemas } =
    useGlobalSearchParams();
  const [localColorScheme, setLocalColorScheme] = useState<ColorSchemas>(
    globalColorScheme || 'dark',
  );

  useEffect(() => {
    if (globalColorScheme && globalColorScheme !== localColorScheme) {
      setLocalColorScheme(globalColorScheme);
    }
  }, [globalColorScheme, localColorScheme]);

  const toggleTheme = () => {
    const newScheme = localColorScheme === 'light' ? 'dark' : 'light';
    setLocalColorScheme(newScheme);
    router.setParams({ colorScheme: newScheme });
  };

  return { toggleTheme, colorScheme: localColorScheme };
};
