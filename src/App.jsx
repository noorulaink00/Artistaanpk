import React, { Component } from "react";
import "./index.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import DashboardRedirect from "./PrivateRoutes/DashboardRedirect";
import routeData from "./PrivateRoutes/Routes";

function App() {
  return (
    <div className="app">
      <Router>
        <DashboardRedirect />

        <Routes>
          {routeData.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
    /*
  
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>//

    <div className="app">
      <Router>
        <FormProvider>
          <Route path="/registersellerform2" component={<RSF2 />} />
          <Route path="/registersellerform3" component={RSF3} />
        </FormProvider>
        <DashboardRedirect />
        <RouterProvider router={router} />
      </Router>
    </div>*/
  );
}

export default App;
