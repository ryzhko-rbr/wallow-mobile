import { AppTheme } from '@/src/constants';
import { useTheme } from 'react-native-paper';

export const useAppTheme = () => useTheme<AppTheme>();
