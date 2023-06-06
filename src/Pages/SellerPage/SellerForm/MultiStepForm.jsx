import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { db } from "../../../Firebase/firebase";
import firebase from "firebase/app";
import "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import RSF3 from "./RSF3";
import RSF4 from "./RSF4";
import RSF1 from "./RSF1";
import RSF2 from "./RSF2";
import RSF5 from "./RSF5";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import validationSchema from "./validationSchema";
import { useNavigate } from "react-router-dom";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [stepData, setStepData] = useState({});
  const navigate = useNavigate();
  const handleSubmit = () => {
    alert("Form submitted successfully");
    navigate("/");
  };

  const renderForm = (formik) => {
    switch (step) {
      case 1:
        return (
          <>
            <RSF1 setStepData={setStepData} setStep={setStep} />
          </>
        );
      case 2:
        return (
          <>
            <RSF2 setStep={setStep}></RSF2>
          </>
        );
      case 3:
        return (
          <>
            <RSF3 setStep={setStep} />
          </>
        );
      case 4:
        return (
          <>
            <RSF4 setStep={setStep} />
          </>
        );

      case 5:
        return (
          <>
            <RSF5 handleSubmit={handleSubmit} />
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
          sellerLevel: "",
          vendorname: "",
          cnic: "",
          contact: "",
          address: "",
          shopName: "",
          city: "",
          area: "",
          description: "",
        }}
        onSubmit={() => {}}
      >
        {({ formik }) => <Form>{renderForm(formik)}</Form>}
      </Formik>
    </div>
  );
};

export default MultiStepForm;
