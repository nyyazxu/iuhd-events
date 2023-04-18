import React from 'react';
import Svg, {SvgProps, G, Circle, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props: SvgProps) => (
  <Svg width={300} height={'100%'} fill="none" {...props}>
    <G filter="url(#a)">
      <Circle cx={0} cy="40%" r={120} fill="white" />
    </G>
    <Defs />
  </Svg>
);
export default SvgComponent;
