import React, { useEffect, useState } from "react";
import "../AdminDash.scss";
import firestore from "../../../Firebase/firebase";

import MainAdmin from "../MainAdmin";
import ProductList from "./ProductList";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "../../../Pages/Home";

const AdminDash = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch user data from Firebase Firestore

        const usersCollection = firestore.collection("formData");
        const usersSnapshot = await usersCollection.get();

        // Extract user data from snapshot and update state
        const userData = usersSnapshot.docs.map((doc) => doc.data());
        setUsers(userData);
      } catch (error) {
        console.log("Error fetching user data: ", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <MainAdmin>
      <div className="AdminDashBoard">Admin Main Dash</div>
    </MainAdmin>
  );
};

export default AdminDash;
