import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./component/Registration";
import Login from "./component/Login";
import User_about from "./component/User_about";
import Logout from "./component/Logout";
import Cameras from "./component/Cameras";
import Sysnotif from "./headers/alert";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Sysnotif />

        <Routes>
          <Route exact path="/user_about" element={<User_about />} />

          <Route exact path="/cameras" element={<Cameras />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
