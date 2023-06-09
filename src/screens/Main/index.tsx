import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Home from './Home';
import Profile from './Profile';
import BottomTab from '../../components/BottomTab';

const Tab = createBottomTabNavigator();

const Main = () => {
  const customTabBar = (props: BottomTabBarProps) => <BottomTab {...props} />;

  return (
    <Tab.Navigator tabBar={customTabBar}>
      <Tab.Screen
        options={{
          title: 'Events'
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          title: 'My Profile',
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default Main;
