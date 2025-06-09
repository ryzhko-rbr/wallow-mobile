import { useTheme } from '@/src/hooks';
import type { FC } from 'react';
import { Button } from 'react-native-paper';

export const ToggleTheme: FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <Button icon="repeat" mode="outlined" onPress={toggleTheme}>
      Toggle Theme
    </Button>
  );
};
