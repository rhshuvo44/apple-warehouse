import React from "react";
import useInventor from "../../../hook/useInventor";
import Inventor from "../Inventor/Inventor";

const Home = () => {
  const [items] = useInventor([]);
  return (
      <div className="container py-5">
        <h1>My items</h1>
        <div className="row">
          {items.slice(0, 6).map((item) => (
            <Inventor item={item} />
          ))}{" "}
        </div>
      </div>
  );
};

export default Home;
