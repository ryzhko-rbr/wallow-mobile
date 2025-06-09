import { useMemo, type FC, type PropsWithChildren } from 'react';

import { ThemeProvider } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

import { CombinedDarkTheme, CombinedDefaultTheme } from '@/src/constants';
import { useTheme } from '@/src/hooks';

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
