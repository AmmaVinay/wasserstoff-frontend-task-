import React from "react";

import { Img, Text } from "components";

const BubbleChartWidgetmsize1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-[134px]">
          <Text
            className="text-base text-white-A700 tracking-[0.44px] w-auto"
            size="txtOpenSansRegular16"
          >
            {props?.nameFour}
          </Text>
        </div>
        <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
          <Text
            className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700 tracking-[-0.44px]"
            size="txtOpenSansExtraBold34"
          >
            {props?.priceTwo}
          </Text>
          <div className="flex flex-row h-[26px] md:h-auto items-start justify-start">
            <Img
              className="h-full w-3.5"
              src="images/img_arrowup_green_400.svg"
              alt="arrowup_One"
            />
            <Text
              className="text-green-400 text-sm tracking-[0.44px]"
              size="txtOpenSansRegular14Green400"
            >
              {props?.percentOne}
            </Text>
          </div>
        </div>
        <Text
          className="text-white-A700_90 text-xs tracking-[0.40px] w-auto"
          size="txtOpenSansRegular12WhiteA70090"
        >
          {props?.priceThree}
        </Text>
      </div>
    </>
  );
};

BubbleChartWidgetmsize1.defaultProps = {
  nameFour: "Total earning",
  priceTwo: "$12,875",
  percentOne: "10%",
  priceThree: "Compared to $21,490 last year",
};

export default BubbleChartWidgetmsize1;
