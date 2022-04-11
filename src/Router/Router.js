import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/HomePage";

const Router = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Router;
