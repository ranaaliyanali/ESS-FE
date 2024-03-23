// Owner_about.js

import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../store/auth";

const Owner_about = () => {
  const { owner } = useAuth();
  
    console.log(owner);
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="owner_users">Users scsmsdsfuwsdi</NavLink> {/* Updated NavLink */}
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet /> {/* Render nested routes */}
    </>
  );
};

export default Owner_about;
