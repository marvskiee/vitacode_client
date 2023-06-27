import * as React from "react";
import Svg, { Path } from "react-native-svg";

function More(props) {
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
        d="M6 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM10.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
        fill="#000"
      />
    </Svg>
  );
}

export default More;
