import * as React from "react";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../../../Firebase/firebase";
import {
  collection,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
  query,
  where,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { FaWeight } from "react-icons/fa";
import AddIcon from "@mui/icons-material/Add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function SellerForm() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setrows] = React.useState([]);
  const empCollectionRef = collection(db, "SellerForm");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setrows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "SellerForm", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const addSeller = async (userid) => {
    try {
      // Check if the user exists
      const userRef = doc(db, "users", userid);
      const userSnapshot = await getDoc(userRef);

      if (!userSnapshot.exists()) {
        Swal.fire(`User with ID ${userid} does not exist.`);
        return;
      }

      // Create "seller" collection inside the user's document
      const sellerCollectionRef = collection(db, "users", userid, "seller");
      await addDoc(sellerCollectionRef, {}); // Use addDoc() to create the seller document

      // Get the newly created seller document ID
      const sellerQuerySnapshot = await getDocs(sellerCollectionRef);
      const sellerDocId = sellerQuerySnapshot.docs[0].id;

      // Create "seller/products" collection
      const productsCollectionRef = collection(
        db,
        "users",
        userid,
        "seller",
        sellerDocId,
        "products"
      );
      await addDoc(productsCollectionRef, {}); // Use addDoc() to create the products document

      // Create "seller/orders" collection
      const ordersCollectionRef = collection(
        db,
        "users",
        userid,
        "seller",
        sellerDocId,
        "orders"
      );
      await addDoc(ordersCollectionRef, {}); // Use addDoc() to create the orders document

      Swal.fire(`Seller added in user with ID ${userid}`);
    } catch (error) {
      Swal.fire("Error adding seller:", error.message);
    }
  };

  const filterData = (v) => {
    if (v) {
      setrows([v]);
    } else {
      getUsers();
    }
  };

  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}></Box>
        </Modal>
      </div>
      {rows.length > 0 && (
        <Paper
          sx={{
            width: "98%",
            overflow: "scroll",
            padding: "12px",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Seller Forms
          </Typography>
          <Divider />
          <Box height={10} />

          <Box height={10} />
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Vendor Name
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Shop Name
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    City
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Contact Number
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Email
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    ID Card Number
                  </TableCell>{" "}
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Location
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    User ID
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ minWidth: "100px", fontWeight: "bold" }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        <TableCell align="left">{row.vendor}</TableCell>
                        <TableCell align="left">{row.shop}</TableCell>
                        <TableCell align="left">{row.city}</TableCell>
                        <TableCell align="left">{row.phone}</TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        <TableCell align="left">{row.cnic}</TableCell>
                        <TableCell align="left">{row.address}</TableCell>
                        <TableCell align="left">{row.userid}</TableCell>

                        <TableCell align="left">
                          <Stack spacing={1} direction="row">
                            <AddIcon
                              style={{
                                fontSize: "20px",
                                color: "green",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                              onClick={() => {
                                addSeller(row.userid);
                              }}
                            />

                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
}
