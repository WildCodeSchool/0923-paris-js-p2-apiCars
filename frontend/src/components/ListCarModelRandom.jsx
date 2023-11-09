import { useState, useEffect } from "react";
import ComponentCard from "./ComponentCard";

function ListCarModelRandom() {
  const [cars, setCars] = useState();

  const imageRandom = () => {
    const tab = [
      <img src="src/assets/photos/mercedesBenz.jpg" alt="Mercedes Benz" />,
      <img src="src/assets/photos/Peugeot.jpg" alt="Mercedes Benz" />,
      <img src="src/assets/photos/RenaultClio4.jpg" alt="Mercedes Benz" />,
      <img src="src/assets/photos/Skoda.jpg" alt="Mercedes Benz" />,
      <img src="src/assets/photos/Volvo.jpg" alt="Mercedes Benz" />,
      <img src="src/assets/photos/carelec.jpg" alt="Mercedes Benz" />,
      <img src="src/assets/photos/Mazda6.png" alt="Mercedes Benz" />,
      <img src="src/assets/photos/utilitaire.jpg" alt="Mercedes Benz" />,
      <img src="src/assets/photos/VWCocci.jpg" alt="Mercedes Benz" />,
      <img src="src/assets/photos/utilitaire2.jpg" alt="Mercedes Benz" />,
      <img src="src/assets/photos/ToyotaYaris.jpg" alt="Mercedes Benz" />,
      <img src="src/assets/photos/ToyotaRav.jpg" alt="Mercedes Benz" />,
      <img src="src/assets/photos/lagunaCoupe.jpeg" alt="Mercedes Benz" />,
      <img src="src/assets/photos/Audi.jpg" alt="Mercedes Benz" />,
    ];
    const randomIndex = Math.floor(Math.random() * tab.length);
    return tab[randomIndex];
  };

  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/cars?make=audi&limit=9", {
      headers: { "X-Api-Key": "muuYWq9dAz9b/aNUgbJwdQ==h5A05bKO34Ksflbh" },
    })
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <div>
      <div>
        {cars
          ? cars.map((car) => {
              return (
                <div key={car.model}>
                  <ComponentCard car={car} imageRandom={imageRandom()} />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default ListCarModelRandom;
