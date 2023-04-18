import React, {useMemo, useState} from 'react';
import {Container, Box, Heading, FlatList} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import ImageSlider from '../../components/ImageSlider';
import EventItem from '../../components/EventItem';

type HomeProps = {
  navigation: StackNavigationProp<any, any>;
};

const Home = ({navigation}: HomeProps) => {
  const Seperator: any = useMemo(() => <Box h={4} />, []);
  const [slideWidth, setSlideWidth] = useState(0);

  const onLayout = event => {
    setSlideWidth(event.nativeEvent.layout.width);
  };

  return (
    <Box w="full" h="full" bgColor="white">
      {/* png bg */}
      <Container
        onLayout={onLayout}
        w="full"
        h="full"
        alignItems="center"
        alignSelf="center">
        <Heading mt={8} mb={3} alignSelf="flex-start">
          Upcoming Events
        </Heading>
        <ImageSlider slideWidth={slideWidth} />
        <Heading mb={3} alignSelf="flex-start">
          All Events
        </Heading>
        <FlatList
          width="100%"
          data={[0, 1, 2, 3, 4, 5]}
          contentContainerStyle={{
            paddingTop: 10,
            paddingBottom: 120,
          }}
          ItemSeparatorComponent={Seperator}
          keyExtractor={item => `${item}item`}
          renderItem={() => <EventItem />}
        />
      </Container>
    </Box>
  );
};

export default Home;
