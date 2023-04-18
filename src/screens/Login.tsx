import React from 'react';
import {Container, Input, Button, Text, FormControl, Center} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';

type LoginProps = {
  navigation: StackNavigationProp<any, any>;
};

const Login = ({navigation}: LoginProps) => {
  const [personalId, setPersonalId] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Handle login logic
    // If login is successful, navigate to the MainNavigator screen
    navigation.navigate('MainNavigator');
  };

  return (
    <Container>
      <Center>
        <FormControl>
          <Text>Personal ID</Text>
          <Input value={personalId} onChangeText={setPersonalId} />
        </FormControl>
        <FormControl>
          <Text>Password</Text>
          <Input secureTextEntry value={password} onChangeText={setPassword} />
        </FormControl>
        <Button onPress={handleLogin}>
          <Text>Login</Text>
        </Button>
      </Center>
    </Container>
  );
};

export default Login;
