import { useNavigate } from "react-router-dom";

import "./navbar.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav-img">
        <img id="apicar" src="src/assets/carlogo.png" alt="logo" />
      </div>

      <h3 className=" fontSizeItems" onClick={() => navigate("/home")}>
        Home
      </h3>

      <h3 className=" fontSizeItems">Cars</h3>
      <h3 className=" fontSizeItems">Infos</h3>

      <div id="inscirptionNavBar">
        <h3 className="h3-login" onClick={() => navigate("/inscription")}>
          Log-In
        </h3>

        <h3 className="h3-login" onClick={() => navigate("/inscription")}>
          sign-up{" "}
        </h3>
      </div>
    </nav>
  );
}

export default NavBar;
