import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Home from '../screens/Home';
import { colors } from '../global/Styles';
import Search from '../screens/Search/Search';
import MyOrders from '../screens/MyOrders';
import Myaccount from '../screens/Myaccount';

const Tab = createBottomTabNavigator();

const ClientTab = () => {
  return (
    <Tab.Navigator
    // screenOptions={{ tabBarStyle: { backgroundColor: colors.buttons } }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon name='home' type='material' color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarLabel: 'Search',
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <Icon name='search' type='material' color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name='MyOrdersScreen'
        component={MyOrders}
        options={{
          tabBarLabel: 'My Orders',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name='view-list' type='material' color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name='MyAccount'
        component={Myaccount}
        options={{
          tabBarLabel: 'My Account',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name='person' type='material' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ClientTab;
