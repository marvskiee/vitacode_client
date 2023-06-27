import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function Developer(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={34} height={34} rx={4} fill="#fff" />
      <Path
        fill="#7D5DFD"
        d="M4.59459 8.27023H9.69969V26.648629999999997H4.59459z"
      />
      <Path d="M24.334 8.27h5.105V26.65h-5.105V8.27z" fill="#040A16" />
      <Path fill="#040A16" d="M14.8048 8.27023H19.9099V21.54353H14.8048z" />
      <Path d="M4.595 8.27h24.844v5.105H4.595V8.27z" fill="#7D5DFD" />
    </Svg>
  );
}

export default Developer;
