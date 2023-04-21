import React from 'react';
import {
  Container,
  VStack,
  Image,
  CloseIcon,
  Pressable,
  Heading,
  HStack,
  Text,
  InfoOutlineIcon,
  ScrollView,
  StatusBar,
} from 'native-base';
import {NavigationProp} from '@react-navigation/native';
import Clock from '../svgs/Clock';
import BASE_URL from '../network';
import {formatDate} from '../utils';

const Event = ({
  route,
  navigation,
}: {
  route: any;
  navigation: NavigationProp<any, any>;
}) => {
  const {event} = route.params;
  return (
    <>
      <StatusBar barStyle={'default'} />
      <ScrollView w="full" minH="full" bgColor="white">
        <Image
          alt="event"
          w="full"
          minH="400px"
          borderBottomRadius={20}
          src={`${BASE_URL}/images/${event.image}`}
        />
        <Container w="full" alignItems="center" alignSelf="center" pt={'25px'}>
          <VStack w="100%" space={4}>
            <Heading fontSize={24} fontWeight={600}>
              {event.title}
            </Heading>
            <HStack
              alignItems="center"
              space={4}
              py="14px"
              px="20px"
              borderRadius={16}
              borderWidth={1}
              borderColor="primary.100"
              w="50%"
              bgColor="primary.50">
              <Clock color="red" height="20px" width="20px" />
              <Text flex={1} noOfLines={1} fontWeight={500} color="primary.500">
                {formatDate(event.date)}
              </Text>
            </HStack>
            <HStack
              alignItems="center"
              space={4}
              py="14px"
              px="20px"
              borderRadius={16}
              borderWidth={1}
              borderColor="primary.100"
              w="75%"
              bgColor="primary.50"
              overflowX="clip">
              <InfoOutlineIcon color="primary.500" size="21px" />
              <Text flex={1} noOfLines={1} fontWeight={500} color="primary.500">
                {event.place}
              </Text>
            </HStack>
          </VStack>

          <Text fontWeight={500} fontSize={16} mt={10} mb={40}>
            {event.content}
          </Text>
        </Container>
      </ScrollView>
      <Pressable
        left={10}
        bottom={12}
        position="absolute"
        w="60px"
        h="60px"
        justifyContent="center"
        alignItems="center"
        borderRadius={15}
        bgColor="white"
        shadow={5}
        style={{
          elevation: 5,
        }}
        _pressed={{
          opacity: 0.5,
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <CloseIcon color="black" size="23px" />
      </Pressable>
    </>
  );
};

export default Event;
