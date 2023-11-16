import { useNavigate } from "react-router-dom";

import "./navbar.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav-img">
        <img
          id="apicar"
          src="src/assets/carlogo.png"
          alt="logo"
          onClick={() => navigate("/home")}
        />
      </div>

      <h3 className="fontSizeItems" onClick={() => navigate("/Home")}>
        Home
      </h3>
      <h3 className="fontSizeItems" onClick={() => navigate("/ListCategory")}>
        Cars
      </h3>
      <h3 className="fontSizeItems" onClick={() => navigate("/CarPage")}>
        Infos
      </h3>

      <div id="inscirptionNavBar">
        <h3 className="h3-login" onClick={() => navigate("/inscription")}>
          Log-In
        </h3>

        <h3 className="h3-login" onClick={() => navigate("/inscription")}>
          Sign-up{" "}
        </h3>
      </div>
    </nav>
  );
}

export default NavBar;
