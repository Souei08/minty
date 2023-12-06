// Screens
import BottomTabNavigator from './app/components/BottomTabNavigator';
import WelcomeScreen from './app/screens/auth/WelcomeScreen';
import LoginScreen from './app/screens/auth/LoginScreen';

// Imports
import { useCallback, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Api's
import authApi from './api/auth/auth.api';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createNativeStackNavigator();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const userAuthenticated = await authApi.isAuthenticated();
      setIsAuthenticated(userAuthenticated);
    };

    checkAuthentication();
  }, []);

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
      <Stack.Navigator
        initialRouteName={isAuthenticated ? 'Dashboard' : 'Home'}
      >
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => (
            <WelcomeScreen {...props} onLayoutRootView={onLayoutRootView} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Login" options={{ headerShown: false }}>
          {(props) => (
            <LoginScreen {...props} onLayoutRootView={onLayoutRootView} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Dashboard" options={{ headerShown: false }}>
          {(props) => {
            if (isAuthenticated) {
              return (
                <BottomTabNavigator
                  {...props}
                  onLayoutRootView={onLayoutRootView}
                />
              );
            } else {
              return (
                <Stack.Screen
                  name="Login"
                  options={{ headerShown: false }}
                  component={(props) => (
                    <LoginScreen
                      {...props}
                      onLayoutRootView={onLayoutRootView}
                    />
                  )}
                />
              );
            }
          }}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
