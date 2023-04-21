import React, {useEffect, useMemo, useState} from 'react';
import {
  Container,
  Box,
  Heading,
  FlatList,
  ScrollView,
  Spinner,
} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import ImageSlider from '../../components/ImageSlider';
import EventItem from '../../components/EventItem';
import {ImageBackground, StyleSheet} from 'react-native';
import BASE_URL from '../../network';

type HomeProps = {
  navigation: StackNavigationProp<any, any>;
};

const Home = ({navigation}: HomeProps) => {
  const Background = require('../../../assets/images/blurred_dot.png');
  const Seperator: any = useMemo(() => <Box h={4} />, []);
  const [slideWidth, setSlideWidth] = useState(0);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/events`)
      .then(response => response.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const onLayout = (event: any) => {
    setSlideWidth(event.nativeEvent.layout.width);
  };

  const openEvent = (event: any) => {
    navigation.navigate('Event', {event});
  };

  return (
    <ScrollView
      minW="full"
      minH="full"
      bgColor="white"
      showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={Background}
        resizeMode="cover"
        style={styles.background}
      />
      {loading ? (
        <Box minH="80%" justifyContent="center">
          <Spinner size="lg" />
        </Box>
      ) : (
        <Container
          onLayout={onLayout}
          w="full"
          h="full"
          alignItems="center"
          alignSelf="center"
          pt={8}>
          <Heading mb={3} alignSelf="flex-start">
            Upcoming Events
          </Heading>
          <ImageSlider
            slideWidth={slideWidth}
            onPress={openEvent}
            events={events.filter((event: any) => event.isUpcoming)}
          />
          <Heading mb={3} alignSelf="flex-start">
            All Events
          </Heading>
          <FlatList
            scrollEnabled={false}
            width="100%"
            data={events}
            contentContainerStyle={{
              paddingTop: 10,
              paddingBottom: 150,
            }}
            ItemSeparatorComponent={Seperator}
            keyExtractor={item => `${item}item`}
            renderItem={({item}) => (
              <EventItem
                event={item}
                onPress={() => {
                  openEvent(item);
                }}
              />
            )}
          />
        </Container>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    width: '100%',
    height: 700,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Home;
