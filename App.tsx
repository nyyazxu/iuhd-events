import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import {NativeBaseProvider, StatusBar} from 'native-base';
import Main from './src/screens/Main';
import theme from './src/theme';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Welcome"
            component={Welcome}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="MainNavigator"
            component={Main}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
