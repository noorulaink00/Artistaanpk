import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { db } from "../../../Firebase/firebase";
import RegisterSellerForm from "./RegisterSellerForm.jsx";
import FormInput from "../../../components/FormInput/FormInput.jsx";
import Logo from "../../../common/Logo/logo";
import "./RegisterSellerForm.css";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  vendor: Yup.string().required("First Name is required"),
  phone: Yup.string().required("Phone is required"),
  cnic: Yup.string().required("Cnic is required"),
  email: Yup.string().required("Cnic is required"),
  address: Yup.string().required("Address is required"),
  shop: Yup.string().required("Shop Name is required"),
  city: Yup.string().required("City is required"),
  area: Yup.string().required("Area is required"),
  address: Yup.string().required("Complete Address is required"),
});
const Multistep = () => {
  const [step, setStep] = useState(1);
  const img4 =
    "https://i.etsystatic.com/34623045/r/il/4f1e1f/4794155257/il_fullxfull.4794155257_kfzb.jpg";
  const image3 = "images/SellerForm/7.jpeg";
  const image5 =
    "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2019/11/craft-stores-shops-singapore.png";
  const [userDisplayName, setUserDisplayName] = useState("");
  const navigate = useNavigate();
  const [userid, setUserid] = useState(""); // Add state to store the user ID

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDisplayName(user.displayName);
        setUserid(user.uid);
      }
    });
  }, []);

  const handleSubmit = async (values, userId) => {
    const userDocRef = collection(db, "SellerForm");
    await addDoc(userDocRef, {
      ...values,
      userid: userid,
    })
      .then(() => {
        alert("Form submitted successfully!");
        navigate("/sellerDash");
      })

      .catch((error) => {
        console.error("Error submitting form:", error);
        alert(error);
      });
  };

  const renderForm = (formik) => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="RSF1">
              <RegisterSellerForm image={img4}>
                <div className="RSF1-content">
                  <h1>Welcome, {userDisplayName}!</h1>
                  <p>
                    We are so excited to help your shop come to life. To kick
                    things off, we'll get to know a bit about you and what you
                    do!
                  </p>
                  <button onClick={() => setStep(2)}>Next</button>
                </div>
              </RegisterSellerForm>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="RSF3">
              <div className="logo-row">
                <div className="logo">
                  <Logo />
                </div>
              </div>
              <div className="seller-page">
                <div className="welcome-image">
                  <img src={image3} alt="Welcome" />
                </div>
                <div className="welcome-text text-left">
                  <div className="scrollable-text">
                    <h2>Looking forward to know a bit about you!</h2>
                    <hr />
                    <div className="form-group">
                      <label htmlFor="vendor">Name of shop owner </label>
                      <Field type="text" id="vendor" name="vendor" />
                      <ErrorMessage name="vendor" component="div" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field type="text" id="email" name="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Contact Number </label>
                      <Field type="text" id="phone" name="phone" />
                      <ErrorMessage name="phone" component="div" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cnic">National ID Card Number </label>
                      <Field type="text" id="cnic" name="cnic" />
                      <ErrorMessage name="cnic" component="div" />
                    </div>
                    <button type="button" onClick={() => setStep(1)}>
                      Previous
                    </button>
                    <button type="button" onClick={() => setStep(3)}>
                      Next
                    </button>
                  </div>
                </div>
              </div>
              <div className="logo-row">
                <div className="logo">Footer</div>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="RSF4">
              <div className="logo-row">
                <div className="logo">
                  <Logo />
                </div>
              </div>
              <div className="seller-page">
                <div className="welcome-image">
                  <img src="images/SellerForm/9.jpg" alt="Welcome" />
                </div>
                <div className="welcome-text text-left">
                  <div className="scrollable-text">
                    <h2>Looking forward to know a bit about you!</h2>
                    <p>
                      Looking forward to know a bit about you! shopname:
                      shopname, city: city, area: area, address: address,
                      description: description,
                    </p>
                    <hr />
                    <div className="form-group">
                      <label htmlFor="shop">Name of Shop</label>
                      <Field type="text" id="shop" name="shop" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="city">City </label>
                      <Field type="text" id="city" name="city" />

                      <div className="form-group">
                        <label htmlFor="area">Area</label>
                        <Field type="text" id="area" name="area" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="address">Complete Address</label>
                        <Field
                          type="textarea"
                          id="address"
                          name="address"
                          placeholder="complete "
                        />
                      </div>
                      <div className="button-group">
                        <button type="button" onClick={() => setStep(2)}>
                          Previous
                        </button>
                        <button type="button" onClick={() => setStep(4)}>
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="logo-row">
                  <div className="logo">Footer</div>
                </div>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="RSF5">
              <div className="logo-row">
                <div className="logo">
                  <Logo />
                </div>
              </div>
              <div className="seller-page">
                <div className="welcome-image">
                  <img src={image5} alt="Welcome" />
                </div>
                <div className="welcome-text text-left">
                  <div className="scrollable-text">
                    <h2>Just check if you have filled in the right data</h2>
                    <p> Ready to submit then </p>
                    <hr />
                    <div className="data">
                      <div className="data-sub">
                        <h4>Shop Owner </h4>
                        <p> {formik.values.vendor}</p>
                      </div>
                      <hr />
                      <div className="data-sub">
                        <h4>Email </h4>
                        <p> {formik.values.email}</p>
                      </div>
                      <hr />
                      <div className="data-sub">
                        <h4>Phone Number </h4>
                        <p> {formik.values.phone}</p>
                      </div>
                      <hr />
                      <div className="data-sub">
                        <h4>National ID Card Number </h4>
                        <p> {formik.values.cnic}</p>
                      </div>
                      <hr />
                      <div className="data-sub">
                        <h4>Shop Name </h4>
                        <p> {formik.values.shop}</p>
                      </div>
                      <hr />
                      <div className="data-sub">
                        <h4>City</h4>
                        <p> {formik.values.city}</p>
                      </div>
                      <hr />
                      <div className="data-sub">
                        <h4>Area </h4>
                        <p> {formik.values.area}</p>
                      </div>
                      <hr />
                      <div className="data-sub">
                        <h4>Address </h4>
                        <p> {formik.values.address}</p>
                      </div>
                      <hr />
                    </div>
                    <div className="button-group">
                      <button type="button" onClick={() => setStep(3)}>
                        Previous
                      </button>
                      <button
                        type="submit"
                        disabled={Object.values(formik.values).some(
                          (value) => !value
                        )}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="logo-row">
                <div className="logo">Footer</div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          vendor: "",
          phone: "",
          cnic: "",
          shop: "", // Updated field name
          city: "", // Updated field name
          area: "", // Updated field name
          address: "", // Updated field name
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => <Form>{renderForm(formik)}</Form>}
      </Formik>
    </div>
  );
};

export default Multistep;
