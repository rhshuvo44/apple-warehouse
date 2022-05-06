import React from "react";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";




const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
      const name = data.name;
      const email = data.email;
      const password = data.password;
      createUserWithEmailAndPassword(email, password)
  };
  return (
    <div className="container py-5 w-50">
      <h1 className="text-center pb-3">Please register</h1>
      <div className=" shadow p-3 mb-5 bg-white rounded">

        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="w-100 mb-2 p-2" placeholder="Name" {...register("name")} />
          <input className="w-100 mb-2 p-2" placeholder="Email" {...register("email")} />
          <input className="w-100 mb-2 p-2" placeholder="Password" {...register("password")} />
         
          <input type="submit" value="Register"/>
        </form>


        <p>
          New user ?{" "}
          <Link className="text-danger" to="/login">
            please login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
