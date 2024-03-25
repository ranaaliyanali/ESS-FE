import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./component/Registration";
import Login from "./component/Login";
import User_about from "./component/User_about";
import Logout from "./component/Logout";
import Owner_about from "./component/Owner_about";
import {Alert} from "@mui/material";
import Sysnotif from "./headers/alert";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Sysnotif />

        <Routes>
          <Route exact path="/user_about" element={<User_about />} />

          <Route exact path="/owner_about" element={<Owner_about />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
