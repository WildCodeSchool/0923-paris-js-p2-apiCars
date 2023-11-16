import { useNavigate } from "react-router-dom";
import "./descriptioncar.css";

function Descriptioncar() {
  const navigate = useNavigate();
  return (
    <div className="carpage">
      <div className="descriptioncar">
        <p>Moteur:16 cylindres en W, 64 soupapes</p>
        <p>Energie :essence</p>
        <p>Vitesse :maximale440 km/h</p>
        <p>0 à 100 km/h2.4 s</p>
        <p>Puissance:1600 ch à 7050 tr/min</p>
        <p>Boîte de vitesse:Automatique à double embrayage 7 vitesses</p>
      </div>
      <div className="carimage">
        <img src="src/assets/BUGATTI-CHIRON-02.png" alt="" />
        <img src="src/assets/BUGATTI-CHIRON-13.png" alt="" />
        <img src="src/assets/BUGATTI-CHIRON-05.png" alt="" />
      </div>
      <div className="buttoncar">
        <button
          className="buttoncarr"
          type="button"
          onClick={() => navigate("/reservation")}
        >
          Réservez
        </button>
      </div>
    </div>
  );
}

export default Descriptioncar;
