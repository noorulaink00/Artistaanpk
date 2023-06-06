import React, { useState, useRef } from "react";
import "../Login/Login.scss";
import "./Register.scss";
import { Link, useNavigate } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import Logo from "../../common/Logo/logo";
import { auth, db } from "../../Firebase/firebase";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { ErrorRounded } from "@mui/icons-material";
import FormInput from "../../components/FormInput/FormInput";
const Register = () => {
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
        "Your name should not include any special characters or numbers and should be 3-20 characters long",
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
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password doesn't match",
      pattern: inputValues.password,
      required: true,
    },
  ];

  // Create the user document in the "users" collection

  const handleChange = (e) => {
    setInputValue({ ...inputValues, [e.target.name]: e.target.value });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Creating user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      );
      const user = userCredential.user;

      if (user) {
        // Updating user profile with display name
        await updateProfile(user, {
          displayName: inputValues.username,
        });

        const userid = user.uid;

        // Sending email verification
        await sendEmailVerification(user);

        // Creating user document in the "users" collection
        const usersCollectionRef = collection(db, "users");
        const userDocRef = doc(usersCollectionRef, userid);
        await setDoc(userDocRef, {
          username: inputValues.username,
          email: inputValues.email,
          userid: userid,
          role: "customer",
        });

        // Creating "customer" collection inside "users" collection
        const customerCollectionRef = collection(userDocRef, "customer");

        // Creating "cart" document inside "customer" collection
        const cartDocRef = doc(customerCollectionRef, "cart");
        await setDoc(cartDocRef, {
          userid: userid,
          cartItems: [],
        });

        // Creating "order" document inside "customer" collection
        const orderDocRef = doc(customerCollectionRef, "order");
        await setDoc(orderDocRef, {
          user: userid, // Corrected the typo "userer" to "user"
          orders: [],
        });

        setSuccessMsg("Verification email sent successfully.");
      } else {
        setErrorMsg("Error creating user. Please try again.");
      }
    } catch (error) {
      console.log(error.message);

      // Handling specific error cases
      if (error.code === "auth/invalid-email") {
        setErrorMsg("Invalid Email");
      } else if (error.code === "auth/email-already-in-use") {
        setErrorMsg("User already exists");
      } else {
        setErrorMsg(error.message);
      }
    }
  };

  return (
    <>
      <div className="register">
        <Logo />
        <form onSubmit={handleRegister}>
          <h2>Create an Account</h2>

          {successMsg && <div className="success-msg">{successMsg}</div>}

          {errorMsg && <div className="error-msg">{errorMsg}</div>}

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
              <span>SignUp with Google</span>
            </Link>
          </div>
          <div className="media-options">
            <Link
              to="facebook"
              className="facebook"
              style={{ textDecoration: "none" }}
            >
              <FacebookRoundedIcon className="facebookIcon" />
              <span>SignUp with Facebook</span>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
