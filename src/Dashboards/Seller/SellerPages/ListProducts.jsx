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
import { Divider } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import Button from "@mui/material";
import Box from "@mui/material";
import Stack from "@mui/material";
import { db } from "../../../Firebase/firebase";
import {
  collection,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import EditIcon from "@mui/material";
import DeleteIcon from "@mui/material";
import TextField from "@mui/material";
import Autocomplete from "@mui/material";
import { async } from "@firebase/util";

export default function ListProducts() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const [rows, setrows] = React.useState([]);
  const empCollectionRef = collection(db, "SellerForm");

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

  return (
    <>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ paddng: "20px" }}
      >
        My Product List
      </Typography>
      <Divider />
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={2}>
                  Country
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  Details
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" style={{ top: 57, minWidth: "100px" }}>
                  Name
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
                      <TableCell key={row.id} align="left">
                        {row.vendor}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
