import React, { useContext, useState } from "react";
import "./Login.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Logo from "../../common/Logo/logo";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { AuthContext } from "../../Firebase/AuthContext";
import Head from "../../common/header/Head";

const DEFAULT_ROLE = "customer";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);
  const [toggleEye, setToggleEye] = useState(false);
  const [inputType, setInputType] = useState("password");

  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleToggle = (e) => {
    setToggleEye(!toggleEye);
    setInputType(inputType === "password" ? "text" : "password");
  };

  const userRoleCheck = (user) => {
    // Check if the user's email is associated with a seller account
    // You can add your logic here to determine if the user is a seller based on their email
    const isSeller = false; // Replace with your logic to check if the user is a seller
    const isAdmin = false;
    if (isSeller) {
      return "customer+seller";
    } else if (isAdmin) {
      return "admin";
    } else {
      return DEFAULT_ROLE;
    }
  };

  const handleLogin = (e) => {
    e.preventDefault(e);
    dispatch({ type: "LOGIN_START" });
    try {
      signInWithEmailAndPassword(auth, inputs.email, inputs.password).then(
        (userCredential) => {
          const user = userCredential.user;
          if (user.emailVerified) {
            const userRole = userRoleCheck(user);
            dispatch({
              type: "LOGIN_SUCCESS",
              payload: { user, role: userRole },
            });

            if (userRole === "customer") {
              navigate("/customerDash");
            } else if (userRole === "seller") {
              navigate("/sellerDash");
            } else if (userRole === "admin") {
              navigate("/adminDash");
            } else {
              // Handle other roles or default case
              navigate("/pg404");
            }
          } else {
            setErrorMsg("Email not verified");
          }

          {
            /* 
            navigate("/profile");
            <Head isLoggedIn="true" />;
          } else {
            setErrorMsg("Email not verified");
          }*/
          }
        }
      );
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <Logo />
      <form>
        <h2>Login</h2>

        {successMsg && (
          <>
            <div className="success-msg">{successMsg} </div>
          </>
        )}

        {errorMsg && (
          <>
            <div className="error-msg">{errorMsg} </div>
          </>
        )}
        <div className="form-input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-input">
          <input
            type={inputType}
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <div className="eyeIcon" onClick={handleToggle}>
            {toggleEye ? <Visibility /> : <VisibilityOff />}
          </div>
        </div>

        <button type="submit" onClick={handleLogin}>
          Sign In
        </button>

        <div className="form">
          <div className="formlink">
            <span>Don't have an account? </span>
            <Link
              to="/register"
              className="formSignUp"
              style={{ textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </div>
          <div className="line"></div>
          <div className="media-options">
            <Link
              to="facebook"
              className="facebook google"
              style={{ textDecoration: "none" }}
            >
              <img src="images/googleicon.png" alt="" className="googleImg" />
              <span>Login with Google</span>
            </Link>
          </div>
          <div className="media-options">
            <Link
              to="facebook"
              className="facebook"
              style={{ textDecoration: "none" }}
            >
              <FacebookRoundedIcon className="facebookIcon" />
              <span>Login with Facebook</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

{
  /*import React, { useContext, useState } from "react";
import "./Login.scss";
import { Link, Navigate, useNavigate } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Logo from "../../common/Logo/logo";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { AuthContext } from "../../Firebase/AuthContext";
import Head from "../../common/header/Head";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);
  const [toggleEye, setToggleEye] = useState(false);
  const [inputType, setInputType] = useState("password");

  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleToggle = (e) => {
    setToggleEye(!toggleEye);
    setInputType(inputType === "password" ? "text" : "password");
  };
  //console.log(inputs);

  const handleLogin = (e) => {
    e.preventDefault(e);
    dispatch({ type: "LOGIN_START" });
    try {
      signInWithEmailAndPassword(auth, inputs.email, inputs.password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          if (user.emailVerified) {
            // check if email is verified
            dispatch({ type: "LOGIN_SUCCESS", payload: user });
            console.log(user);
            navigate("/profile");
            <Head isLoggedIn="true" />;
          } else {
            setErrorMsg("Email not verified");
          }
        }
      );
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div className="login">
      <Logo />
      <form>
        <h2>Login</h2>

        {successMsg && (
          <>
            <div className="success-msg">{successMsg} </div>
          </>
        )}

        {errorMsg && (
          <>
            <div className="error-msg">{errorMsg} </div>
          </>
        )}
        <div className="form-input">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-input">
          <input
            type={inputType}
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <div className="eyeIcon" onClick={handleToggle}>
            {toggleEye ? <Visibility /> : <VisibilityOff />}
          </div>
        </div>

        <button type="submit" onClick={handleLogin}>
          Sign In
        </button>

        <div className="formlink">
          <span>Dont have an account ? </span>
          <Link
            to="/register"
            className="formSignUp"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Sign Up
          </Link>
        </div>
        <div className="line"></div>
        <div className="media-options">
          <Link
            to="facebook"
            className="facebook google"
            style={{ textDecoration: "none" }}
          >
            <img src="images/googleicon.png" alt="" className="googleImg" />
            <span>Login with Google </span>
          </Link>
        </div>
        <div className="media-options">
          <Link
            to="facebook"
            className="facebook"
            style={{ textDecoration: "none" }}
          >
            <FacebookRoundedIcon className="facebookIcon" />
            <span>Login with Facebook </span>
          </Link>
        </div>
      </form>
    </div>
  );
};
*/
}
export default Login;
