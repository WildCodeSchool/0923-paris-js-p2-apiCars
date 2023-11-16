import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ComponentCard from "./ComponentCard";

function ListCarModel() {
  const [models, setModels] = useState();
  const navigate = useNavigate();

  const imageRandom = () => {
    const tab = [
      <img src="src/assets/photos/mercedesBenz.jpg" alt="Mercedes Benz" />,
      <img src="src/assets/photos/Peugeot.jpg" alt="Peugeot" />,
      <img src="src/assets/photos/RenaultClio4.jpg" alt="Renault" />,
      <img src="src/assets/photos/Skoda.jpg" alt="Skoda" />,
      <img src="src/assets/photos/Volvo.jpg" alt="Volvo" />,
      <img src="src/assets/photos/carelec.jpg" alt="Elec" />,
      <img src="src/assets/photos/Mazda6.png" alt="Mazda" />,
      <img src="src/assets/photos/utilitaire.jpg" alt="Utilitaire" />,
      <img src="src/assets/photos/VWCocci.jpg" alt="VW Cocci" />,
      <img src="src/assets/photos/utilitaire2.jpg" alt="Utilitaire" />,
      <img src="src/assets/photos/ToyotaYaris.jpg" alt="Toyota" />,
      <img src="src/assets/photos/ToyotaRav.jpg" alt="Toyota" />,
      <img src="src/assets/photos/lagunaCoupe.jpeg" alt="Renault" />,
      <img src="src/assets/photos/Audi.jpg" alt="Audi" />,
      <img src="src/assets/photos/images(4).jpg" alt="Mystère" />,
      <img src="src/assets/photos/images (3).jpg" alt="Mystère" />,
    ];
    const randomIndex = Math.floor(Math.random() * tab.length);
    return tab[randomIndex];
  };

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/cars?make=mercedes&limit=9", {
      headers: { "X-Api-Key": "muuYWq9dAz9b/aNUgbJwdQ==h5A05bKO34Ksflbh" },
    })
      .then((res) => res.json())
      .then((data) => {
        const uniqueModels = Array.from(new Set(data.map((car) => car.model)))
          .map((model) => data.find((car) => car.model === model))
          .slice(0, 9);

        setModels(uniqueModels);
      });
  }, []);

  return (
    <div className="car-container">
      {models
        ? models.map((car) => {
            return (
              <div key={car.make}>
                <ComponentCard
                  car={car}
                  imageRandom={imageRandom()}
                  onClick={() =>
                    navigate("/CarPage", { state: { make: car.make } })
                  }
                />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default ListCarModel;
