import { Platform } from 'react-native';

const calculateTabBarHeight = () => {
  return Platform.OS === 'ios' ? 100 : 70;
};

const someOtherFunction = () => {
  // some other logic
};

export { calculateTabBarHeight, someOtherFunction };
