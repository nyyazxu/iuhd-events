import React from 'react';
import {Container, Button, Text, VStack, Heading, Box} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import FloatingLabelInput from '../components/FloatingLabelInput';

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
    <Box w="full" h="full" bgColor="white">
      <Container
        safeAreaY
        w="full"
        h="full"
        alignItems="center"
        alignSelf="center">
        <VStack
          w="100%"
          h="100%"
          pt="50px"
          pb="200px"
          justifyContent="space-around">
          <Heading
            fontSize={40}
            color="primary.500"
            fontWeight={700}
            textAlign="center">
            Stay tuned up with events
          </Heading>

          <VStack w="100%" space={5}>
            <FloatingLabelInput label={'Personal ID'} />
            <FloatingLabelInput label={'Password'} secureTextEntry />

            <Box p={30} bgColor="gray.100" borderRadius="10px">
              <Text color="trueGray.600">
                For sign in your account, please get your Personal id and
                Password from your faculty department.
              </Text>
            </Box>
          </VStack>
        </VStack>

        <Button
          position="absolute"
          bottom={10}
          w="100%"
          _text={{
            fontWeight: 600,
            fontSize: 18,
          }}
          textAlign="center"
          onPress={handleLogin}>
          Login to cabinet
        </Button>
      </Container>
    </Box>
  );
};

export default Login;
