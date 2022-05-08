import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";

const Additem = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit ,reset } = useForm();
  const onSubmit = (data) => {
    fetch('https://glacial-harbor-29138.herokuapp.com/inventors', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json())
      .then((result) => {
        toast('Add Item success')
      });
      reset();

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
          value={user.email}
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
        type="number"
          className="w-100 mb-2 p-2"
          placeholder="Quantity"
          {...register("quantity")}
        />
        <input
        type="text"
        value={user.displayName}
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
