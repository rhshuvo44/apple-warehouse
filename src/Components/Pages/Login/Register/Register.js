import React from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";




const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
      const navigate=useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";
  const { register, handleSubmit } = useForm();
  if(user || user1){
    navigate(from, { replace: true });
  }
  const onSubmit = async (data) => {
      const name = data.name;
      const email = data.email;
      const password = data.password;
      createUserWithEmailAndPassword(email, password)
  };

  const hangleGoogle=()=>{
    signInWithGoogle()
  }
  return (
    <div className="container py-5 w-50">
      <h1 className="text-center pb-3">Please register</h1>
      <div className=" shadow p-3 mb-5 bg-white rounded">

        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="w-100 mb-2 p-2" placeholder="Name" {...register("name")} />
          <input className="w-100 mb-2 p-2" placeholder="Email" {...register("email")} />
          <input className="w-100 mb-2 p-2" placeholder="Password" {...register("password")} />
         
          <input type="submit" className="btn btn-primary" value="Register"/>
        </form>


        <p>
          New user ?{" "}
          <Link className="text-danger" to="/login">
            please login
          </Link>{" "}
        </p>

        <button className="btn btn-primary" onClick={hangleGoogle}>LogIn Google</button>
      </div>
    </div>
  );
};

export default Register;
