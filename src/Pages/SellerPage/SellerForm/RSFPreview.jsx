import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { db } from "../../../Firebase/firebase";
import "firebase/firestore";

const RSFPreview = () => {
  const navigate = useNavigate();

  {
    /* const {
    name,
    address,
    shopname,
    city,
    area,
    description,
    selectedCheckbox,
    selectedProducts,
  } = formState;

  const handleEdit = () => {
    navigate("/registersellerform4"); // Update the route path according to your application
  };
  /*const handleSubmit = async () => {
    try {
      const docRef = await db.collection("sellerForms").add(formState); // Store the form data in Firestore

      // Display a success message or perform any other actions
      alert("Form data submitted successfully!", "Document ID:", docRef.id);
    } catch (error) {
      // Handle any errors that occur during form submission
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="FormPreview">
        <h1>Form Preview</h1>
        <div className="card">
          <h2>Shop Information</h2>
          <p> Name: {name}</p>
          <p>Shop Name: {shopname}</p>
          <p>City: {city}</p>
          <p>Area: {area}</p>
          <p>Address: {address}</p>
          <p>Description: {description}</p>
          <p>Checkbox: {selectedCheckbox}</p>
          <p> selectedProducts : {selectedProducts}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
        {/* Add more cards for other sections of the form //
      </div>

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </> 
  );*/
  }
};

export default RSFPreview;
