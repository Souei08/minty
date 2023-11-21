// Screens
import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';

// Imports
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import DashboardScreen from './app/screens/DashboardScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createNativeStackNavigator();

  const fontKeys = {
    PoppinsThin: 'PoppinsThin',
    PoppinsRegular: 'PoppinsRegular',
    PoppinsSemiBold: 'PoppinsSemiBold',
    PoppinsBold: 'PoppinsBold',
  };

  const [fontsLoaded, fontError] = useFonts({
    [fontKeys.PoppinsThin]: require('./assets/fonts/Poppins-Thin.ttf'),
    [fontKeys.PoppinsRegular]: require('./assets/fonts/Poppins-Regular.ttf'),
    [fontKeys.PoppinsSemiBold]: require('./assets/fonts/Poppins-SemiBold.ttf'),
    [fontKeys.PoppinsBold]: require('./assets/fonts/Poppins-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => (
            <HomeScreen {...props} onLayoutRootView={onLayoutRootView} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => (
            <LoginScreen {...props} onLayoutRootView={onLayoutRootView} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Dashboard" options={{ headerShown: false }}>
          {(props) => (
            <DashboardScreen {...props} onLayoutRootView={onLayoutRootView} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
