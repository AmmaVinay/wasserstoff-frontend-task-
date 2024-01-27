import React from "react";

import { Img, Line, List, Text } from "components";

const BubbleChartOneWidgetmsize1 = (props) => {
  return (
    <>
      <List className={props.className} orientation="vertical">
        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
          <div className="flex flex-col items-start justify-start w-[134px]">
            <Text
              className="text-base text-white-A700 tracking-[0.44px] w-auto"
              size="txtPoppinsLight16WhiteA700"
            >
              {props?.name}
            </Text>
          </div>
          <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700 tracking-[-0.44px]"
              size="txtPoppinsRegular34WhiteA700"
            >
              {props?.price}
            </Text>
            <div className="flex flex-row h-[26px] md:h-auto items-start justify-start">
              <Img
                className="h-full w-3.5"
                src="images/img_arrowup_green_a400.svg"
                alt="arrowup"
              />
              <Text
                className="text-green-A400 text-sm tracking-[0.44px]"
                size="txtRobotoRegular14GreenA400"
              >
                {props?.percent}
              </Text>
            </div>
          </div>
          <Text
            className="text-white-A700_90 text-xs tracking-[0.40px] w-auto"
            size="txtRobotoRegular12WhiteA70090"
          >
            {props?.priceOne}
          </Text>
        </div>
        <Line className="self-center sm:flex-col bg-deep_purple-400 w-[12%] flex flex-row" />
        <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
          <div className="flex flex-col items-start justify-start w-[134px]">
            <Text
              className="text-base text-white-A700 tracking-[0.44px] w-auto"
              size="txtPoppinsLight16WhiteA700"
            >
              {props?.name1}
            </Text>
          </div>
          <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-white-A700 tracking-[-0.44px]"
              size="txtPoppinsRegular34WhiteA700"
            >
              {props?.price1}
            </Text>
            <div className="flex flex-row h-[26px] md:h-auto items-start justify-start">
              <Img
                className="h-full w-3.5"
                src="images/img_arrowup_green_a400.svg"
                alt="arrowup"
              />
              <Text
                className="text-green-A400 text-sm tracking-[0.44px]"
                size="txtRobotoRegular14GreenA400"
              >
                {props?.percent1}
              </Text>
            </div>
          </div>
          <Text
            className="text-white-A700_90 text-xs tracking-[0.40px] w-auto"
            size="txtRobotoRegular12WhiteA70090"
          >
            {props?.priceone1}
          </Text>
        </div>
      </List>
    </>
  );
};

BubbleChartOneWidgetmsize1.defaultProps = {
  name: "Total earning",
  price: "$12,875",
  percent: "10%",
  priceOne: "Compared to $21,490 last year",
  name1: "Sales",
  price1: "$43,123",
  percent1: "12%",
  priceone1: "Compared to $21,490 last year",
};

export default BubbleChartOneWidgetmsize1;
