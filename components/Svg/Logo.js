import * as React from "react";
import Svg, {
  Rect,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function Logo(props) {
  return (
    <Svg
      width={37}
      height={39}
      viewBox="0 0 37 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={2} width={33} height={33} rx={16.5} fill="#fff" />
      <G filter="url(#filter0_d_3_91)">
        <Path
          d="M27.755 5.372a6.629 6.629 0 00-6.388 4.86h4.977l-.291.81h-4.956l-1.733 4.95-1.465 4.409-3.693-11.303H8.523l5.368 13.813a6.795 6.795 0 006.333 4.333l7.869-21.872h-.338z"
          fill="url(#paint0_linear_3_91)"
          shapeRendering="crispEdges"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_3_91"
          x1={18.3081}
          y1={5.3721}
          x2={18.3081}
          y2={27.2442}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#87B7FF" />
          <Stop offset={1} stopColor="#9748FD" stopOpacity={0.62} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Logo;
