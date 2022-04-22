import React from "react";
import icons from "@assets/icons/icons.svg";

type IconsNamesType = "arrow-down" | "arrow-link" | "cart";

interface IIconProps {
  name: IconsNamesType;
  width: React.SVGAttributes<SVGSVGElement>["width"];
  height: React.SVGAttributes<SVGSVGElement>["height"];
  color: React.SVGAttributes<SVGSVGElement>["color"];
}

const Icon: React.FC<IIconProps> = (props) => {
  return (
    <svg width={props.width} height={props.height} fill={props.color}>
      <use xlinkHref={`${icons}#${props.name}`} />
    </svg>
  );
};

export default Icon;
