import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./Admin/Header/Header";
import SideBar from "../Dashboards/SideBar/SideBar";

const rootRoutes = () => {
  render();
  {
    const { match } = this.props;
    return (
      <main>
        <Header />
        <div className="layoutSidenav">
          Admin
          <SideBar />
          <Router>
            <Routes>
              <Route
                exact
                path={["${match.path}/dashhome", "${match.path}"]}
                element={Header}
              />
            </Routes>
          </Router>
        </div>
      </main>
    );
  }
};

export default rootRoutes;
