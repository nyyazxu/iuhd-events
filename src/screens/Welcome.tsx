import React from 'react';
import {Container, Button, Text, Center, Box} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {ImageBackground, StyleSheet} from 'react-native';

type WelcomeProps = {
  navigation: StackNavigationProp<any, any>;
};

const Welcome: React.FC<WelcomeProps> = ({navigation}) => {
  return (
    <Box>
      <ImageBackground
        source={require('../../assets/images/welcome_background.png')}
        resizeMode="cover"
        style={styles.background}
      />
      <Container
        safeAreaY
        w="full"
        h="full"
        alignItems="center"
        alignSelf="center">
        <Center>
          <Text>Stay tuned up with events</Text>
          <Button
            w="100%"
            textAlign="center"
            onPress={() => navigation.navigate('Login')}>
            Login
          </Button>
        </Center>
      </Container>
    </Box>
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
