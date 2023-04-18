import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Clock = () => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <Path
        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
        stroke="#7E7E7E"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9 4.5V9L12 10.5"
        stroke="#7E7E7E"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Clock;
