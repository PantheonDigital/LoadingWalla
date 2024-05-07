import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const TruckIcon = ({size}) => {
  return (
    <Svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      viewBox="0 0 24 24">
      <Path
        stroke-width="0"
        d="m.89,14.56v2.56c0,.47.38.85.85.85h1.01c.35.99,1.29,1.71,2.41,1.71s2.05-.72,2.41-1.71h8.86c.35.99,1.29,1.71,2.41,1.71s2.05-.72,2.41-1.71h1.01c.47,0,.85-.38.85-.85v-4.27c0-.16-.04-.31-.12-.44l-2.56-4.27c-.15-.26-.43-.42-.73-.42h-5.13v-2.56c0-.47-.38-.85-.85-.85H1.74c-.47,0-.85.38-.85.85v.85m0,5.13v1.71m0-5.13v1.71m4.27,8.55c-.47,0-.85-.38-.85-.85s.38-.85.85-.85.85.38.85.85-.38.85-.85.85Zm7.69-1.71h-5.28c-.35-.99-1.29-1.71-2.41-1.71s-2.05.72-2.41,1.71h-.16V6.02h10.26v10.26Zm5.98,1.71c-.47,0-.85-.38-.85-.85s.38-.85.85-.85.85.38.85.85-.38.85-.85.85Zm2.56-1.71h-.16c-.35-.99-1.29-1.71-2.41-1.71s-2.05.72-2.41,1.71h-1.87v-6.84h4.64l2.19,3.66v3.18Z"
      />
    </Svg>
  );
};

export default TruckIcon;
