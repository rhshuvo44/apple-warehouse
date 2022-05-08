import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const InventorDetails = () => {
  const { id } = useParams();
  const stockRef = useRef();
  let [item, setItem] = useState({});
  useEffect(() => {
    fetch(`https://glacial-harbor-29138.herokuapp.com/inventors/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [item]);
  const {quantity}=item;

  const itemUpdate = (id) => {
    const updateQuantity = parseInt(stockRef.current.value)+parseInt(quantity);
    item={quantity:updateQuantity}
    const url = `https://glacial-harbor-29138.herokuapp.com/inventors/${id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Stock Update");
      });
      stockRef.current.value=''
  };
  const delivary = () => {

    const newQuantity = parseInt(quantity) -1;
    item={quantity:newQuantity}
    const url = `https://glacial-harbor-29138.herokuapp.com/inventors/${id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
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
            <h2>Name: {item.name}</h2>
            <h5>Id: {item._id}</h5>
            <h5>Price:$ {item.price}</h5>
            <h5>Stock : {item.quantity}</h5>
            <h5>Supplier : {item.supplierName}</h5>
            
            <p>{item.description}</p>
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
