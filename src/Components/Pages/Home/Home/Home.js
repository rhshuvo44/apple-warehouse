import React from "react";
import { useNavigate } from "react-router-dom";
import useInventor from "../../../hook/useInventor";
import Banner from "../Banner/Banner";
import Inventor from "../Inventor/Inventor";

const Home = () => {
  const [items] = useInventor([]);
  const navigate=useNavigate();
  return (
    <div>
      <Banner/>
    
      <div className="container py-5">
        <h1 className="text-center">Items</h1>
        <div className="row">
          {items.slice(0, 6).map((item) => (
            <Inventor key={item._id} item={item} />
          ))}{" "}
        </div>
        <div className="text-center">
        <button onClick={()=>navigate('/inventors')} className="btn btn-primary">All Items</button>

        </div>
      </div>
      <div className="container py-5">
        <h1 className="text-center">Hot Items</h1>
        <div className="row">
          {items.slice(6, 9).map((item) => (
            <Inventor key={item._id} item={item} />
          ))}{" "}
        </div>
      </div>
      </div>
  );
};

export default Home;
