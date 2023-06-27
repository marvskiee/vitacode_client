import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";

function Server(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Ellipse cx={12} cy={7} rx={7} ry={3} stroke="#fff" strokeWidth={2} />
      <Path
        d="M5 13v4c0 1.657 3.134 3 7 3s7-1.343 7-3v-4"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <Path
        d="M5 7v5c0 1.657 3.134 3 7 3s7-1.343 7-3V7"
        stroke="#fff"
        strokeWidth={2}
      />
    </Svg>
  );
}

export default Server;
