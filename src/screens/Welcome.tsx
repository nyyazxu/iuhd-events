import React, {useLayoutEffect} from 'react';
import {Container, Button, Text, Box, Heading, VStack} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {ImageBackground, StyleSheet} from 'react-native';
import IUHD from '../svgs/IUHD';
import AsyncStorage from '@react-native-async-storage/async-storage';

type WelcomeProps = {
  navigation: StackNavigationProp<any, any>;
};

const Background = require('../../assets/images/welcome_background.png');

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  useLayoutEffect(() => {
    const checkUser = async () => {
      const data = await AsyncStorage.getItem('user');
      if (data) {
        navigation.replace('MainNavigator');
      }
    };
    checkUser();
  }, [navigation]);

  return (
    <>
      <Box w="full" h="full">
        <ImageBackground
          source={Background}
          resizeMode="cover"
          style={styles.background}
        />
        <Container
          safeAreaY
          w="full"
          h="full"
          alignItems="center"
          alignSelf="center">
          <VStack h="40%" mt="30px" justifyContent="space-around">
            <VStack alignItems="center" space={4}>
              <IUHD />
              <Text color="white" textAlign="center" fontWeight={500}>
                International University {'\n'}
                for Humanities and Development
              </Text>
            </VStack>
            <Heading
              fontSize={46}
              color="white"
              fontWeight={700}
              textAlign="center">
              Stay tuned up with events
            </Heading>
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
            onPress={() => navigation.navigate('Login')}>
            Login to cabinet
          </Button>
        </Container>
      </Box>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: '100%',
    flex: 1,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Welcome;
