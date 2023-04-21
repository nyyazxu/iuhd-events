import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Clock = (props: any) => {
  return (
    <Svg width="18" height="18" viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
        stroke={props.color || '#7E7E7E'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 4.5V9L12 10.5"
        stroke={props.color || '#7E7E7E'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Clock;
