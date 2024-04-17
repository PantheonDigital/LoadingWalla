import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Bell = () => {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.0001 14.873C14.6994 14.873 16.8735 14.2701 17.0834 11.8504C17.0834 9.43229 15.5677 9.58779 15.5677 6.62088C15.5677 4.30341 13.3711 1.66663 10.0001 1.66663C6.62906 1.66663 4.43245 4.30341 4.43245 6.62088C4.43245 9.58779 2.91675 9.43229 2.91675 11.8504C3.12754 14.2793 5.30156 14.873 10.0001 14.873Z"
        stroke="#352422"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M11.9906 17.381C10.8539 18.6432 9.08052 18.6582 7.93286 17.381"
        stroke="#352422"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export default Bell;
