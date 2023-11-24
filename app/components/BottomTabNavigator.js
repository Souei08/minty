// Imports
import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import CartScreen from '../screens/dashboard/CartScreen';
import FavoriteScreen from '../screens/dashboard/FavoriteScreen';
import AccountScreen from '../screens/dashboard/AccountScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{ headerShown: false }}
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({ color, size }) => (
        //     <Image
        //       source={require('../../assets/images/icons/icon.png')}
        //       style={{ width: size, height: size, tintColor: color }}
        //     />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}
        // options={{
        //   tabBarLabel: 'Cart',
        //   tabBarIcon: ({ color, size }) => (
        //     <Image
        //       source={require('../../assets/images/icons/icon.png')}
        //       style={{ width: size, height: size, tintColor: color }}
        //     />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{ headerShown: false }}
        // options={{
        //   tabBarLabel: 'Favorite',
        //   tabBarIcon: ({ color, size }) => (
        //     <Image
        //       source={require('../../assets/images/icons/icon.png')}
        //       style={{ width: size, height: size, tintColor: color }}
        //     />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
        // options={{
        //   tabBarLabel: 'Account',
        //   tabBarIcon: ({ color, size }) => (
        //     <Image
        //       source={require('../../assets/images/icons/icon.png')}
        //       style={{ width: size, height: size, tintColor: color }}
        //     />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
}
