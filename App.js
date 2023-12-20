// Welcome Screens
import WelcomeScreen from './app/screens/auth/WelcomeScreen';
import LoginScreen from './app/screens/auth/LoginScreen';

// Auth Screens
import DashboardScreen from './app/screens/dashboard/DashboardScreen';
import CartScreen from './app/screens/dashboard/CartScreen';
import AccountScreen from './app/screens/dashboard/AccountScreen';
import ProductDetailScreen from './app/screens/dashboard/ProductDetails';

// Imports
import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useCallback, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Api's
import authApi from './api/auth/auth.api';

// UseContext
import { AuthProvider, useAuth } from './context/AuthContext';
import ThankYouScreen from './app/screens/dashboard/ThankYouScreen';

function HomeTabs({ onLayoutRootView }) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/images/bottomTabsIcons/homeIcon.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      >
        {(props) => (
          <DashboardScreen {...props} onLayoutRootView={onLayoutRootView} />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./assets/images/bottomTabsIcons/cartIcon.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      >
        {(props) => (
          <CartScreen {...props} onLayoutRootView={onLayoutRootView} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function AppContext() {
  const { isAuthenticated, login, logout } = useAuth();

  const Stack = createNativeStackNavigator();
  SplashScreen.preventAutoHideAsync();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userAuthenticated] = await Promise.all([
          authApi.isAuthenticated(),
        ]);

        // console.log(loginUser);
        if (userAuthenticated) {
          login();
        } else {
          logout();
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
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
      {!isAuthenticated ? (
        <Stack.Navigator>
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
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="HomeTabs" options={{ headerShown: false }}>
            {(props) => (
              <HomeTabs {...props} onLayoutRootView={onLayoutRootView} />
            )}
          </Stack.Screen>
          <Stack.Screen name="ProductDetails" options={{ headerShown: false }}>
            {(props) => (
              <ProductDetailScreen
                {...props}
                onLayoutRootView={onLayoutRootView}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="ThankYouScreen" options={{ headerShown: false }}>
            {(props) => (
              <ThankYouScreen {...props} onLayoutRootView={onLayoutRootView} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const App = () => (
  <AuthProvider>
    <AppContext />
  </AuthProvider>
);

export default App;
