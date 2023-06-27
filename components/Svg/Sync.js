import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Sync(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 19l-.707-.707-.707.707.707.707L10 19zm3.293-4.707l-4 4 1.414 1.414 4-4-1.414-1.414zm-4 5.414l4 4 1.414-1.414-4-4-1.414 1.414z"
        fill="#fff"
      />
      <Path
        d="M18.062 8.5A7 7 0 0112 19"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        d="M14 5l.707.707.707-.707-.707-.707L14 5zm-3.293 4.707l4-4-1.414-1.414-4 4 1.414 1.414zm4-5.414l-4-4-1.414 1.414 4 4 1.414-1.414z"
        fill="#fff"
      />
      <Path
        d="M5.938 15.5A7 7 0 0112 5"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default Sync;
