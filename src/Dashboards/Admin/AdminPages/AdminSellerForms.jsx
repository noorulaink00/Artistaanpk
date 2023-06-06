import * as React from "react";
import MainAdmin from "../MainAdmin";
import { db } from "../../../Firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

import SellerForm from "./SellerForm";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const AdminSellerForms = () => {
  return (
    <MainAdmin>
      <SellerForm />
    </MainAdmin>
  );
};
export default AdminSellerForms;
