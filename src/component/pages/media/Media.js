import React from 'react'
import { useNavigate } from 'react-router-dom';

const Media = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      name: "Band-Aid Adhesive Bandages",
      price: 19.88,
      img: "https://looshay.com/wp-content/uploads/2022/07/aced9c0c-17e7-4970-b812-31098f3b506c.88a3fbf8fd2a42164db5edfa9ecb8646-320x320.jpeg",
    },
    {
      id: 2,
      name: "COMIX Face Mask",
      price: 13.88,
      img: "https://looshay.com/wp-content/uploads/2022/07/a2ca4e02-ce28-469f-be0b-29f79c48c14b.029c3896a4ed32b118169bf1f762aa9d-320x320.jpeg",
    },
    {
      id: 3,
      name: "Burn Relief Spray",
      price: 21.88,
      img: "https://looshay.com/wp-content/uploads/2022/07/96b78cfc-3b19-4753-a4f5-00371ee365c5.ff67fdb5ddcfdae6797cc002c4700adb-320x320.jpeg",
    },
    {
      id: 4,
      name: "Elastic Knee Brace",
      price: 24.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/53319169-6d62-4904-86c8-758bf5a3753b.139e691bb88e7e13639effd4d55c058e-320x320.jpeg",
    },
    {
      id: 5,
      name: "Gaviscon Extra Strength",
      price: 13.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/9440739c-bec9-42e2-8a49-9613a157c2c1_1.81bddd7eb10ab29e2d7dcd4ebd23c1d9-320x320.jpeg",
    },
    {
      id: 6,
      name: "Hoover Multi Surface Cleaner",
      price: 43.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/9820ef79-cd39-40c5-902b-adec8f40d079.3db7be36097638cffdfc39c05855746f-320x320.jpeg",
    },
    {
      id: 7,
      name: "McDavid Knee Support",
      price: 20.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/8a935505-82b1-4168-a129-b17e21e242bd_1.92544a8835d716c10d5ced41d1b3611c-320x320.jpeg",
    },
    {
      id: 8 ,
      name: "RMR-141 Disinfecting Spray",
      price: 53.99,
      img: "https://looshay.com/wp-content/uploads/2022/07/479d065a-386d-4c36-93ab-0f1ca008f873.24ede1915763476afd3805f1e0d6a4ed-320x320.jpeg",
    },
  ];
  return (
    <div className="container mb-4">
      <div className="mt-5">
        <span style={{ fontWeight: "bold", fontSize: "26px" }}>
          Category: Health and Household
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
                marginTop: "15px",
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
  );
}

export default Media