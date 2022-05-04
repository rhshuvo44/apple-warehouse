import React from "react";
import useInventor from "../../../hook/useInventor";
import Banner from "../Banner/Banner";
import Inventor from "../Inventor/Inventor";

const Home = () => {
  const [items] = useInventor([]);
  return (
    <div>
      <Banner/>
    
      <div className="container py-5">
        <h1>My items</h1>
        <div className="row">
          {items.slice(0, 6).map((item) => (
            <Inventor key={item._id} item={item} />
          ))}{" "}
        </div>
      </div>
      </div>
  );
};

export default Home;
