import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <nav>
      <div className="nav-img">
        <img id="apicar" src="src/assets/carlogo.png" alt="logo" />
      </div>

      <div className="nav-item">
        <h3>Home</h3>
        <h3>Cars</h3>
        <h3>Infos</h3>
      </div>

      <div className="nav-log">
        <h3>Log-In </h3>
        <h3>Sign-up </h3>
      </div>
    </nav>
  );
}

export default NavBar;
