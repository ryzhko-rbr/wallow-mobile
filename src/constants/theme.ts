import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import merge from 'deepmerge';
import {
  MD3DarkTheme,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';

const customDarkTheme = { ...MD3DarkTheme };
const customLightTheme = { ...MD3LightTheme };

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

export const CombinedDefaultTheme = merge(LightTheme, customLightTheme);
export const CombinedDarkTheme = merge(DarkTheme, customDarkTheme);

export type AppTheme = typeof CombinedDefaultTheme;
