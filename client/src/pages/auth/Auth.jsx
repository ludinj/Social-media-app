import React from "react";
import "./auth.scss";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      {/* <LogIn /> */}
      <SignUp />
    </div>
  );
};
function LogIn() {
  return (
    <div className="a-right">
      <form className="infoForm">
        <h3>Log In</h3>
        <div className="infoInput">
          <input
            type="text"
            placeholder="Username"
            className="Input"
            name="username"
          />
        </div>

        <div className="infoInput">
          <input
            type="password"
            className="Input"
            placeholder="Password"
            name="password"
          />
        </div>
        <span style={{ fontSize: "12px" }}>Don't have an account Sign up</span>
        <button className="button infoButton">Login</button>
      </form>
    </div>
  );
}
function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm">
        <h3>Sign up</h3>

        <div className="infoInput">
          <input
            type="text"
            className="Input"
            name="username"
            placeholder="Username"
          />
        </div>

        <div className="infoInput">
          <input
            type="text"
            className="Input double"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="Input double"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>
        <div className="infoInput">
          <input
            type="text"
            placeholder="First Name"
            className="Input double"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="Input double"
            name="lastname"
          />
        </div>
        <span style={{ fontSize: "12px" }}>
          Already have an account. Login!
        </span>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
