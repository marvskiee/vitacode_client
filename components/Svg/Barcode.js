import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Barcode(props) {
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
        d="M21 10V9c0-.93 0-1.395-.102-1.776a3 3 0 00-2.122-2.122C18.395 5 17.93 5 17 5M3 10V9c0-.93 0-1.395.102-1.776a3 3 0 012.122-2.122C5.605 5 6.07 5 7 5M21 14v1c0 .93 0 1.395-.102 1.776a3 3 0 01-2.122 2.122C18.395 19 17.93 19 17 19M3 14v1c0 .93 0 1.395.102 1.776a3 3 0 002.122 2.122C5.605 19 6.07 19 7 19"
        stroke="#000"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15V9M8 14v-4M16 14v-4"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Barcode;
