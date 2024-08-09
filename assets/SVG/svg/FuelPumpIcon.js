import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function FuelPumpIcon({size, color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      // width={17.635}
      // height={18.152}
      viewBox="0 0 17.635 18.152">
      <Path
        data-name="Path 60503"
        d="M12.716 8.337H6.854V5.274h5.864zm3.3-3.683h3.372a.323.323 0 01.322.322v5.715a.323.323 0 01-.322.322h-.354v3.825a.644.644 0 01-.645.645h-2.373V16.9h.19a1.291 1.291 0 011.29 1.29v.6a1.291 1.291 0 01-1.29 1.29H3.366a1.291 1.291 0 01-1.29-1.29v-.6a1.291 1.291 0 011.29-1.29h.19V4.505a2.582 2.582 0 012.579-2.579h7.3a2.645 2.645 0 012.579 2.728zM5.564 8.337a1.291 1.291 0 001.29 1.29h5.864a1.291 1.291 0 001.29-1.29V5.274a1.291 1.291 0 00-1.29-1.29H6.854a1.291 1.291 0 00-1.29 1.29zm6.128 4.519l-1.385-1.816a.625.625 0 00-.52-.254.643.643 0 00-.514.265l-1.468 2.013a1.735 1.735 0 00-.324 1.006 2.3 2.3 0 004.608.052 1.969 1.969 0 00-.397-1.266zm6.053-1.842h-.473a.323.323 0 01-.322-.322v-2.8h-.932v6.307h1.729v-3.18zm-7.081 2.621l-.88-1.183-.88 1.183a.8.8 0 00-.074.767 1.053 1.053 0 00.953.682 1.077 1.077 0 00.941-.646.948.948 0 00-.061-.8z"
        transform="translate(-2.076 -1.926)"
        fill={color}
      />
    </Svg>
  );
}

export default FuelPumpIcon;
