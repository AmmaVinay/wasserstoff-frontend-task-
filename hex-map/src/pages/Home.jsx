import React from "react";
import Worldhexagonmap from '../pages/Worldhexagonmap';
import BubblechartOne from "../pages/BubblechartOne";

const Home = (props) => {
  return (
    <>
      <Worldhexagonmap />
      <BubblechartOne />
    </>
  );
};

Home.defaultProps = {};

export default Home;
