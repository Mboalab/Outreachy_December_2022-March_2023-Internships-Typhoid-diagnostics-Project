import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './LandingPage';



function Main() {
  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<LandingPage />}></Route>


    </Routes>

    </Router>

  );
}

export default Main;
