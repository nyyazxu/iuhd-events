import React, {useEffect, useState} from 'react';
import {Box, VStack, PresenceTransition, Spinner} from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import {NativeBaseProvider, StatusBar} from 'native-base';
import Main from './src/screens/Main';
import theme from './src/theme';
import Event from './src/screens/Event';
import IUHD from './src/svgs/IUHD';

const Stack = createStackNavigator();

const App = () => {
  const [splash, setSplash] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSplash(false);
    }, 1200);
    () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        {splash && (
          <Box
            position="absolute"
            w="full"
            top={0}
            bottom={0}
            left={0}
            right={0}
            zIndex={100}>
            <PresenceTransition
              visible={true}
              initial={{
                opacity: 1,
              }}
              animate={{
                opacity: 0,
                transition: {
                  duration: 200,
                  delay: 500,
                },
              }}>
              <VStack
                w="full"
                h="full"
                alignItems="center"
                justifyContent="center"
                bgColor="black"
                space={8}>
                <IUHD large />
                <Spinner color="white" />
              </VStack>
            </PresenceTransition>
          </Box>
        )}
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Welcome"
            component={Welcome}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="MainNavigator"
            component={Main}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Event"
            component={Event}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
