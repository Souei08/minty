// Imports
import * as React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen
        name="Home"
       
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({ color, size }) => (
        //     <Image
        //       source={require('../../assets/images/icons/icon.png')}
        //       style={{ width: size, height: size, tintColor: color }}
        //     />
        //   ),
        // }}
      /> */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
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
