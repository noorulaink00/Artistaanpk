import React, { useState } from "react";
import { useFormikContext, Form, Formik } from "formik";
import RegisterSellerForm from "./RegisterSellerForm";
import { db } from "../../../Firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const initialValues = {
  // Define your initial form values here
  sellerLevel: "",
  vendorname: "",
  cnic: "",
  contact: "",
  address: "",
  shopName: "",
  city: "",
  area: "",
  description: "",
};

const RSF5 = () => {
  const navigate = useNavigate();
  const image =
    "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2019/11/craft-stores-shops-singapore.png";
  const { values } = useFormikContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submittedData, setSubmittedData] = useState(null); // Store the submitted data from Firebase

  const handleFormSubmit = async () => {
    setIsSubmitting(true);

    try {
      const docRef = await addDoc(collection(db, "SellerForm"), {
        sellerLevel: values.sellerLevel,
        vendorname: values.vendorname,
        cnic: values.cnic,
        contact: values.contact,
        address: values.address,
        shopName: values.shopName,
        city: values.city,
        area: values.area,
        description: values.description,
      });

      setIsSubmitting(false);
      alert("Form submitted successfully");
      navigate("/sellerDash");
    } catch (error) {
      setIsSubmitting(false);
      setSubmitError("Failed to submit" + error.message);
      alert(submitError);
    }
  };

  return (
    <div className="RSF5">
      <RegisterSellerForm image={image}>
        <h1> Thanks for contacting us as a seller!</h1>

        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </RegisterSellerForm>
    </div>
  );
};

export default RSF5;
