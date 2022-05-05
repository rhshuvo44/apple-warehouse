import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container py-5 w-50">
      <div className=" shadow p-3 mb-5 bg-white rounded">
        <h1>Please LogIn</h1>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary">
            login
          </button>
        </form>

        <p>New user ? <Link className="text-danger" to='/register'>please register</Link> </p>
      </div>
    </div>
  );
};

export default Login;
