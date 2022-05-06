import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../../firebase.init";

const Additem = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user.auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    fetch('http://localhost:5000/inventors', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="container py-5 text-center w-50">
      <h1 className="mb-5">Add New Item</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="w-100 mb-2 p-2"
          placeholder="Item Name"
          {...register("name")}
        />
        <input
          type="email"
          className="w-100 mb-2 p-2"
          placeholder="Email"
          {...register("email")}
        />
        <textarea
          className="w-100 mb-2 p-2"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="w-100 mb-2 p-2"
          placeholder="Price"
          {...register("price")}
        />
        <input
          className="w-100 mb-2 p-2"
          placeholder="SupplierName"
          {...register("supplierName")}
        />
        <input
          type="text"
          className="w-100 mb-2 p-2"
          placeholder="PhotoUrl"
          {...register("img")}
        />

        <input type="submit" className="btn btn-primary" value="Add Item" />
      </form>
    </div>
  );
};

export default Additem;
