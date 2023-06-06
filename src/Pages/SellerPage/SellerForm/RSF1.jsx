import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import RegisterSellerForm from "./RegisterSellerForm";
import { FaArrowRight } from "react-icons/fa";

const RSF1 = ({ setStep }) => {
  const handleNext = () => {
    setStep(2); // Go to Step 2
  };
  const navigate = useNavigate();
  const [userDisplayName, setUserDisplayName] = useState("");
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDisplayName(user.displayName);
      }
    });
  }, []);

  const image1 =
    "https://img.freepik.com/free-photo/people-making-paper-flowers-craft-art-work-handicraft_53876-22956.jpg?w=1060&t=st=1683704355~exp=1683704955~hmac=a1e3edf3442890f56f5cd55e1b70ba932ab98cfb5d8977138edbc0ca0f1e6561";
  const image2 =
    "https://artbusinessnews.com/wpdev/wp-content/uploads/2021/06/pexels-taryn-elliott-6184413-scaled.jpg";
  const img3 =
    "https://prod.web.freshenv.com/blog/wp-content/uploads/2016/08/Sites-to-sell-artwork.jpg";
  const img4 =
    "https://i.etsystatic.com/34623045/r/il/4f1e1f/4794155257/il_fullxfull.4794155257_kfzb.jpg";

  const img5 =
    "https://millo.co/wp-content/uploads/2021/02/How-I-Make-Money-as-an-Artist-scaled-e1658354464353.jpeg";
  const img6 = "";
  return (
    <div className="RSF1">
      <RegisterSellerForm image={img4}>
        <div className="RSF1-content">
          <h1>Welcome, {userDisplayName}!</h1>
          <p>
            We are so excited to help your shop come to life. To kick things
            off, we'll get to know a bit about you and what you do!
          </p>{" "}
          <button onClick={handleNext}>Next</button>
        </div>
      </RegisterSellerForm>
    </div>
  );
};

export default RSF1;
