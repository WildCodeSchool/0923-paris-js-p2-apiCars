import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <section id="navbar">
      <div id="logoNavBar">
        <img src="logo-api-car" alt="logo" />
      </div>

      <div id="itemsNavBar">
        <h3 onClick={() => navigate("/home")}>Home</h3>
        <h3>Cars</h3>
        <h3>Infos</h3>
      </div>

      <div id="inscirptionNavBar">
        <h3>LogIn</h3>
        <h3>Sign up </h3>
      </div>
    </section>
  );
}

export default NavBar;
