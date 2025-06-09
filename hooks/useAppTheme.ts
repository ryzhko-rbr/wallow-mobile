import { AppTheme } from '@/constants';
import { useTheme } from 'react-native-paper';

export const useAppTheme = () => useTheme<AppTheme>();
