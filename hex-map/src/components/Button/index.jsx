import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-lg" };
const variants = {
  fill: {
    indigo_A700_02: "bg-indigo-A700_02 shadow-bs text-white-A700",
    green_A200: "bg-green-A200",
    blue_300: "bg-blue-300",
    red_A100: "bg-red-A100",
    purple_100: "bg-purple-100",
    orange_A200: "bg-orange-A200",
    blue_300_01: "bg-blue-300_01",
    gray_900_02: "bg-gray-900_02",
    purple_A700: "bg-purple-A700",
    light_blue_300: "bg-light_blue-300",
    purple_A700_01: "bg-purple-A700_01",
    indigo_A700: "bg-indigo-A700",
    pink_A200: "bg-pink-A200",
    red_500: "bg-red-500",
    green_700: "bg-green-700",
    gray_50_01: "bg-gray-50_01",
    deep_purple_A200: "bg-deep_purple-A200",
    orange_A200_01: "bg-orange-A200_01",
    white_A700: "bg-white-A700 shadow-bs1",
  },
  outline: { blue_gray_800_02: "border border-blue_gray-800_02 border-solid" },
};
const sizes = { xs: "p-[7px]", sm: "p-[11px]", md: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "indigo_A700_02",
    "green_A200",
    "blue_300",
    "red_A100",
    "purple_100",
    "orange_A200",
    "blue_300_01",
    "gray_900_02",
    "purple_A700",
    "light_blue_300",
    "purple_A700_01",
    "indigo_A700",
    "pink_A200",
    "red_500",
    "green_700",
    "gray_50_01",
    "deep_purple_A200",
    "orange_A200_01",
    "white_A700",
    "blue_gray_800_02",
  ]),
};

export { Button };
