import React from "react";

 import Header from "components/Header";
import { Button, Img, Text } from "components";
import BubbleChartOneRowperiod from "components/BubbleChartOneRowperiod";
import BubbleChartOneTableindicator from "components/BubbleChartOneTableindicator";
import BubbleChartOneWidgetmsize from "components/BubbleChartOneWidgetmsize";
import BubbleChartOneWidgetmsize1 from "components/BubbleChartOneWidgetmsize1";
 
import "react-circular-progressbar/dist/styles.css";

const BubblechartOnePage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-archivo items-center justify-start mx-auto h-full w-full">
      <Header />
        <div className="flex flex-col items-center justify-start w-full">
           <div className="flex md:flex-col flex-row font-poppins md:gap-[50px] items-center justify-between max-w-[1861px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[16%] md:w-full">
              <Text
                className="sm:text-3xl md:text-[32px] text-[34px] text-black-900 tracking-[-0.44px]"
                size="txtPoppinsRegular34"
              >
                Design faster
              </Text>
              <BubbleChartOneWidgetmsize className="bg-white-A700 flex flex-col font-roboto gap-[30px] items-center justify-start mt-[23px] py-5 rounded-[10px] shadow-bs1 w-auto" />
              <BubbleChartOneWidgetmsize1 className="bg-deep_purple-A200 flex flex-col gap-[18px] items-center mt-7 sm:px-5 px-[30px] py-5 rounded-[10px] shadow-bs1 w-auto" />
              <BubbleChartOneTableindicator className="bg-white-A700 flex flex-col font-roboto gap-3.5 items-center mt-7 sm:px-5 px-[30px] py-5 rounded-[10px] shadow-bs1 w-auto" />
            </div>
            <div className="bg-blue_gray-50_01 flex md:flex-1 flex-col font-opensans items-end justify-start p-9 sm:px-5 rounded-bl-[73px] rounded-tl-[73px] w-[82%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end mb-1.5 mr-[23px] w-[86%] md:w-full">
                <div className="flex flex-col gap-[15px] justify-start w-3/4 md:w-full">
                  <Text
                    className="md:ml-[0] ml-[464px] text-[10px] text-blue_gray-800 tracking-[5.00px] uppercase"
                    size="txtOpenSansBold10"
                  >
                    Timeline
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                    <div className="bg-gradient  h-[47px] md:mt-0 mt-[93px] rounded-[23px] shadow-bs5 w-[47px]"></div>
                    <div className="md:h-[778px] h-[873px] relative w-[95%] md:w-full">
                      <div className="absolute h-[778px] inset-x-[0] mx-auto top-[0] w-full">
                        <div className="absolute h-[778px] inset-[0] justify-center m-auto w-[778px] md:w-full">
                          <div className="bg-white-A700 h-[648px] m-auto rounded-[50%] shadow-bs1 w-[648px]"></div>
                          <div className="absolute border-[20px] border-solid border-white-A700_4c h-[778px] inset-[0] justify-center m-auto rounded-[50%] w-[778px]"></div>
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-end justify-center m-auto p-[46px] md:px-10 sm:px-5 w-full"
                          style={{
                            backgroundImage: "url('images/img_group416.svg')",
                          }}
                        >
                          <div className="flex flex-col md:gap-10 gap-[93px] justify-start mr-[85px] mt-[3px] w-[72%] md:w-full">
                            <div className="flex flex-row items-center justify-between mr-[50px] w-[91%] md:w-full">
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-center text-white-A700 text-xs tracking-[0.40px]"
                                  size="txtRobotoRegular12"
                                >
                                  Development
                                </Text>
                                <Text
                                  className="mt-[3px] text-base text-center text-white-A700 tracking-[0.44px]"
                                  size="txtPoppinsLight16WhiteA700"
                                >
                                  $31,657
                                </Text>
                              </div>
                              <div className="flex flex-col md:gap-10 gap-[150px] justify-start w-[58%]">
                                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[81px]">
                                  <Text
                                    className="text-center text-white-A700 text-xs tracking-[0.40px]"
                                    size="txtRobotoRegular12"
                                  >
                                    Finance
                                  </Text>
                                  <Text
                                    className="mt-1 text-base text-center text-white-A700 tracking-[0.44px]"
                                    size="txtPoppinsLight16WhiteA700"
                                  >
                                    {" "}
                                    $23,657
                                  </Text>
                                </div>
                                <div className="flex flex-row items-start justify-between w-full">
                                  <div className="flex flex-col items-center justify-start mt-[11px]">
                                    <Text
                                      className="text-base text-center text-white-A700 tracking-[0.44px]"
                                      size="txtPoppinsLight16WhiteA700"
                                    >
                                      Investments
                                    </Text>
                                    <Text
                                      className="text-center text-white-A700 text-xl tracking-[0.15px]"
                                      size="txtPoppinsSemiBold20WhiteA700"
                                    >
                                      $76,644
                                    </Text>
                                    <Text
                                      className="text-center text-indigo-50 text-sm tracking-[0.44px]"
                                      size="txtRobotoRegular14Indigo50"
                                    >
                                      3 month
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start">
                                    <Text
                                      className="text-center text-white-A700 text-xs tracking-[0.40px]"
                                      size="txtRobotoRegular12"
                                    >
                                      Business
                                    </Text>
                                    <Text
                                      className="mt-1 text-base text-center text-white-A700 tracking-[0.44px]"
                                      size="txtPoppinsLight16WhiteA700"
                                    >
                                      $21,987
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row items-end justify-between md:ml-[0] ml-[51px] w-[91%] md:w-full">
                              <div className="flex flex-col items-center justify-start mt-3">
                                <Text
                                  className="text-base text-center text-white-A700 tracking-[0.44px]"
                                  size="txtPoppinsLight16WhiteA700"
                                >
                                  Design
                                </Text>
                                <Text
                                  className="text-center text-white-A700 text-xl tracking-[0.15px]"
                                  size="txtPoppinsSemiBold20WhiteA700"
                                >
                                  $32,982
                                </Text>
                                <Text
                                  className="text-center text-indigo-300 text-sm tracking-[0.44px]"
                                  size="txtRobotoRegular14Indigo300"
                                >
                                  3 month
                                </Text>
                              </div>
                              <div className="bg-gradient1  h-[75px] mb-1 rounded-[37px] shadow-bs6 w-[75px]"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-gradient2  bottom-[19%] h-[61px] left-[0] rounded-[30px] shadow-bs7 w-[61px]"></div>
                      <div className="absolute flex md:flex-col flex-row md:gap-10 gap-[62px] h-full inset-y-[0] items-start justify-start my-auto right-[9%] w-[79%]">
                        <div className="flex flex-col gap-3.5 items-center justify-start md:mt-0 mt-[719px] w-[16%] md:w-full">
                          <Button
                            className="flex h-[46px] items-center justify-center w-[46px]"
                            shape="round"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_close.svg"
                              alt="close"
                            />
                          </Button>
                          <div className="h-[90px] relative w-full">
                            <Text
                              className="m-auto md:text-5xl text-6xl text-center text-indigo-800 tracking-[-1.50px]"
                              size="txtPoppinsLight60"
                            >
                              204
                            </Text>
                            <Text
                              className="absolute inset-x-[0] mx-auto text-[10px] text-center text-indigo-800 top-[3%] tracking-[1.50px] uppercase w-max"
                              size="txtRobotoBold10"
                            >
                              Trend goods
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col md:gap-10 gap-[683px] items-center justify-start w-[52%] md:w-full">
                          <div className="bg-white-A700 flex flex-col items-center justify-start p-0.5 rounded-[18px] w-full">
                            <BubbleChartOneRowperiod className="flex flex-row gap-5 items-center justify-start w-auto" />
                          </div>
                          <div className="flex flex-col gap-[17px] items-center justify-start w-[54%] md:w-full">
                            <Button
                              className="flex h-[46px] items-center justify-center w-[46px]"
                              shape="round"
                              color="white_A700"
                              size="sm"
                              variant="fill"
                            >
                              <Img
                                className="h-6"
                                src="images/img_eye.svg"
                                alt="eye"
                              />
                            </Button>
                            <div className="md:h-[90px] h-[91px] relative w-full">
                              <Text
                                className="absolute h-max inset-[0] justify-center m-auto md:text-5xl text-6xl text-center text-indigo-800 tracking-[-1.50px] w-max"
                                size="txtPoppinsLight60"
                              >
                                65,540
                              </Text>
                              <Text
                                className="absolute inset-x-[0] mx-auto text-[10px] text-center text-indigo-800 top-[0] tracking-[1.50px] uppercase w-max"
                                size="txtRobotoBold10"
                              >
                                Shopping views
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-3.5 items-center justify-start md:mt-0 mt-[719px] w-[16%] md:w-full">
                          <Button
                            className="flex h-[46px] items-center justify-center w-[46px]"
                            shape="round"
                            color="white_A700"
                            size="sm"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_chart_indigo_a700.svg"
                              alt="chart"
                            />
                          </Button>
                          <div className="flex flex-col items-center justify-start pt-[3px] w-full">
                            <Text
                              className="text-[10px] text-center text-indigo-800 tracking-[1.50px] uppercase"
                              size="txtRobotoBold10"
                            >
                              Store dynamics
                            </Text>
                            <Text
                              className="md:text-5xl text-6xl text-center text-indigo-800 tracking-[-1.50px]"
                              size="txtPoppinsLight60"
                            >
                              324
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:gap-10 gap-[420px] items-start justify-start md:ml-[0] ml-[18px] w-[9%] md:w-full">
                  <div className="bg-gradient1  h-[105px] rounded-[52px] shadow-bs8 w-[105px]"></div>
                  <div className="bg-gradient  h-[47px] rounded-[23px] shadow-bs5 w-[47px]"></div>
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start md:ml-[0] ml-[152px] w-[4%] md:w-full">
                  <div className="bg-white-A700 flex flex-col gap-6 items-center justify-start p-2.5 rounded-lg shadow-bs1 w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_minus.svg"
                      alt="minus"
                    />
                  </div>
                  <Button
                    className="flex h-[46px] items-center justify-center w-[46px]"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  </Button>
                  <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start p-2.5 rounded-lg shadow-bs1 w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_node.svg"
                      alt="node"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_element.svg"
                      alt="element"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_path.svg"
                      alt="path"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-row font-roboto md:gap-10 items-center justify-between p-3 w-full">
            <Text
              className="ml-[54px] text-[10px] text-blue_gray-600 tracking-[1.50px] uppercase"
              size="txtRobotoBold10Bluegray600"
            >
              Orion data visualisation
            </Text>
            <Text
              className="mr-[54px] text-[10px] text-blue_gray-600 text-right tracking-[1.50px] uppercase"
              size="txtRobotoBold10Bluegray600"
            >
              2022
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default BubblechartOnePage;
