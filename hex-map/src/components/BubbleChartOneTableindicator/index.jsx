import React from "react";

import { Img, List, Text } from "components";

const BubbleChartOneTableindicator = (props) => {
  return (
    <>
      <List className={props.className} orientation="vertical">
        <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
          <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
            <Text
              className="text-indigo-800 text-sm tracking-[0.44px] w-auto"
              size="txtRobotoRegular14"
            >
              {props?.name}
            </Text>
            <Text
              className="text-blue_gray-300 text-sm tracking-[0.44px] w-auto"
              size="txtRobotoRegular14Bluegray300"
            >
              {props?.amount}
            </Text>
            <Text
              className="text-indigo-800 text-sm tracking-[0.44px] w-auto"
              size="txtRobotoRegular14"
            >
              {props?.summary}
            </Text>
          </div>
          <Img
            className="h-5 w-3.5"
            src="images/img_arrowup.svg"
            alt="arrowup"
          />
        </div>
        <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
          <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
            <Text
              className="text-indigo-800 text-sm tracking-[0.44px] w-auto"
              size="txtRobotoRegular14"
            >
              {props?.name1}
            </Text>
            <Text
              className="text-blue_gray-300 text-sm tracking-[0.44px] w-auto"
              size="txtRobotoRegular14Bluegray300"
            >
              {props?.amount1}
            </Text>
            <Text
              className="text-indigo-800 text-sm tracking-[0.44px] w-auto"
              size="txtRobotoRegular14"
            >
              {props?.summary1}
            </Text>
          </div>
          <Img
            className="h-5 w-3.5"
            src="images/img_arrowup_red_500.svg"
            alt="arrowup"
          />
        </div>
        <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
          <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
            <Text
              className="text-indigo-800 text-sm tracking-[0.44px] w-auto"
              size="txtRobotoRegular14"
            >
              {props?.name2}
            </Text>
            <Text
              className="text-blue_gray-300 text-sm tracking-[0.44px] w-auto"
              size="txtRobotoRegular14Bluegray300"
            >
              {props?.amount2}
            </Text>
            <Text
              className="text-indigo-800 text-sm tracking-[0.44px] w-auto"
              size="txtRobotoRegular14"
            >
              {props?.summary2}
            </Text>
          </div>
          <Img
            className="h-5 w-3.5"
            src="images/img_arrowup.svg"
            alt="arrowup"
          />
        </div>
      </List>
    </>
  );
};

BubbleChartOneTableindicator.defaultProps = {
  name: "Travel",
  amount: "760",
  summary: "2,540",
  name1: "Presentation",
  amount1: "650",
  summary1: "2,304",
  name2: "Business",
  amount2: "612",
  summary2: "2,140",
};

export default BubbleChartOneTableindicator;
