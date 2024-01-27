import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const BubbleChartOneWidgetmsize = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col gap-4 items-center justify-start sm:px-5 px-[30px] rounded-[10px] w-auto md:w-full">
          <div className="flex flex-col h-[146px] items-center justify-start w-[146px]">
            <div className="h-[146px] relative w-[146px]">
              <div className="absolute bg-gray-900_01 border-4 border-gray-300 border-solid h-[139px] inset-[0] justify-center m-auto rotate-[90deg] rounded-[69px] w-[139px]"></div>
              <div className="absolute bg-gray-900_01 border-4 border-gray-300 border-solid h-[103px] inset-[0] justify-center m-auto rotate-[90deg] rounded-[51px] w-[103px]"></div>
              <div className="absolute border-[10px] border-orange-300 border-solid h-[108px] inset-[0] justify-center m-auto rotate-[90deg] rounded-[50%] w-[108px]"></div>
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
              <Button
                className="absolute flex h-[59px] inset-[0] items-center justify-center m-auto rounded-[29px] w-[59px]"
                color="gray_50_01"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-[26px]"
                  src="images/img_icondiamond.svg"
                  alt="icondiamond"
                />
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-start w-auto">
              <Text
                className="text-center text-indigo-800 text-xl tracking-[0.44px] w-auto"
                size="txtRobotoRegular20"
              >
                {props?.nameOne}
              </Text>
            </div>
            <div className="flex flex-row gap-1.5 items-start justify-start w-auto">
              <Text
                className="text-[22px] text-center text-indigo-800 sm:text-lg md:text-xl"
                size="txtPoppinsSemiBold22"
              >
                {props?.price}
              </Text>
              <div className="flex flex-row h-[26px] md:h-auto items-start justify-start">
                <Img
                  className="h-full w-3.5"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
                <Text
                  className="text-center text-green-A700 text-sm tracking-[0.44px]"
                  size="txtRobotoRegular14GreenA700"
                >
                  {props?.percent}
                </Text>
              </div>
            </div>
            <Text
              className="text-center text-indigo-800_90 text-xs tracking-[0.40px] w-auto"
              size="txtRobotoRegular12Indigo80090"
            >
              {props?.priceOne}
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-[11px] items-start justify-start sm:px-5 px-[30px] rounded-[10px] w-auto md:w-full">
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Text
              className="text-indigo-800 text-sm tracking-[0.44px]"
              size="txtRobotoRegular14"
            >
              {props?.nameTwo}
            </Text>
            <Text
              className="text-indigo-800_90 text-sm tracking-[0.44px]"
              size="txtRobotoRegular14Indigo80090"
            >
              {props?.amount}
            </Text>
            <Img
              className="h-[21px] w-[68px]"
              src="images/img_graph.svg"
              alt="graph"
            />
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Text
              className="text-indigo-800 text-sm tracking-[0.44px]"
              size="txtRobotoRegular14"
            >
              {props?.nameThree}
            </Text>
            <Text
              className="text-indigo-800_90 text-sm tracking-[0.44px]"
              size="txtRobotoRegular14Indigo80090"
            >
              {props?.amountOne}
            </Text>
            <Img
              className="h-[21px] w-[68px]"
              src="images/img_television.svg"
              alt="television"
            />
          </div>
          <div className="flex flex-row gap-4 items-start justify-start w-auto">
            <Text
              className="text-indigo-800 text-sm tracking-[0.44px]"
              size="txtRobotoRegular14"
            >
              {props?.nameFour}
            </Text>
            <Text
              className="text-indigo-800_90 text-sm tracking-[0.44px]"
              size="txtRobotoRegular14Indigo80090"
            >
              {props?.amountTwo}
            </Text>
            <Img
              className="h-[21px] w-[68px]"
              src="images/img_television_orange_300.svg"
              alt="television_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

BubbleChartOneWidgetmsize.defaultProps = {
  nameOne: "Total earning",
  price: "$12,875",
  percent: "2%",
  priceOne: "Compared to $21,504 last year",
  nameTwo: "Presentation",
  amount: "862",
  nameThree: "Development",
  amountOne: "753",
  nameFour: "Research",
  amountTwo: "553",
};

export default BubbleChartOneWidgetmsize;
