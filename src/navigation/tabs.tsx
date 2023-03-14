import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from 'features/account/screen';
import ChatsScreen from 'features/chats/screen';
import ConnectionsScreen from 'features/connections/screen';
import HomeScreen from 'features/home/screen';

import NavigationParamList from 'navigation/types/navigation-param-list';
import Screens from 'navigation/types/screens';

const Tab = createBottomTabNavigator<NavigationParamList>();

const MainTabNav = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        headerShown: false,
      }}
      name={Screens.HOME}
      component={HomeScreen}
    />
    <Tab.Screen name={Screens.CHATS} component={ChatsScreen} />
    <Tab.Screen name={Screens.CONNECTIONS} component={ConnectionsScreen} />
    <Tab.Screen name={Screens.ACCOUNT} component={AccountScreen} />
  </Tab.Navigator>
);

export default MainTabNav;
