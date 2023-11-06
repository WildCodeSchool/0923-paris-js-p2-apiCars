import React from "react";

function NavBar() {
  return (
    <main>
      <div className="nav-img">
        <img
          src="C:\Users\jouan\OneDrive\Bureau\wcs\apicars/carlogo.png"
          alt=""
        />
      </div>

      <div className="nav-item">
        <h3>Home</h3>
        <h3>Cars</h3>
        <h3>Infos</h3>
      </div>

      <div className="nav-log">
        <h3>LogIn </h3>
        <h3>Sign up </h3>
      </div>
    </main>
  );
}

export default NavBar;
