import React from "react";

import { Button, Img, Text } from "components";

const WorldHexagonMapInformerinfo = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="flex h-[70px] items-center justify-center rounded-[20px] w-[70px]"
          color="deep_purple_A200"
          size="md"
          variant="fill"
        >
          <Img className="h-8" src="images/img_activity.svg" alt="activity" />
        </Button>
        <div className="flex flex-col items-start justify-start w-auto">
          <Text
            className="text-indigo-800 text-xl tracking-[0.44px] w-auto"
            size="txtRobotoRegular20"
          >
            {props?.titletext}
          </Text>
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="text-indigo-800 text-xl tracking-[0.15px] w-auto"
              size="txtPoppinsSemiBold20"
            >
              {props?.amounttext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

WorldHexagonMapInformerinfo.defaultProps = {
  titletext: "Total earning",
  amounttext: "540,549",
};

export default WorldHexagonMapInformerinfo;
