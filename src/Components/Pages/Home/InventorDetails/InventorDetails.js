import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const InventorDetails = () => {
  const { id } = useParams();
  const stockRef = useRef();
  let [item, setItem] = useState({});
  const {quantity}=item;
  useEffect(() => {
    fetch(`http://localhost:5000/inventors/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [item]);
  const itemUpdate = (id) => {
    // const newQuantity = parseInt(stockRef.current.value);
    // const quantity = newQuantity + item.quantity;
    // const url = `http://localhost:5000/inventors/${id}`;
    // fetch(url, {
    //   method: "PUT",
    //   body: JSON.stringify(quantity),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     toast("Stock Update");
    //   });
  };
  const delivary = () => {

    const newQuantity = parseInt(quantity) -1;
    item={quantity:newQuantity}
    const url = `http://localhost:5000/inventors/${id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast("Delivary Success");
      });
  };
  return (
    <div className="container py-5">
      <h1 className="text-center pb-3">{item.name} details</h1>
      <div className="row  shadow p-3 mb-5 bg-white rounded mt-2">
        <div className="col-md-7">
          <div className="w-100">
            <img
              style={{ height: "400px", objectFit: "cover" }}
              className="w-100"
              src={item.img}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-5">
          <div className="">
            <h6>Name: {item.name}</h6>
            <p>Id: {item._id}</p>
            <p>{item.description}</p>
            <h5>Price:$ {item.price}</h5>
            <p>Stock : {item.quantity}</p>
            <h3>Supplier name : {item.supplierName}</h3>
          </div>
          <button
            onClick={() => itemUpdate(item._id)}
            className="btn btn-primary m-2"
          >
            Stock Update
          </button>{" "}
          <input
            ref={stockRef}
            className="w-25 m-2"
            placeholder="stock"
            type="text"
          />
          <button onClick={delivary} className="btn btn-primary">
            {" "}
            Delivary
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventorDetails;
