import React from "react";

const sizeClasses = {
  txtRobotoRegular12Indigo800: "font-normal font-roboto",
  txtRobotoRegular14GreenA400: "font-normal font-roboto",
  txtMuliBold13: "font-bold font-mulish",
  txtArchivoVFBetaRegular2051WhiteA700: "font-archivo font-normal",
  txtOpenSansExtraBold72: "font-extrabold font-opensans",
  txtRobotoRegular14Bluegray300: "font-normal font-roboto",
  txtOpenSansBold48: "font-bold font-opensans",
  txtPoppinsMedium72: "font-medium font-poppins",
  txtOpenSansExtraBold34: "font-extrabold font-opensans",
  txtRobotoRegular12WhiteA70090: "font-normal font-roboto",
  txtPoppinsRegular34: "font-normal font-poppins",
  txtOpenSansRegular14Bluegray600: "font-normal font-opensans",
  txtRobotoRegular161Bluegray80003: "font-normal font-roboto",
  txtRobotoRegular14Black900: "font-normal font-roboto",
  txtPoppinsLight16WhiteA700: "font-light font-poppins",
  txtPoppinsMedium150: "font-medium font-poppins",
  txtArchivoVFBetaRegular3396: "font-archivo font-normal",
  txtRobotoRegular12Indigo80090: "font-normal font-roboto",
  txtOpenSansRegular14Red500: "font-normal font-opensans",
  txtPoppinsSemiBold184Gray900: "font-poppins font-semibold",
  txtRobotoRegular20: "font-normal font-roboto",
  txtPoppinsSemiBold19: "font-poppins font-semibold",
  txtPoppinsLight24: "font-light font-poppins",
  txtRobotoRegular14Red500: "font-normal font-roboto",
  txtOpenSansBold10WhiteA700: "font-bold font-opensans",
  txtRobotoRegular14Indigo300: "font-normal font-roboto",
  txtPoppinsLight16Indigo800: "font-light font-poppins",
  txtOpenSansRegular14Indigo300: "font-normal font-opensans",
  txtOpenSansBold10Bluegray600: "font-bold font-opensans",
  txtPoppinsRegular34WhiteA700: "font-normal font-poppins",
  txtOpenSansRegular14Green400: "font-normal font-opensans",
  txtPoppinsLight60: "font-light font-poppins",
  txtOpenSansRegular16: "font-normal font-opensans",
  txtPoppinsLight16Indigo40090: "font-light font-poppins",
  txtOpenSansRegular14: "font-normal font-opensans",
  txtOpenSansRegular16Indigo40090: "font-normal font-opensans",
  txtOpenSansRegular12: "font-normal font-opensans",
  txtArchivoVFBetaRegular3739: "font-archivo font-normal",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtOpenSansRegular12Bluegray300: "font-normal font-opensans",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtPoppinsSemiBold184: "font-poppins font-semibold",
  txtRobotoRegular161: "font-normal font-roboto",
  txtArchivoVFBetaRegular2051: "font-archivo font-normal",
  txtRobotoRegular14GreenA700: "font-normal font-roboto",
  txtPoppinsLight16: "font-light font-poppins",
  txtOpenSansExtraBold72WhiteA700: "font-extrabold font-opensans",
  txtRobotoBold10Bluegray600: "font-bold font-roboto",
  txtOpenSansBold24: "font-bold font-opensans",
  txtRobotoRegular14Bluegray600: "font-normal font-roboto",
  txtPoppinsLight16Indigo80090: "font-light font-poppins",
  txtOpenSansBold20: "font-bold font-opensans",
  txtOpenSansRegular24: "font-normal font-opensans",
  txtOpenSansRegular14Bluegray300: "font-normal font-opensans",
  txtOpenSansBold60: "font-bold font-opensans",
  txtOpenSansRegular20: "font-normal font-opensans",
  txtMuliRegular13: "font-mulish font-normal",
  txtRobotoRegular14Indigo50: "font-normal font-roboto",
  txtOpenSansBold16: "font-bold font-opensans",
  txtPoppinsLight16Black900: "font-light font-poppins",
  txtOpenSansBold14: "font-bold font-opensans",
  txtPoppinsSemiBold20WhiteA700: "font-poppins font-semibold",
  txtOpenSansBold10: "font-bold font-opensans",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtOpenSansRegular1011WhiteA700: "font-normal font-opensans",
  txtOpenSansRegular12WhiteA70090: "font-normal font-opensans",
  txtPoppinsSemiBold19WhiteA700: "font-poppins font-semibold",
  txtRobotoRegular14Indigo80090: "font-normal font-roboto",
  txtOpenSansRegular1011: "font-normal font-opensans",
  txtOpenSansRegular16Bluegray500: "font-normal font-opensans",
  txtPoppinsMedium48: "font-medium font-poppins",
  txtRobotoBold10: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
