import React from 'react';
import {Text, Image, HStack, VStack, Pressable} from 'native-base';
import Clock from '../svgs/Clock';
import {formatDate} from '../utils';
import BASE_URL from '../network';

const EventItem = ({onPress, event}: any) => {
  return (
    <Pressable onPress={onPress}>
      <HStack
        position="relative"
        width="100%"
        bg="#FFFFFF"
        borderColor="#E6E6E6"
        borderWidth={1}
        borderRadius={15}>
        <Image
          alt="event"
          source={{uri: `${BASE_URL}/images/${event.image}`}}
          width={100}
          height={100}
          borderLeftRadius={15}
          zIndex={1}
        />
        <VStack flex={1} justifyContent="space-between">
          <Text pl={15} pt={15} fontWeight={500} fontSize={18} color="#212121">
            {event.title}
          </Text>
          <HStack
            pr={15}
            pb={3}
            alignItems="center"
            justifyContent="flex-end"
            space={1}>
            <Clock color="black" />
            <Text fontWeight={400} fontSize={14}>
              {formatDate(event.date)}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default EventItem;
