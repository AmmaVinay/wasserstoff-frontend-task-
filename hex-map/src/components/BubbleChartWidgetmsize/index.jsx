import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Img, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const BubbleChartWidgetmsize = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-gray-900_02 flex flex-col gap-4 items-center justify-start sm:px-5 px-[30px] py-5 rounded-[10px] w-auto">
          <div className="flex flex-col h-[146px] items-center justify-start w-[146px]">
            <div className="h-[146px] relative w-[146px]">
              <div className="absolute bg-gray-900_02 border-4 border-black-900_01 border-solid h-[139px] inset-[0] justify-center m-auto rotate-[90deg] rounded-[69px] w-[139px]"></div>
              <div className="absolute bg-gray-900_02 border-4 border-black-900_01 border-solid h-[103px] inset-[0] justify-center m-auto rotate-[90deg] rounded-[51px] w-[103px]"></div>
              <div className="absolute border-[10px] border-solid h-[108px] inset-[0] justify-center m-auto purple_A200_deep_purple_A400_01_border3 rotate-[90deg] rounded-[50%] w-[108px]"></div>
              <div className="!w-[146px] absolute border-solid h-[146px] inset-[0] justify-center m-auto overflow-visible">
                <CircularProgressbar
                  className="!w-[146px] absolute border-solid h-[146px] inset-[0] justify-center m-auto overflow-visible"
                  value={24}
                  strokeWidth={1}
                  styles={{
                    trail: { strokeWidth: 1, stroke: "" },
                    path: {
                      strokeLinecap: "square",
                      height: "100%",
                      transformOrigin: "center",
                      transform: "rotate(-22deg)",
                    },
                  }}
                ></CircularProgressbar>
              </div>
              <div className="!w-[146px] absolute border-solid h-[146px] inset-[0] justify-center m-auto overflow-visible">
                <CircularProgressbar
                  className="!w-[146px] absolute border-solid h-[146px] inset-[0] justify-center m-auto overflow-visible"
                  value={9}
                  strokeWidth={1}
                  styles={{
                    trail: { strokeWidth: 1, stroke: "" },
                    path: {
                      strokeLinecap: "square",
                      height: "100%",
                      transformOrigin: "center",
                      transform: "rotate(90deg)",
                    },
                  }}
                ></CircularProgressbar>
              </div>
              <div className="absolute bg-black-900_01 flex flex-col h-max inset-[0] items-center justify-center m-auto p-4 rounded-[29px] w-[59px]">
                <div className="flex flex-col h-[26px] items-center justify-start w-[26px]">
                  <Img
                    className="h-[26px] w-[26px]"
                    src="images/img_icondiamond_blue_gray_500.svg"
                    alt="icondiamond"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-center text-white-A700 text-xl tracking-[0.44px] w-auto"
                size="txtOpenSansRegular20"
              >
                {props?.name}
              </Text>
            </div>
            <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
              <Text
                className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                size="txtOpenSansBold24"
              >
                {props?.price}
              </Text>
              <div className="flex flex-row h-[26px] md:h-auto items-start justify-start">
                <Img
                  className="h-full w-3.5"
                  src="images/img_arrowup_green_400.svg"
                  alt="arrowup"
                />
                <Text
                  className="text-center text-green-400 text-sm tracking-[0.44px]"
                  size="txtOpenSansRegular14Green400"
                >
                  {props?.percent}
                </Text>
              </div>
            </div>
            <Text
              className="text-[13px] text-center text-white-A700_90 tracking-[0.02px] w-auto"
              size="txtMuliRegular13"
            >
              {props?.priceOne}
            </Text>
          </div>
        </div>
        <div className="bg-gray-900_02 flex flex-col gap-[11px] items-start justify-start sm:px-5 px-[30px] py-5 rounded-[10px] w-[291px] md:w-full">
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Text
              className="text-sm text-white-A700 tracking-[0.44px]"
              size="txtOpenSansRegular14"
            >
              {props?.nameOne}
            </Text>
            <Text
              className="text-blue_gray-300 text-sm tracking-[0.44px]"
              size="txtOpenSansRegular14Bluegray300"
            >
              {props?.amount}
            </Text>
            <Img
              className="md:h-auto h-full object-cover w-[68px]"
              src="images/img_graph_black_900_02.png"
              alt="graph"
            />
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Text
              className="text-sm text-white-A700 tracking-[0.44px]"
              size="txtOpenSansRegular14"
            >
              {props?.nameTwo}
            </Text>
            <Text
              className="text-blue_gray-300 text-sm tracking-[0.44px]"
              size="txtOpenSansRegular14Bluegray300"
            >
              {props?.amountOne}
            </Text>
            <Img
              className="md:h-auto h-full object-cover w-[68px]"
              src="images/img_graph_black_900_02_21x68.png"
              alt="graph_One"
            />
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Text
              className="text-sm text-white-A700 tracking-[0.44px]"
              size="txtOpenSansRegular14"
            >
              {props?.nameThree}
            </Text>
            <Text
              className="text-blue_gray-300 text-sm tracking-[0.44px]"
              size="txtOpenSansRegular14Bluegray300"
            >
              {props?.amountTwo}
            </Text>
            <Img
              className="md:h-auto h-full object-cover w-[68px]"
              src="images/img_graph_21x68.png"
              alt="graph_Two"
            />
          </div>
        </div>
      </div>
    </>
  );
};

BubbleChartWidgetmsize.defaultProps = {
  name: "Total earning",
  price: "$12,875",
  percent: "2%",
  priceOne: "Compared to $21,504 last year",
  nameOne: "Presentation",
  amount: "862",
  nameTwo: "Development",
  amountOne: "753",
  nameThree: "Research",
  amountTwo: "553",
};

export default BubbleChartWidgetmsize;
