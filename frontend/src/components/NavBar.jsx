
import { useNavigate } from "react-router-dom";


import "./navbar.css";


function NavBar() {
  const navigate = useNavigate();

  return (
    <nav>
      <div className="nav-img">
        <img id="apicar" src="src/assets/carlogo.png" alt="logo" />
      </div>


      <div id="itemsNavBar">
        <h3 onClick={() => navigate("/home")}>Home</h3>

        <h3>Cars</h3>
        <h3>Infos</h3>
      </div>


      <div id="inscirptionNavBar">
        <h3 onClick={() => navigate("/inscription")}>LogIn</h3>
        <h3>Sign up </h3>

      </div>
    </nav>
  );
}

export default NavBar;
