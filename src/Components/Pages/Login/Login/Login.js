import axios from "axios";
import React, { useRef } from "react";
import { Spinner } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1 ,loading1] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail ] = useSendPasswordResetEmail(
      auth
    );
const navigate =useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || "/";

    const emailRef=useRef()
    const passwordRef=useRef();

    if (loading || loading1) {
      return (
        <div className="py-5 text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      );
    }
    if(user || user1){
      navigate(from, { replace: true });
    }
  const login =async (event) => {
    event.preventDefault();
    const email=emailRef.current.value;
    const password=passwordRef.current.value;
    await signInWithEmailAndPassword(email, password)

  const {data}= await axios.post('http://localhost:5000/login', {email});
  
  localStorage.setItem('token',data.token)
  }
  const restPassword= async()=>{
    const email=emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Please your email");
    }
  }
  const hangleGoogle=()=>{
    signInWithGoogle()
  }
  return (
    <div className="container py-5 w-50 ">
      <div className=" shadow p-3 mb-5 bg-white rounded">
        <h1>Please LogIn</h1>
        <form onSubmit={login}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
            ref={emailRef}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
            ref={passwordRef}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        {
          error && <p className="text-danger py-3">your email or password invalid </p>
        }
        <div className="d-flex justify-content-betwee align-items-center">
        <p >
          Forget Password?
          <button className="btn btn-link" onClick={restPassword}>
            Reset Password
          </button>
        </p>
        <p>
          New user ?{" "}
          <Link className="text-danger" to="/register">
            please register
          </Link>{" "}
        </p>
        </div>
        <button className="btn btn-primary" onClick={hangleGoogle}>LogIn Google</button>
      </div>
    </div>
  );
};

export default Login;
