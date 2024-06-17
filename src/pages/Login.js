import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <Header />
      <div className="login">
        <div className="login-form">
          <h2>Welcome Back!</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
