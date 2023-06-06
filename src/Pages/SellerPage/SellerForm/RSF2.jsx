import React, { useState } from "react";
import RegisterSellerForm from "./RegisterSellerForm";
import { useNavigate } from "react-router-dom";
import { Field, ErrorMessage, Formik, Form } from "formik";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../Firebase/firebase";

const RSF2 = ({ setStep }) => {
  const [selectedSellerLevel, setSelectedSellerLevel] = useState(null);
  const navigate = useNavigate();

  const handleCheckboxChange = (selectedLevel) => {
    setSelectedSellerLevel(selectedLevel);
  };

  const handleNextStep = async () => {
    // Add the seller data to the Firestore collection
    try {
      const docRef = await addDoc(collection(db, "SellerData"), {
        sellerLevel: selectedSellerLevel,
      });
      console.log("Seller data added to Firestore:", docRef.id);
    } catch (error) {
      console.error("Error adding seller data to Firestore:", error);
    }

    // Move to the next step (Step 3)
    setStep(3);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  return (
    <div className="RSF2">
      <RegisterSellerForm image="images/SellerForm/8.jpg">
        <div className="RSF2-content">
          <h1>What brings you here?</h1>
          <p>
            Can we know your level as a seller, so we know what more success
            measures to bring for you.
          </p>
          <Formik
            initialValues={{
              sellerLevel: "", // Initial value for the sellerLevel field
            }}
            onSubmit={() => {}} // Empty submit function as we're not submitting the form
          >
            <Form>
              <div className="form-group">
                <label>
                  <Field
                    type="checkbox"
                    name="sellerLevel"
                    value="newSeller"
                    checked={selectedSellerLevel === "newSeller"}
                    onChange={() => handleCheckboxChange("newSeller")}
                  />
                  New seller
                </label>

                <label>
                  <Field
                    type="checkbox"
                    name="sellerLevel"
                    value="experiencedSeller"
                    checked={selectedSellerLevel === "experiencedSeller"}
                    onChange={() => handleCheckboxChange("experiencedSeller")}
                  />
                  Experienced seller
                </label>
              </div>

              <div className="form-buttons">
                {selectedSellerLevel && (
                  <button type="button" onClick={handleNextStep}>
                    Next
                  </button>
                )}
                <button type="button" onClick={handlePreviousStep}>
                  Previous
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </RegisterSellerForm>
    </div>
  );
};

export default RSF2;
