import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const InventorDetails = () => {
  const { id } = useParams();
  const navigate=useNavigate()
  const [item, setItem] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/inventors/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [item]);
  const itemUpdate=()=>{
    navigate('/itemUpdate')
  }
  const delivary=()=>{
    toast('Delivary succecs')
  }
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
          <button onClick={itemUpdate} className="btn btn-primary m-2">Update</button>
          <button onClick={delivary} className="btn btn-primary">Delivary</button>
        </div>
      </div>
    </div>
  );
};

export default InventorDetails;
