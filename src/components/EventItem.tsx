import React from 'react';
import {Text, Image, HStack, VStack} from 'native-base';
import Clock from '../svgs/Clock';

const EventItem = () => {
  return (
    <HStack
      position="relative"
      width="100%"
      bg="#FFFFFF"
      borderColor="#E6E6E6"
      borderWidth={1}
      borderRadius={15}>
      <Image
        alt="event"
        source={{uri: 'https://loremflickr.com/320/240'}}
        width={100}
        height={100}
        borderLeftRadius={15}
        zIndex={1}
      />
      <VStack flex={1} justifyContent="space-between">
        <Text pl={15} pt={15} fontWeight={500} fontSize={18} color="#212121">
          Food Fair
        </Text>
        <HStack
          pr={15}
          pb={3}
          alignItems="center"
          justifyContent="flex-end"
          space={1}>
          <Clock />
          <Text fontWeight={400} fontSize={14}>
            12.03.2023
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default EventItem;
