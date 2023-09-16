import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Gaming = () => {
  const data = [
    {
      id: 1,
      name: "Baby Changing Bag",
      price: 29.88,
      img: "https://looshay.com/wp-content/uploads/2022/07/C0002704A-1-320x320.jpg",
    },
    {
      id: 2,
      name: "Baby Jumping Chair",
      price: 19.88,
      img: "https://looshay.com/wp-content/uploads/2022/07/C0011185A-1-320x320.jpg",
    },
    {
      id: 3,
      name: "Basic Knit Pompom",
      price: 21.88,
      img: "https://looshay.com/wp-content/uploads/2022/07/k121-320x320.jpg",
    },
    {
      id: 4,
      name: "Boys Yellow Hooded",
      price: 24.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/k71-320x320.jpg",
    },
    {
      id: 5,
      name: "Cetaphill baby wash",
      price: 13.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/cetaphil-320x320.jpg",
    },
    {
      id: 6,
      name: "Baby Bottle Warmer",
      price: 43.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/fast-baby-320x320.jpg",
    },
    {
      id: 7,
      name: "Johnson's Baby Lotion",
      price: 20.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/johnson-baby-lotion-320x320.jpeg",
    },
    {
      id: 8 ,
      name: "Graco TurboBooster",
      price: 53.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/graco-turbobooster-320x320.jpeg",
    },
  ];
  return (
    <div className="container mb-4">
      <div className="mt-5">
        <span style={{ fontWeight: "bold", fontSize: "26px" }}>
          Category: Baby
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
                marginTop: "15px",
              }}
            >
              Buy Now
            </button>
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
  );
};

export default Gaming;
