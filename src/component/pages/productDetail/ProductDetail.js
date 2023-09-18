import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const ProductDetail = () => {
  const location = useLocation();

  console.log(location.state);
  const data = location.state;
  const { id } = useParams();
  console.log(id);

  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    count > 0 && setCount(count - 1);
  };
  return (
    <div
      className="container mt-5 mb-5"
      style={{ background: "#E0E0E0", padding: "30px" }}
    >
      <div className="row d-flex">
        <div className="col-3" style={{ marginRight: "20px" }}>
          <img src={data.img} alt="product" className="img-fluid" />
        </div>
        <div className="col-8 ">
          <h1>{data.name}</h1>
          <h2>$ {data.price}</h2>
          {data?.description?.map((item) => (
            <ul>
              <li>{item}</li>
            </ul>
          ))}

          <div className="d-flex gap-2 align-items-center">
            <button
              onClick={handleDecrement}
              style={{
                border: "none",
                width: "30px",
                height: "30px",
                borderRadius: "5px",
                fontWeight: "bold", fontSize:"20px"
              }}
            >
              -
            </button>
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>
              {" "}
              {count}
            </span>
            <button
              onClick={() => setCount(count + 1)}
              style={{
                border: "none",
                width: "30px",
                height: "30px",
                borderRadius: "5px",
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              +
            </button>
          <button className="btn btn-success" style={{marginLeft:"30px"}}>Add to Cart</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
