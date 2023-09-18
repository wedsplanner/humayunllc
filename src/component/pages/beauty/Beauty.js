import React from "react";
import { useNavigate } from "react-router-dom";

const Beauty = () => {
    const navigate = useNavigate();
  const data = [
    {
      id: 1,
      name: "Conditioner for Moisture Control", 
      price: 19.88,
      img: "https://looshay.com/wp-content/uploads/2022/07/71D-QIvrXGL._SL1500_-320x320.jpg",
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
      name: "Electric Makeup Brush",
      price: 69.88,
      img: "https://looshay.com/wp-content/uploads/2022/07/61Aw6X8sd6L._SL1500_-320x320.jpg",
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
      name: "Artificial Fiber Foundation",
      price: 29.88,
      img: "https://looshay.com/wp-content/uploads/2022/07/HBE-42046-1-320x320.jpg",
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
      name: "Bath and Handwas",
      price: 39.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/bath-handwash-320x320.png",
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
      name: "Jade Roller with Gua Sha",
      price: 27.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/HBE-53015-1-320x320.jpg",
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
      name: "La Prairie Luxe Cream",
      price: 23.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/51OIrsw0ajL._SL1081_-320x320.jpg",
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
      name: "Makeup Mist & Set",
      price: 22.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/61UfEG10oL._SL1500_-320x320.jpg",
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
      name: "HydraForce BB",
      price: 25.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/51wBX4clFoL._SL1500_-320x320.jpg",
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
    <div className="container mb-4">
      <div className="mt-5">
        <span style={{ fontWeight: "bold", fontSize: "26px" }}>
          Category: Beauty and Personal Care
        </span>
      </div>
      <div className="featuredCards">
        {data.map((item) => (
          <div className="featuredCard">
            <div style={{ display: "flex", position: "relative" }}>
              <img
                src={item.img}
                alt="img1"
                style={{ width: "300px", height: "250px" }}
              />
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

            <span
              style={{
                fontWeight: "600",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              $ {item.price}
            </span>

            <button
              style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                border: "1px solid#21ABE2",
                padding: "10px",
                width: "100%",
                background: "white",
                fontSize: "18px",
                fontWeight: "bold",
                color: "#21ABE2",
                marginTop: "15px",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/detail/${item.id}`, {state:item})}
            >
              Buy Now
            </button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beauty;
