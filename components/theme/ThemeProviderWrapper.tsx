import { useMemo, type FC, type PropsWithChildren } from 'react';

import { useTheme } from '@/hooks';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import merge from 'deepmerge';
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  adaptNavigationTheme,
} from 'react-native-paper';

const customDarkTheme = { ...MD3DarkTheme };
const customLightTheme = { ...MD3LightTheme };

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(LightTheme, customLightTheme);
const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);

type Props = Required<PropsWithChildren>;

export const ThemeProviderWrapper: FC<Props> = ({ children }) => {
  const { colorScheme } = useTheme();

  const paperTheme = useMemo(
    () => (colorScheme === 'dark' ? CombinedDarkTheme : CombinedDefaultTheme),
    [colorScheme],
  );

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider value={paperTheme}>{children}</ThemeProvider>
    </PaperProvider>
  );
};
