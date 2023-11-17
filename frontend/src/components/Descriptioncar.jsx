import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./descriptioncar.css";

function Descriptioncar() {
  const navigate = useNavigate();
  const [car, setCar] = useState({});
  const [paramsModel] = useSearchParams();
  const model = paramsModel.get("model");

  useEffect(() => {
    if (!model) return;
    const Url = `https://api.api-ninjas.com/v1/cars?model=${model}&limit=30"`;
    fetch(Url, {
      headers: { "X-Api-Key": "muuYWq9dAz9b/aNUgbJwdQ==h5A05bKO34Ksflbh" },
    })
      .then((res) => res.json())
      .then((data) => {
        setCar(data[0]);
      });
  }, []);

  return (
    <div className="carpage">
      <p id="modelcar">{car?.model}</p>
      <div className="descriptioncar">
        <p>Modèle : {car?.model}</p>
        <p>Cylindrées : {car?.cylinders}</p>
        <p>Carburant : {car?.fuel_type}</p>
      </div>
      <div className="carimage">
        <img id="tof1" src="src/assets/BUGATTI-CHIRON-02.png" alt="" />
        <img id="tof2" src="src/assets/BUGATTI-CHIRON-13.png" alt="" />
        <img id="tof3" src="src/assets/BUGATTI-CHIRON-05.png" alt="" />
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

/*
<p>Moteur:16 cylindres en W, 64 soupapes</p>
<p>Energie :essence</p>
<p>Vitesse :maximale440 km/h</p>
<p>0 à 100 km/h2.4 s</p>
<p>Puissance:1600 ch à 7050 tr/min</p>
<p>Boîte de vitesse:Automatique à double embrayage 7 vitesses</p>
*/
