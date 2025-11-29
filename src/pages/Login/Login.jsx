import React, { useContext, useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { login, signup } from "../../firebase";
import { LoadingContext } from "../../context/LoadingContext";

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLoading } = useContext(LoadingContext);

  const userAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return (
    <div className="login">
      <img src={logo} alt="" className="loginLogo" />
      <div className="loginForm">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="Password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button onClick={userAuth} type="submit">
            {signState}
          </button>
          <div className="formHelp">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="formSwitch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an Account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
