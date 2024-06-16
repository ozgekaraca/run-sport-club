import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login">
        <div className="login-form">
          <h2>Giriş Yap</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Şifre:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Giriş Yap</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
