import React from 'react';
import {Container, Button, Text, Center} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';

type HomeProps = {
  navigation: StackNavigationProp<any, any>;
};

const Home = ({navigation}: HomeProps) => {
  return (
    <Container>
      <Center>
        <Text>Welcome to my app!</Text>
        <Button onPress={() => navigation.navigate('Login')}>
          <Text>Login</Text>
        </Button>
      </Center>
    </Container>
  );
};

export default Home;
