import React from "react";

import { useNavigate } from "react-router-dom";
import "./latest.css";

const Latest = () => {
    const navigate = useNavigate();
  const data = [
    {
      id: 1,
      name: "Talenti Sorbetto",
      price: 20.99,
      img: "https://looshay.com/wp-content/uploads/2022/08/Talenti-Sorbetto-For-a-Delicious-Non-Dairy-Ice-Cream-Alternative-Roman-Raspberry-Made-With-Non-GMO-Ingredients-1-pint-320x320.jpg",
      description: [
        "Large capacity, reasonable storage, save space.",
        "16 pockets, in line with mom’s usage habits and must-go items when going out, with space for each item.",
        "Internal pocket for baby wet clothes",
        "USB charging port design, easy to use",
        "With sunshade cloth, baby sleeps without dazzling and sleeps better",
      ],
    },
    {
      id: 2,
      name: "Velveeta Shells & Cheese",
      price: 24.99,
      img: "https://looshay.com/wp-content/uploads/2022/08/Velveeta-Shells-Cheese-Original-Shell-Pasta-Cheese-Sauce-Meal-12-Ounce-Pack-of-3-320x320.jpg",
      description: [
        "Large capacity, reasonable storage, save space.",
        "16 pockets, in line with mom’s usage habits and must-go items when going out, with space for each item.",
        "Internal pocket for baby wet clothes",
        "USB charging port design, easy to use",
        "With sunshade cloth, baby sleeps without dazzling and sleeps better",
      ],
    },
    {
      id: 3,
      name: "Sarah's Candy Factory",
      price: 21.88,
      img: "https://looshay.com/wp-content/uploads/2022/08/Sarahs-Candy-Factory-Vanilla-Mini-Dehydrated-Marshmallow-Bits-in-Resealable-Bag-2lb-320x320.jpg",
      description: [
        "Large capacity, reasonable storage, save space.",
        "16 pockets, in line with mom’s usage habits and must-go items when going out, with space for each item.",
        "Internal pocket for baby wet clothes",
        "USB charging port design, easy to use",
        "With sunshade cloth, baby sleeps without dazzling and sleeps better",
      ],
    },
    {
      id: 4,
      name: "Ring Pop ",
      price: 26.99,
      img: "https://looshay.com/wp-content/uploads/2022/08/Ring-Pop-Individually-Wrapped-Bulk-Lollipop-20-Count-Summer-Variety-Pack-320x320.jpg",
      description: [
        "Large capacity, reasonable storage, save space.",
        "16 pockets, in line with mom’s usage habits and must-go items when going out, with space for each item.",
        "Internal pocket for baby wet clothes",
        "USB charging port design, easy to use",
        "With sunshade cloth, baby sleeps without dazzling and sleeps better",
      ],
    },
    {
      id: 5,
      name: "Jack Daniel's BBQ Sauce",
      price: 23.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/bd0e997c-738a-4b5a-a4d5-3185fdddab14.109a1f074278c5d7db1456d2ada1d539-320x320.jpeg",
      description: [
        "Large capacity, reasonable storage, save space.",
        "16 pockets, in line with mom’s usage habits and must-go items when going out, with space for each item.",
        "Internal pocket for baby wet clothes",
        "USB charging port design, easy to use",
        "With sunshade cloth, baby sleeps without dazzling and sleeps better",
      ],
    },
    {
      id: 6,
      name: "Yoplait Original Yogurt",
      price: 20.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/a06de140-f2d5-40d9-8520-74ddec42c6ec.fa4611e87cead6a809572e969933eae6-320x320.jpeg",
      description: [
        "Large capacity, reasonable storage, save space.",
        "16 pockets, in line with mom’s usage habits and must-go items when going out, with space for each item.",
        "Internal pocket for baby wet clothes",
        "USB charging port design, easy to use",
        "With sunshade cloth, baby sleeps without dazzling and sleeps better",
      ],
    },
    {
      id: 7,
      name: "Creamy Peanut Butter",
      price: 25.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/9af1fcbc-55ec-44e1-a981-29ff1918f944.fcdac17e283335da82cd58e1bd27a84d-320x320.jpeg",
      description: [
        "Large capacity, reasonable storage, save space.",
        "16 pockets, in line with mom’s usage habits and must-go items when going out, with space for each item.",
        "Internal pocket for baby wet clothes",
        "USB charging port design, easy to use",
        "With sunshade cloth, baby sleeps without dazzling and sleeps better",
      ],
    },
    {
      id: 8,
      name: "Honey 12 OZ",
      price: 28.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/8d636ec3-92d5-4cc6-ac9e-eb982dc9f581.20b7344931a509c7875080a6e5d940a0-320x320.jpeg",
      description: [
        "Large capacity, reasonable storage, save space.",
        "16 pockets, in line with mom’s usage habits and must-go items when going out, with space for each item.",
        "Internal pocket for baby wet clothes",
        "USB charging port design, easy to use",
        "With sunshade cloth, baby sleeps without dazzling and sleeps better",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="latest">
        <h1 style={{fontWeight:"bold", borderBottom:"1px solid grey", width:"fit-content"}}>Latest</h1>

        <div className="latestCards">
          {data.map((item) => (
            <div className="latestCard" >
              <div 
              style={{ display: "flex", position: "relative" }}
              >
                <img
                  src={item.img}
                  alt="img1"
                  style={{ width: "300px", height: "250px" }}
                />
                {/* <div style={{ position: "absolute", top: 0, right: "5px" }}>
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
                </div> */}
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

              <span style={{ fontWeight: "600", fontSize: "20px", textAlign:"center" }}>
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
                  marginTop:"15px",
                  cursor:"pointer"
                }}
                onClick={() => navigate(`/detail/${item.id}`, {state:item})}
              >
                Buy Now
              </button>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
