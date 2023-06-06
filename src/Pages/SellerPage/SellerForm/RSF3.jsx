import React, { useState } from "react";
import RegisterSellerForm from "./RegisterSellerForm";
import FormInput from "../../../components/FormInput/FormInput";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/firebase";

const RSF3 = ({ setStep }) => {
  const image = "images/SellerForm/7.jpeg";
  const [vendorname, setVendorname] = useState("");
  const [contact, setContact] = useState("");
  const [cnic, setCnic] = useState("");

  const handleNextStep = async (event) => {
    event.preventDefault();

    try {
      // Add the form data to the Firestore collection
      const docRef = await addDoc(collection(db, "SellerData"), {
        vendorname: vendorname,
        contact: contact,
        cnic: cnic,
      });
      console.log("Form data added to Firestore:", docRef.id);
    } catch (error) {
      console.error("Error adding form data to Firestore:", error);
    }

    setStep(4); // Navigate to the next step
  };

  return (
    <div className="RSF3">
      <RegisterSellerForm image={image}>
        <h2>Looking forward to know a bit about you!</h2>
        <hr />
        <form onSubmit={handleNextStep}>
          {/* Form input fields */}
          <div className="input-form">
            <label>Name of the Owner:</label>
            <FormInput
              type="text"
              name="vendorname"
              value={vendorname}
              onChange={(e) => setVendorname(e.target.value)}
            />
          </div>
          <div className="input-form">
            <label>Contact Number:</label>
            <FormInput
              type="text"
              name="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <div className="input-form">
            <label>National Identity Number (CNIC):</label>
            <FormInput
              type="text"
              name="cnic"
              value={cnic}
              onChange={(e) => setCnic(e.target.value)}
            />
          </div>

          <div className="form-buttons">
            <button type="submit" onClick={() => setStep(4)}>
              Next
            </button>
            <button type="button" onClick={() => setStep(2)}>
              Previous
            </button>
          </div>
        </form>
      </RegisterSellerForm>
    </div>
  );
};

export default RSF3;
