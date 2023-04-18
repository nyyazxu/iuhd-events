import React from 'react';
import {Box, Circle, PresenceTransition, Pressable} from 'native-base';

interface NavButtonProps {
  selected: number;
  onPress: any;
  onLongPress: any;
  icon: any;
  isFocused: boolean;
  options: any;
  testID: string | undefined;
}

const NavButton = ({
  isFocused,
  onPress,
  icon,
  options,
  testID,
  onLongPress,
}: NavButtonProps) => {
  return (
    <Pressable
      flex={1}
      height={60}
      alignItems="center"
      justifyContent="center"
      testID={testID}
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      opacity={isFocused ? 1 : 0.5}
      onPress={onPress}
      onLongPress={onLongPress}>
      {icon}
      <Box position="absolute" bottom={1.5}>
        <PresenceTransition
          visible={isFocused}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 200,
            },
          }}>
          <Circle bgColor="primary.500" w="6px" h="6px" />
        </PresenceTransition>
      </Box>
    </Pressable>
  );
};

NavButton.defaultProps = {
  id: 0,
  title: '',
  selected: 0,
  isFocused: false,
  icon: null,
};

export default NavButton;
