import React from "react";

import Head from "./Head";
import Menu from "./Menu";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "../../css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <Head />

      <Menu />
    </div>
  );
};

export default Header;
