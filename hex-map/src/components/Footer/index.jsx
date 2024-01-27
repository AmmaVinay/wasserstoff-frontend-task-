import React from "react";

import { Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-row md:gap-10 items-center justify-between mx-auto my-[11px] w-[94%]">
          <Text
            className="text-[10px] text-blue_gray-600 tracking-[1.50px] uppercase"
            size="txtOpenSansBold10Bluegray600"
          >
            Orion data visualisation
          </Text>
          <Text
            className="text-[10px] text-blue_gray-600 text-right tracking-[1.50px] uppercase"
            size="txtOpenSansBold10Bluegray600"
          >
            2022
          </Text>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
