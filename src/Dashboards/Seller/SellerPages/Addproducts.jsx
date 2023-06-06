import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Box } from "@mui/material";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Addproducts = ({ closeEvent }) => {
  return (
    <>
      <Box sx={{ m: 2 }} />
      <Typography variant="h5" align="center">
        Add Product
      </Typography>
      <IconButton
        style={{ position: "absolute", top: "0", right: "0" }}
        onClick={closeEvent}
      >
        <Close />
      </IconButton>
      <Grid container spacing={2}></Grid>
    </>
  );
};

export default Addproducts;
