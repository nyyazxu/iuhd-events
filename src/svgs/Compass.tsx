import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Compass = () => {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <Path
        d="M13 23.8333C18.9831 23.8333 23.8333 18.9831 23.8333 13C23.8333 7.0169 18.9831 2.16666 13 2.16666C7.0169 2.16666 2.16666 7.0169 2.16666 13C2.16666 18.9831 7.0169 23.8333 13 23.8333Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5933 8.40668L15.2967 15.2967L8.40668 17.5933L10.7033 10.7033L17.5933 8.40668Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default Compass;
