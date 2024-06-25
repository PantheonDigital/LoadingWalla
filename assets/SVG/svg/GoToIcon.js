import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function GoToIcon({size, color}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={size}
      width={size}>
      <Path
        d="M20 8l-5.5 5.5-1.41-1.41L16.17 9H10.5C8 9 6 11 6 13.5V20H4v-6.5A6.5 6.5 0 0110.5 7h5.67l-3.09-3.09L14.5 2.5 20 8z"
        fill={color}
      />
    </Svg>
  );
}

export default GoToIcon;