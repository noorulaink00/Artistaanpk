





import React, { useState, useRef } from "react";

import "../Login/Login.scss";
import "./Register.scss";
import FormInput from "../../components/FormInput/FormInput";
import { Link, useNavigate } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Logo from "../../common/Logo/logo";
import { auth, db } from "../../Firebase/firebase";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { ErrorRounded } from "@mui/icons-material";

const Registeration = () => {
  const [inputValues, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState();

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Full Name",
      errorMessage:
        "Your name should not include any special characters or numbers and should be 3-20 charcters long",
      pattern: "^[A-Za-z_ ]{3,20}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      required: true,
      /* ref: { emailRef },*/
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 uppercase, 1 number, 1 special character",
      pattern:
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$",
      required: true,
      /* ref: { passwordRef },*/
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password doesn't match",
      pattern: inputValues.password,
      required: true,
      /*ref: { confirmPasswordRef },*/
    },
  ];

  const handleChange = (e) => {
    setInputValue({ ...inputValues, [e.target.name]: e.target.value });
  };
  //console.log(inputValues);

  /*const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: inputValues.username,
        });
        navigate("/login");
      });
    } catch (error) {}
  };*/

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      )
        .then((userCredential) => {
          // Signed up

          const user = userCredential.user;
          const initialcartvalue = 0;
          console.log(user);

          addDoc(collection(db, "users"), {
            username: inputValues.username,
            email: inputValues.email,
            uid: user.uid,
            /* phonenumber: phonenumber, password: password, cart: initialcartvalue, address; address */
          })
            .then(() => {
              setInputValue({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
              });
              setErrorMsg("");
              setSuccessMsg("New user added successfully.");
              setTimeout(() => {
                setSuccessMsg("");
                navigate("/login");
              });
            })
            /*  .then(() => {
                setSuccessMsg(
                  "New user added successfully, First please verify Email"
                );
                setInputValue.username = "";
                setErrorMsg("");
                setTimeout(
                  () => {
                    setSuccessMsg("");

                    // navigate to profile page
                    navigate("/login");
                  } /*, 4000
                );
              })*/
            .catch((error) => {
              setErrorMsg(error.message);
            });
          updateProfile(user, {
            displayName: inputValues.username,
          });
          sendEmailVerification(user)
            .then(() => {
              alert("Verification email sent successfully");
            })
            .catch((error) => {
              alert(error.message);
            });
        })
        .catch((error) => {
          console.log(error.message);

          if (error.message === "Firebase: Error (auth/invalid-email). ") {
            setErrorMsg(" Invalid Email");
          }
          if (
            error.message ===
            "Firebase: The email address is already in use by another account. (auth/email-already-in-use). "
          ) {
            setErrorMsg("User already exists");
          } else {
            setErrorMsg(error.message);
          }
        });
    } catch (error) {}
  };

  return (
    <>
      <div className="register">
        <Logo />
        <form onSubmit={handleRegister}>
          <h2>Create an Account</h2>

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

          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={inputValues[input.name]}
              onChange={handleChange}
            />
          ))}

          <button type="submit">Create Account</button>

          <div className="formlink">
            <span>Already have an account ? </span>
            <Link
              to="/login"
              className="formSignUp"
              style={{ textDecoration: "none" }}
            >
              {" "}
              SignIn
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
              <span>SignUp with Google </span>
            </Link>
          </div>
          <div className="media-options">
            <Link
              to="facebook"
              className="facebook"
              style={{ textDecoration: "none" }}
            >
              <FacebookRoundedIcon className="facebookIcon" />
              <span>SignUp with Facebook </span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};*

export default Registeration;

