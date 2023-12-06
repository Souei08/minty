// Imports
import { Platform } from 'react-native';

const calculateTabBarHeight = () => {
  return Platform.OS === 'ios' ? 100 : 70;
};

export { calculateTabBarHeight };
