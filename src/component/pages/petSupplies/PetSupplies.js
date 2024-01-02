import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const PetSupplies = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      name: "1 Pair Pet Grooming Glove Deshedding Brush Hair Remover Mitt Massage Tool – Blue",
      price: 20.88,
      img: "https://ethereal-compras.com/wp-content/uploads/2023/11/3-2.jpg",
      description: [
        "High quality silicone material, will give your pets the true touch feeling.",
        "The hair of your pets will stick to the gloves, easy to peel and throw away hair.",
        " Remove hair easily, help you make your house or car cleaner.",
        "With mesh net material, will be comfortable for using in summer.",
        "Five fingers glove for left and right hands with velcro, free size for big or small hands.",
      ],
    },
    {
      id: 2,
      name: "250ML Pet Dog Water Dispenser Portable Outdoor Drinking Feeding Bottle Feeder Bowl – Red",
      price: 15.45,
      img: "https://ethereal-compras.com/wp-content/uploads/2023/11/1-2.jpg",
      description: [
        "Material: Plastic",
        "Type: Pet water bottle",
        "Volume: 250ml, 500ml",
        "Size: 250ml: 17 * 8 * 8cm; 500ml: 24 * 8 * 8cm",
        "Color: Red/Yellow/Blue/Pink",
      ],
    },
    {
      id: 3,
      name: "Dog Sucking Water Drinking Bottles Environmentally Friendly Material Hangable",
      price: 22.88,
      img: "https://ethereal-compras.com/wp-content/uploads/2023/11/2-2.jpg",
      description: [
        "Hangable pet water drinker.",
        "Made of PP material which is eco-friendly, pet-safe materials.",
        "Dual hooks design for easy mounting.",
        "Recommended for puppies, kitties, hamsters.",
        "The ball and the mouth part of the water pipe are made of steel to prevent rusting."
    ],
    },
    {
      id: 4,
      name: "Extra Strong Reflective Rope Dog Lead With Foam Padded Handle Leash – Yellow",
      price: 24.99,
      img: "https://ethereal-compras.com/wp-content/uploads/2023/11/4-3.jpg",
      description:[
        "The deluxe reflective rope dog lead is designed with strength and durability at its heart.",
        "The lead is manufactured using the best quality mountain climbing rope for optimum strength.",
        "Each join is carefully hand-stitched and glued for unrivaled durability.",
        "Our lead (or leash) utilizes reflective stitching to keep you and your pet safe even during dark night-time walks.",
        "Also incorporated a 360-degree swivel hook so your excitable dog cannot run themselves into a bit of a tangle."
    ],
    },
    {
      id: 5,
      name: "Folding Pet Car Seat Safe Handbag Cat Puppy Travel Carrier Dog Bed Bag Basket – Blue Bones",
      price: 24.56,
      img: "https://ethereal-compras.com/wp-content/uploads/2023/11/5-2.jpg",
      description: [
        "Pet Dog Booster Seat",
        "Car Travel Accessories",
        "pink, blue, grey, black",
        "Oxford PVC coating/PVC mesh",
        "Bone & Paw",
        "40cmx32cmx25cm (LxWxH)",
        "Built-in PE board (front and back) + two PVC tubes (two sides) to prevent it from collapsing",
        "1000g",
        "no package"
    ],
    },
    {
      id: 6,
      name: "Lightweight Dog Puppy Cat Pet Long Handle Pooper Scooper Pick Up Excreta Cleaner – Black",
      price: 17.99,
      img: "https://ethereal-compras.com/wp-content/uploads/2023/11/0-300x300.jpg",
      description: [
        "Designed for easy one-handed pick-ups on all surfaces.",
        "Made of plastic with a wide and comfortable grip.",
        "Makes cleanup quick, easy, and sanitary.",
        "Pick up waste easily with the one-handed scooper.",
        "Lightweight, environmentally friendly, convenient, and easy to store.",
        "Healthy and convenient for pet cleaning.",
        "With a handle, convenient to use."
    ],
    },
    {
      id: 7,
      name: "Non-Slip Silicone Dog Lick Pad Pet Food Feeder Bowl Puppy Cat Lick Mat Healthy – Yellow",
      price: 15.99,
      img: "https://ethereal-compras.com/wp-content/uploads/2023/11/6-2.jpg",
      description:  [
        "It is a cat and dog lick mat that helps promote calmness as they lick their favorite snack from the textured surface providing your cat or dog anxiety relief.",
        "But it’s so much more than a calming treat mat.",
        "Also a fun, engaging & tasty interactive dog toy, dog puzzle, or cat puzzle toy.",
        "Great for hygiene by scraping away and triggering saliva.",
        "A slow feeder dog bowl that improves digestion and minimizes bloat.",
        "A training reward for excellent behavior or for dog or puppy training."
    ],
    },
    {
      id: 8,
      name: "Pet Dog Car Sear Belt Lead Strap Safety Harness Leash Restraint Car Van Travel – Blue",
      price: 21.99,
      img: "https://ethereal-compras.com/wp-content/uploads/2023/11/9-2.jpg",
      description: [
        "Keep your dog/cat safety in the car.",
        "Easy to use, simply clip into the existing seat belt mechanism.",
        "The safety leash is made from nylon, providing a slight amount of stretch to absorb shock in the case of a sudden stop.",
        "The unique leash design integrates with the vehicle’s seat belt tensioning device.",
        "Providing range of motion while traveling, but in the case of a sudden stop it locks in place to keep pets secure.",
        "Easy to load and unload your pet, and installs easily in ALL vehicles."
    ],
    },
  ];
  return (
    <div className="container mb-4">
      <div className="mt-5">
        <span style={{ fontWeight: "bold", fontSize: "26px" }}>
          Category: Pet Supplies
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
                cursor: "pointer",
              }}
              onClick={() => navigate(`/detail/${item.id}`, { state: item })}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetSupplies;
