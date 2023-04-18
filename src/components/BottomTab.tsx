import React from 'react';
import {Box, HStack} from 'native-base';
import NavButton from './NavButton';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Compass from '../svgs/Compass';
import User from '../svgs/User';

const ICONS = [<Compass />, <User />];

const BottomTab = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <Box safeAreaBottom position="absolute" bottom={0} w="full">
      <HStack
        px={8}
        w="210px"
        bottom={4}
        bg="white"
        alignSelf="center"
        alignItems="center"
        justifyContent="space-evenly"
        borderWidth="1px"
        borderColor="#ECECEC"
        shadow={5}
        borderRadius={16}>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true, params: []});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <NavButton
              key={label}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              isFocused={isFocused}
              icon={ICONS[index]}
              options={options}
            />
          );
        })}
      </HStack>
    </Box>
  );
};

export default BottomTab;
