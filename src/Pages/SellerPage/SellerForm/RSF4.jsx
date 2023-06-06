import React, { useState } from "react";
import { useFormik } from "formik";
import RegisterSellerForm from "./RegisterSellerForm";
import FormInput from "../../../components/FormInput/FormInput";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/firebase";

const RSF4 = ({ setStep }) => {
  const image = "images/SellerForm/9.jpg";
  const [inputValues, setInputValue] = useState({
    vendorname: "",
    shopname: "",
    city: "",
    area: "",
    address: "",
    description: "",
  });

  const handleNextStep = async (event) => {
    event.preventDefault();
    const { shopname, city, area, address, description } = formik.values;

    // Create an updated values object with additional properties
    const updatedValues = {
      shopname: shopname,
      city: city,
      area: area,
      address: address,
      description: description,
    };
    console.log(updatedValues);

    try {
      // Add the form data to the Firestore collection
      const docRef = await addDoc(collection(db, "SellerForm"), updatedValues);
      console.log("Form data added to Firestore:", docRef.id);
    } catch (error) {
      console.error("Error adding form data to Firestore:", error);
    }

    setStep(5);
  };

  const formik = useFormik({
    initialValues: {
      shopname: "",
      city: "",
      area: "",
      address: "",
      description: "",
    },
    onSubmit: handleNextStep,
  });

  // Rest of the code...
  const inputFields = [
    {
      id: 1,
      name: "shopname",
      type: "text",
      label: "Name of Your Shop",
      errorMessage:
        "Your name should not include any special characters or numbers and should be 3-50 characters long",
      pattern: "[A-Za-z _-]+",
      minLength: "3",
      maxLength: "50",
      required: true,
    },
    {
      id: 2,
      name: "city",
      label: "City your shop is located at",
      type: "text",
      minLength: "3",
      maxLength: "20",
      errorMessage:
        "It should not include any special characters or numbers and should be 3-20 characters long",
      pattern: "[A-Za-z _-]+",
      required: true,
    },
    {
      id: 3,
      name: "area",
      type: "text",
      label: "Area of the city",
      pattern: "[A-Za-z _-]+",
      minLength: "3",
      maxLength: "20",
      errorMessage:
        "It should not include any special characters or numbers and should be 3-20 characters long",
      required: true,
    },
    {
      id: 4,
      name: "address",
      type: "textarea",
      label: "Complete Address",
      pattern: "^[A-Za-z0-9 _.,-/]+$",
      minLength: "10",
      maxLength: "200",
      errorMessage: "It can be 10-200 characters long",
      required: true,
      placeholder: "Write complete address of your shop or if online your home",
    },
    {
      id: 5,
      name: "description",
      type: "textarea",
      label: "Description",
      pattern: "^[A-Za-z0-9 _.,-/+]{20,200}$",
      minLength: "20",
      maxLength: "200",
      errorMessage: "It should be 20-200 characters long",
      required: true,
      placeholder: "Write a short description of your shop!",
    },
  ];
  return (
    <div className="RSF4">
      <RegisterSellerForm image={image}>
        <h2>Looking forward to know a bit about you!</h2>
        <hr />
        <form onSubmit={formik.handleSubmit}>
          {/* Form input fields */}
          {inputFields.map((field) => (
            <div className="input-form" key={field.name}>
              <label>{field.label}:</label>
              <FormInput
                type={field.type}
                name={field.name}
                value={formik.values[field.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched[field.name] && formik.errors[field.name] && (
                <span className="errorMessage">
                  {formik.errors[field.name]}
                </span>
              )}
            </div>
          ))}
          <div className="form-buttons">
            <button type="submit">Next</button>
            <button type="button" onClick={() => setStep(2)}>
              Previous
            </button>
          </div>
        </form>
      </RegisterSellerForm>
    </div>
  );
};

export default RSF4;
