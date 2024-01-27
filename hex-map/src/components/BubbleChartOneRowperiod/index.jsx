import React from "react";

import { Button, Text } from "components";

const BubbleChartOneRowperiod = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-end p-[5px]">
          <Text
            className="mt-1 text-black-900 text-center text-sm tracking-[0.44px]"
            size="txtRobotoRegular14Black900"
          >
            {props?.selectedperiod}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-end p-[5px]">
          <Text
            className="mt-1 text-black-900 text-center text-sm tracking-[0.44px]"
            size="txtRobotoRegular14Black900"
          >
            {props?.selectedperiod1}
          </Text>
        </div>
        <Button
          className="cursor-pointer font-bold font-mulish leading-[normal] min-w-[53px] rounded-[16px] text-[13px] text-center tracking-[0.02px]"
          color="indigo_A700_02"
          size="xs"
          variant="fill"
        >
          {props?.onbuttonclick}
        </Button>
        <div className="flex flex-col items-center justify-end p-[5px]">
          <Text
            className="h-[17px] mt-1 text-black-900 text-center text-sm tracking-[0.44px]"
            size="txtRobotoRegular14Black900"
          >
            {props?.selectedperiod2}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-end p-[5px]">
          <Text
            className="mt-1 text-black-900 text-center text-sm tracking-[0.44px]"
            size="txtRobotoRegular14Black900"
          >
            {props?.selectedprice}
          </Text>
        </div>
      </div>
    </>
  );
};

BubbleChartOneRowperiod.defaultProps = {
  selectedperiod: "1W",
  selectedperiod1: "1M",
  onbuttonclick: "3M",
  selectedperiod2: "1Y",
  selectedprice: "ALL",
};

export default BubbleChartOneRowperiod;
