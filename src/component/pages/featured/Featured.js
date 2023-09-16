import React from 'react'
import "./featured.css";
import { AiOutlineHeart } from "react-icons/ai";
const Featured = () => {
    const data = [
        {
          id: 1,
          name: "Madden NFL 24",
          price: 69.88,
          img: "https://i5.walmartimages.com/seo/Madden-NFL-24-PlayStation-4_82da5c2d-4c70-4041-8dbb-6bd15ce58ad4.8d795bb049db16d28ad2d4dbda58a93b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
        },
        {
          id: 2,
          name: "NBA 2K24",
          price: 69.88,
          img: "https://i5.walmartimages.com/seo/NBA-2K24-Kobe-Bryant-Edition-PRE-PURCHASE-Xbox-Series-X-S-Digital_8e28c232-f248-4e5b-b238-531f5d757a85.81a9b10d582d1dc8336fe663ad475a2a.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
        },
        {
          id: 3,
          name: "GTRACING Gaming Chair",
          price: 69.88,
          img: "https://i5.walmartimages.com/seo/GTRACING-Gaming-Chair-Office-Chair-PU-Leather-with-Footrest-Adjustable-Headrest-Red_c0adb3a3-5cc8-4ec6-9061-f0a6658a8e54.4301fc411679f94ea4dfd5113c314c90.png?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        },
        {
          id: 4,
          name: "Microsoft Xbox Wireless Controller - Pulse Red",
          price: 89.99,
          img: "https://i5.walmartimages.com/seo/Microsoft-Xbox-Wireless-Controller-Pulse-Red_c3ceaa96-974b-4bf3-84a2-e95734c7065b.fa72160a7bc41ba3f6e107be7b6afe7b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
        },
        {
          id: 4,
          name: "Xbox Starfield Collectors Edition Wireless Headset",
          price: 123.99,
          img: "https://i5.walmartimages.com/seo/Xbox-Starfield-Collectors-Edition-Wireless-Headset-Bluetooth-Connectivity-For-Series-X-S-XBX1-Windows-10-Feat-Auto-mute-voice-isolation-Comfortable-i_a8dc9684-f18c-44c8-a00b-f16819d7f997.c2993fb698038f2d6d7af7048dcb87d1.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
        },
      ];
  return (
    <div className="container">
      <div className="featured">
        <h1 style={{fontWeight:"bold", borderBottom:"1px solid grey", width:"fit-content"}}>Featured</h1>

        <div className="featuredCards">
          {data.map((item) => (
            <div className="featuredCard">
              <div style={{ display: "flex", position: "relative" }}>
                <img
                  src={item.img}
                  alt="img1"
                  style={{ width: "300px", height: "250px" }}
                />
                <div style={{ position: "absolute", top: 0, right: "5px" }}>
                  <span
                    class="badge bg-info rounded-0"
                    style={{
                      width: "40px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    New
                  </span>
                  <button
                    style={{
                      position: "absolute",
                      border: "none",
                      // background: "white",
                      marginTop: "10px",
                      right: "5px",
                      width: "30px",
                      borderRadius: "50%",
                      height: "30px",
                    }}
                  >
                    <AiOutlineHeart />
                  </button>
                </div>
              </div>

              <span
                style={{
                  color: "#21ABE2",
                  fontWeight: "600",
                  fontSize: "22px",
                }}
              >
                {item.name}
              </span>

              <span style={{ fontWeight: "600", fontSize: "20px" }}>
                $ {item.price}
              </span>

              <button
                style={{
                  border: "1px solid#21ABE2",
                  padding: "10px",
                  width: "100%",
                  background: "white",
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#21ABE2",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Featured