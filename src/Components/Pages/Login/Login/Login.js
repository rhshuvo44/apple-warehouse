import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
const navigate=useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || "/";

    const emailRef=useRef()
    const passwordRef=useRef();

    if(user){
      navigate(from, { replace: true });
    }
  const login = (event) => {
    event.preventDefault();
    const email=emailRef.current.value;
    const password=passwordRef.current.value;
    signInWithEmailAndPassword(email, password)
  };
  return (
    <div className="container py-5 w-50">
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
            login
          </button>
        </form>

        <p>
          New user ?{" "}
          <Link className="text-danger" to="/register">
            please register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
