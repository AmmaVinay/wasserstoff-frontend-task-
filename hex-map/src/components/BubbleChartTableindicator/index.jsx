import React from "react";

import { Img, List, Text } from "components";

const BubbleChartTableindicator = (props) => {
  return (
    <>
      <List className={props.className} orientation="vertical">
        <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
          <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
            <Text
              className="text-sm text-white-A700 tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14"
            >
              {props?.categoryname}
            </Text>
            <Text
              className="text-blue_gray-300 text-sm tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14Bluegray300"
            >
              {props?.categoryamount}
            </Text>
            <Text
              className="text-sm text-white-A700 tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14"
            >
              {props?.categorysummary}
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
              className="text-sm text-white-A700 tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14"
            >
              {props?.categoryname1}
            </Text>
            <Text
              className="text-blue_gray-300 text-sm tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14Bluegray300"
            >
              {props?.categoryamount1}
            </Text>
            <Text
              className="text-sm text-white-A700 tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14"
            >
              {props?.categorysummary1}
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
              className="text-sm text-white-A700 tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14"
            >
              {props?.categoryname2}
            </Text>
            <Text
              className="text-blue_gray-300 text-sm tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14Bluegray300"
            >
              {props?.categoryamount2}
            </Text>
            <Text
              className="text-sm text-white-A700 tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14"
            >
              {props?.categorysummary2}
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
              className="text-sm text-white-A700 tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14"
            >
              {props?.categoryname3}
            </Text>
            <Text
              className="text-blue_gray-300 text-sm tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14Bluegray300"
            >
              {props?.categoryamount3}
            </Text>
            <Text
              className="text-sm text-white-A700 tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14"
            >
              {props?.categorysummary3}
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
              className="text-sm text-white-A700 tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14"
            >
              {props?.categoryname4}
            </Text>
            <Text
              className="text-blue_gray-300 text-sm tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14Bluegray300"
            >
              {props?.categoryamount4}
            </Text>
            <Text
              className="text-sm text-white-A700 tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14"
            >
              {props?.categorysummary4}
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
              className="text-sm text-white-A700 tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14"
            >
              {props?.categoryname5}
            </Text>
            <Text
              className="text-blue_gray-300 text-sm tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14Bluegray300"
            >
              {props?.categoryamount5}
            </Text>
            <Text
              className="text-sm text-white-A700 tracking-[0.44px] w-auto"
              size="txtOpenSansRegular14"
            >
              {props?.categorysummary5}
            </Text>
          </div>
          <Img
            className="h-5 w-3.5"
            src="images/img_arrowup_red_500.svg"
            alt="arrowup"
          />
        </div>
      </List>
    </>
  );
};

BubbleChartTableindicator.defaultProps = {
  categoryname: "Travel",
  categoryamount: "760",
  categorysummary: "2,540",
  categoryname1: "Presentation",
  categoryamount1: "650",
  categorysummary1: "2,304",
  categoryname2: "Business",
  categoryamount2: "612",
  categorysummary2: "2,140",
  categoryname3: "Finance",
  categoryamount3: "598",
  categorysummary3: "1,976",
  categoryname4: "Travel",
  categoryamount4: "513",
  categorysummary4: "1,903",
  categoryname5: "Startup",
  categoryamount5: "498",
  categorysummary5: "1,320",
};

export default BubbleChartTableindicator;
