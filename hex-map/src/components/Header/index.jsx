import React from "react";
import { Text } from "components";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { LuUser } from "react-icons/lu";

import { Link } from "react-router-dom";
const Header = (props) => {
    return(
<header className={`shadow-lg w-full mt-0 bg-white-A700  pb-3 ${props}`}>
        <div className="flex flex-col gap-[11px] items-center justify-center mt-3.5 mx-auto w-[94%]">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
            <div className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-end justify-between w-[49%] md:w-full">
            <div className="flex flex-row gap-2.5 items-start justify-start md:mt-0 mt-1.5 w-[100%] md:w-full">
              <div className="h-[23px] light_blue_A400_indigo_900_border outline outline-[4px] rounded-[11px] shadow-bs2 w-[23px]">
                <img
                  src="https://photos.wellfound.com/startups/i/8084075-60d89693573034759bef608ef0d519d3-medium_jpg.jpg?buster=1606316081"
                  alt="logo"
                />
              </div>
              <Text
                className="sm:text-[16.51px] md:text-[18.51px] text-[20.51px] text-black-900"
                size="txtArchivoVFBetaRegular2051"
              >
                WASSERSTOFF
              </Text>
            </div>
            </div>
            <ul className="flex sm:flex-1 sm:flex-col flex-row gap-[84px] sm:hidden items-center justify-start md:ml-[0] ml-[84px] w-auto sm:w-full common-row-list">
              <li>
                <form className="form-inline flex justify-center items-center">
                  <input
                    className="form-control rounded-lg  mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </li>
              <li>
                <Text
                  className="text-base text-blue_gray-500 tracking-[0.44px]"
                  size="txtOpenSansRegular16Bluegray500"
                >
                  Statistics
                </Text>
              </li>
              <li>
                <Text
                  className="text-base text-blue_gray-500 tracking-[0.44px]"
                  size="txtOpenSansRegular16"
                >
                  <Link to="/" style={{ textDecoration: 'underline' }}>Overview</Link>
                </Text>
              </li>
              <li>
                <Text
                  className="text-base text-blue_gray-500 tracking-[0.44px]"
                  size="txtOpenSansRegular16Bluegray500"
                >
                  Dashboard
                </Text>
              </li>
              <li>
                <Text
                  className="text-base text-blue_gray-500 tracking-[0.44px]"
                  size="txtOpenSansRegular16Bluegray500"
                >
                  Analytics
                </Text>
              </li>
            </ul>
            <div><LuUser size={20} className="h-[21px] md:ml-[0] ml-[211px] text-blue_gray-500" />
</div>
<div> <TbAdjustmentsHorizontal size={10} className="h-5 ml-8 md:ml-[0] w-5 text-blue_gray-500" />
</div>
           </div>
         </div>
      </header>

    )
}
export default Header