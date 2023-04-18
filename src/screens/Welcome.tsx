import React, {useEffect, useState} from 'react';
import {
  Container,
  Button,
  Text,
  Box,
  Heading,
  VStack,
  PresenceTransition,
  Spinner,
} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {ImageBackground, StyleSheet} from 'react-native';
import IUHD from '../svgs/IUHD';

type WelcomeProps = {
  navigation: StackNavigationProp<any, any>;
};

const Background = require('../../assets/images/welcome_background.png');

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
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
    <>
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
