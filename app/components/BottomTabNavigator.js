// Imports
import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import CartScreen from '../screens/dashboard/CartScreen';
import AccountScreen from '../screens/dashboard/AccountScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/bottomTabsIcons/homeIcon.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/bottomTabsIcons/cartIcon.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/bottomTabsIcons/cartIcon.png')}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
