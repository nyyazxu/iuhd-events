import React, {useEffect, useState} from 'react';
import {Container, Text, Box, HStack, VStack, Button} from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}: any) => {
  const [user, setUser] = useState<any>({});
  useEffect(() => {
    const getUser = async () => {
      setUser(JSON.parse((await AsyncStorage.getItem('user')) || ''));
    };

    getUser();
  });
  return (
    <Box w="full" h="full" bgColor="white">
      <Container
        w="full"
        h="full"
        alignItems="center"
        alignSelf="center"
        pt={8}>
        <VStack w="100%" space={5} overflowX="hidden">
          <HStack w="100%" alignItems="center" justifyContent="space-between">
            <Text fontSize={16} fontWeight={500}>
              Name:{' '}
            </Text>
            <Text noOfLines={1} maxW="80%" fontSize={16}>
              {user.name}
            </Text>
          </HStack>
          <HStack w="100%" alignItems="center" justifyContent="space-between">
            <Text fontSize={16} fontWeight={500}>
              Faculty:{' '}
            </Text>
            <Text noOfLines={1} maxW="80%" fontSize={16}>
              {user.faculty}
            </Text>
          </HStack>
          <HStack w="100%" alignItems="center" justifyContent="space-between">
            <Text fontSize={16} fontWeight={500}>
              Student ID:{' '}
            </Text>
            <Text noOfLines={1} maxW="80%" fontSize={16}>
              {user.studentId}
            </Text>
          </HStack>

          <Button
            variant="outline"
            _text={{
              fontSize: 16,
              fontWeight: 500,
              color: 'primary.500',
            }}
            onPress={() => {
              AsyncStorage.clear();
              navigation.replace('Login');
            }}>
            Log out
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Profile;
