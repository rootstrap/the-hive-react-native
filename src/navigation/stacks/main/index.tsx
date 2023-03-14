import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

import strings from 'localization';

import { IconName } from 'design-system/components/Input/types';
import { TabBarIcon } from 'design-system/components/TabBarIcon';

import AccountScreen from 'features/account/screen';
import ChatsScreen from 'features/chats/screen';
import ConnectionsScreen from 'features/connections/screen';
import HomeScreen from 'features/home/screen';

import { MainStackParamList } from 'navigation/types';

const Tab = createBottomTabNavigator<MainStackParamList>();

const TAB_LABELS = {
  Home: strings.MAIN_TAB_NAV.tabLabel.home,
  Chats: strings.MAIN_TAB_NAV.tabLabel.chats,
  Connections: strings.MAIN_TAB_NAV.tabLabel.connections,
  Account: strings.MAIN_TAB_NAV.tabLabel.account,
};

const TAB_ICONS = {
  Home: 'discovery',
  Chats: 'chat',
  Connections: 'user-add',
};

const MainTabNav = () => {
  const { bottom } = useSafeAreaInsets();

  const screenOptions = ({ route: { name } }: { route: RouteProp<MainStackParamList> }) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      height: bottom + 66,
    },

    tabBarIcon: ({ focused }: { focused: boolean; size: number }) => (
      <TabBarIcon
        iconName={TAB_ICONS[name as keyof typeof TAB_ICONS] as IconName}
        label={TAB_LABELS[name as keyof typeof TAB_LABELS]}
        focused={focused}
      />
    ),
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Connections" component={ConnectionsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNav;
