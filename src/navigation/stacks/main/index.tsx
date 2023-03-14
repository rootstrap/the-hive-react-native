import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from 'features/account/screen';
import ChatsScreen from 'features/chats/screen';
import ConnectionsScreen from 'features/connections/screen';
import HomeScreen from 'features/home/screen';

import { MainStackParamList } from 'navigation/types';

const Tab = createBottomTabNavigator<MainStackParamList>();

const MainTabNav = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Chats" component={ChatsScreen} />
    <Tab.Screen name="Connections" component={ConnectionsScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

export default MainTabNav;
