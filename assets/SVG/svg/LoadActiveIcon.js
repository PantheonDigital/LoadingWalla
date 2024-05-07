import React from 'react';
import {ClipPath, Defs, G, Path, Rect, Svg} from 'react-native-svg';

const LoadActiveIcon = ({size}) => {
  return (
    <Svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24">
      <Path
        stroke-width="0"
        fill="#ef4d23"
        d="m20.97,3.03c-.66-.66-1.54-1.03-2.47-1.03H5.5c-.93,0-1.81.36-2.47,1.03s-1.03,1.54-1.03,2.47v13c0,.93.36,1.81,1.03,2.47s1.54,1.03,2.47,1.03h13c.93,0,1.81-.36,2.47-1.03s1.03-1.54,1.03-2.47V5.5c0-.93-.36-1.81-1.03-2.47Zm-7.97.97v4h-2V4h2Zm2,0h3.5c.4,0,.78.16,1.06.44s.44.66.44,1.06v13c0,.4-.16.78-.44,1.06s-.66.44-1.06.44H5.5c-.4,0-.78-.16-1.06-.44s-.44-.66-.44-1.06V5.5c0-.4.16-.78.44-1.06s.66-.44,1.06-.44m8.91,5.41"
      />
      <G>
        <Path
          stroke-width="0"
          fill="#ef4d23"
          d="m19.56,19.56c.28-.28.44-.66.44-1.06V5.5c0-.4-.16-.78-.44-1.06s-.66-.44-1.06-.44h-3.5v4c0,.53-.22,1.03-.59,1.41s-.88.59-1.41.59h-2c-.53,0-1.03-.22-1.41-.59s-.59-.88-.59-1.41V4h-3.5c-.4,0-.78.16-1.06.44-.28.28-.44.66-.44,1.06v13c0,.4.16.78.44,1.06s.66.44,1.06.44h13c.4,0,.78-.16,1.06-.44Z"
        />
        <Rect class="cls-1" fill="#ef4d23" x="11" y="4" width="2" height="4" />
      </G>
      <Rect
        stroke-width="0"
        fill="#fff"
        x="8.8"
        y="13.92"
        width="6.4"
        height="1.69"
        rx=".85"
        ry=".85"
      />
      <Rect
        stroke-width="0"
        fill="#fff"
        x="9.43"
        y="16.37"
        width="6.4"
        height="1.69"
        rx=".85"
        ry=".85"
      />
    </Svg>
  );
};

export default LoadActiveIcon;
