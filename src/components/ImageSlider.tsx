import React, {useMemo, useState} from 'react';
import {
  Box,
  FlatList,
  Heading,
  HStack,
  Image,
  PresenceTransition,
  Pressable,
  Text,
} from 'native-base';
import {Dimensions} from 'react-native';
import Svg, {LinearGradient, Rect, Stop} from 'react-native-svg';
import Clock from '../svgs/Clock';
import BASE_URL from '../network';
import {formatDate} from '../utils';

const {width} = Dimensions.get('window');

const ImageSlider = ({slideWidth, onPress, events}: any) => {
  const [currentIndex, setIndex] = useState(0);

  const Seperator: any = useMemo(
    () => <Box w={(width - slideWidth) / 4} />,
    [slideWidth],
  );

  return (
    <Box style={{width, height: 240}}>
      <FlatList
        data={events}
        horizontal
        snapToInterval={slideWidth + (width - slideWidth) / 4}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => `${index * 10}${item}`}
        contentContainerStyle={{
          width:
            (slideWidth + (width - slideWidth) / 4) * (events.length - 1) +
            (width - slideWidth) +
            slideWidth,
          marginHorizontal: (width - slideWidth) / 2,
        }}
        ItemSeparatorComponent={Seperator}
        renderItem={({item, index}: any) => (
          <Pressable
            key={`${item.title}${index}`}
            onPress={() => {
              onPress(item);
            }}>
            <Box width={slideWidth} shadow={8} style={{elevation: 3}}>
              <Box>
                <Image
                  key={`${index * 10}${item}`}
                  alt="slide"
                  source={{uri: `${BASE_URL}/images/${item.image}`}}
                  height={200}
                  borderRadius={20}
                />
                <Box position="absolute" w="100%" h="100%" borderRadius={20}>
                  <PresenceTransition
                    style={{
                      height: '100%',
                    }}
                    visible={currentIndex === index}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                      transition: {
                        duration: 200,
                        delay: 100,
                      },
                    }}>
                    <HStack ml={4} mt={3} alignItems="center" space={1}>
                      <Clock color="#ffffff" />
                      <Text color={"#ffffff"}>{formatDate(item.date)}</Text>
                    </HStack>
                    <Heading
                      position="absolute"
                      bottom={4}
                      left={4}
                      color="white"
                      zIndex={100}>
                      {item.title}
                    </Heading>
                    <Svg
                      width="100%"
                      height="100%"
                      style={{position: 'absolute', bottom: 0}}>
                      <LinearGradient
                        id="grad"
                        x1="0%"
                        y1="100%"
                        x2="0%"
                        y2="0%">
                        <Stop
                          offset="0%"
                          stopColor="#000000"
                          stopOpacity="0.7"
                        />
                        <Stop
                          offset="100%"
                          stopColor="#000000"
                          stopOpacity="0"
                        />
                      </LinearGradient>
                      <Rect
                        x="0"
                        y="100"
                        ry={20}
                        width="100%"
                        height="50%"
                        fill="url(#grad)"
                      />
                    </Svg>
                  </PresenceTransition>
                </Box>
              </Box>
            </Box>
          </Pressable>
        )}
        onScroll={event =>
          setIndex(
            Math.round(
              event.nativeEvent.contentOffset.x /
                (slideWidth + (width - slideWidth) / 4),
            ),
          )
        }
      />
    </Box>
  );
};

export default ImageSlider;
