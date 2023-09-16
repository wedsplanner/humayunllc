import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import looshayBanner from "../../../assets/images/looshay-banner.png";
import Latest from "../latest/Latest";
import Featured from "../featured/Featured";
import Features from "../features/Features";
import Footer from "../footer/Footer";
const Home = () => {
  return (

      <div className="container mb-4">
        <img src={looshayBanner} alt="banner" width={"100%"} />
        <Features />
        <Latest />
        {/* <Featured /> */}
      </div>


  );
};

export default Home;
