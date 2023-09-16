import React from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { IoDiamondSharp } from "react-icons/io5";
import { RiCupFill } from "react-icons/ri";
import { BiAnchor } from "react-icons/bi";

const Features = () => {
  return (
    <div
      className="container mt-5"
      style={{ background: "#F8F8F8", padding: "30px" }}
    >
      <div className="row">
        <div className="col-lg-3 d-flex gap-3" style={{borderRight: "2px solid black"}}>
          <GiCommercialAirplane color="green" size={"40px"} />
          <span>
            <b>Free Shipping </b> on all orders above <b>$50</b>
          </span>
        </div>
        
        <div className="col-lg-3 d-flex gap-3" style={{borderRight: "2px solid black"}}>
          <IoDiamondSharp color="green" size={"40px"} />
          <span>
            <b>Join Risk Free </b> 30 days refund.
          </span>
        </div>
        <div className="col-lg-3 d-flex gap-3" style={{borderRight: "2px solid black"}}>

          <RiCupFill color="green" size={"40px"} />
          <span>
            <b>Support 24/7 </b>
          </span>
        </div>
        <div className="col-lg-3 d-flex gap-3">
        <BiAnchor color="green" size={"40px"} />
          <span>
            <b>100% Safe </b> Secure Shopping.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Features;
