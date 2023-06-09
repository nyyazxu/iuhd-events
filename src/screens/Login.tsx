import React, {useState} from 'react';
import {
  Container,
  Button,
  Text,
  VStack,
  Heading,
  Box,
  ScrollView,
} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import FloatingLabelInput from '../components/FloatingLabelInput';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BASE_URL from '../network';
import { Platform } from 'react-native';

type LoginProps = {
  navigation: StackNavigationProp<any, any>;
};

const Login = ({navigation}: LoginProps) => {
  const [studentId, setStudentId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({studentId, password}),
      });
      const data = await response.json();
      if (response.ok) {
        await AsyncStorage.setItem('user', JSON.stringify(data));
        navigation.reset({index: 0, routes: [{name: 'MainNavigator'}]});
      } else {
        setErrorMessage(data);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }

    // Handle login logic
    // If login is successful, navigate to the MainNavigator screen
  };

  return (
    <Box
      minW="full"
      minH="full"
      bgColor="white">
      <Container
        safeAreaY
        w="full"
        h="full"
        alignItems="center"
        alignSelf="center">
        <VStack
          w="100%"
          pt={20}
          pb="200px"
          space={10}>
          <Heading
            fontSize={40}
            color="primary.500"
            fontWeight={700}
            textAlign="center">
            Stay tuned up with events
          </Heading>

          <VStack w="100%" space={5}>
            <FloatingLabelInput
              label={'Personal ID'}
              onChangeText={text => {
                setStudentId(text);
              }}
            />
            <FloatingLabelInput
              label={'Password'}
              secureTextEntry
              onChangeText={text => {
                setPassword(text);
              }}
            />

            {errorMessage.length > 0 && (
              <Text color="red.500">{errorMessage}</Text>
            )}

            <Box p={30} bgColor="gray.100" borderRadius="10px">
              <Text color="trueGray.600">
                For sign in your account, please get your Personal id and
                Password from your faculty department.
              </Text>
            </Box>
          </VStack>
        </VStack>

        <Button
          isLoading={isLoading}
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
